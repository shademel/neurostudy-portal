import { UserProps, UserToken } from '@/app/interfaces/User';
import {
  USER_TABLE_NAME,
  USER_TABLE_PARTITION_ID,
} from '@/app/utilities/auth/constants';
import isAuthenticated from '@/app/utilities/auth/isAuthenticated';
import { processStatus, returnBadResponse } from '@/app/utilities/responses';
import assertUserProps from '@/app/utilities/validation/assertUserData';
import {
  DynamoDBClient,
  GetItemCommand,
  GetItemCommandInput,
  GetItemCommandOutput,
  UpdateItemCommand,
  UpdateItemCommandInput,
} from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb';
import { marshall, unmarshall } from '@aws-sdk/util-dynamodb';
import { NextRequest } from 'next/server';

const client = new DynamoDBClient({});
const documentClient = DynamoDBDocumentClient.from(client);

export async function GET(req: NextRequest) {
  const userResponse: UserToken | Response = await isAuthenticated({ req });

  if (userResponse instanceof Response) {
    return userResponse;
  }

  const user = userResponse as UserToken;

  const commandParams: GetItemCommandInput = {
    TableName: USER_TABLE_NAME,
    Key: marshall({
      [USER_TABLE_PARTITION_ID]: user.email,
    }),
  };

  const command = new GetItemCommand(commandParams);
  const res: GetItemCommandOutput = await documentClient.send(command);

  const statusResponse: Response | undefined = processStatus(
    res.$metadata.httpStatusCode
  );
  if (statusResponse instanceof Response) {
    return statusResponse;
  }

  const { Item } = res;

  if (!Item) {
    return new Response('No user found.', { status: 404 });
  }

  const dbUser = unmarshall(Item);

  delete dbUser[USER_TABLE_PARTITION_ID];

  return new Response(JSON.stringify(dbUser), {
    status: 200,
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
  });
}

export async function PUT(req: NextRequest) {
  try {
    const userResponse: UserToken | Response = await isAuthenticated({ req });

    if (userResponse instanceof Response) {
      return userResponse;
    }

    const user = userResponse as UserToken;

    const Item: UserProps = await req.json();
    assertUserProps(Item);

    let updateExpression = 'set';
    const expressionAttributeValues: Record<string, unknown> = {};
    const expressionAttributeNames: Record<string, string> = {};

    for (const [attribute, value] of Object.entries(Item)) {
      updateExpression += ` #${attribute} = :${attribute},`;
      expressionAttributeValues[':' + attribute] = value;
      expressionAttributeNames['#' + attribute] = attribute;
    }

    updateExpression = updateExpression.slice(0, -1);

    const commandParams: UpdateItemCommandInput = {
      TableName: USER_TABLE_NAME,
      Key: marshall({
        [USER_TABLE_PARTITION_ID]: user.email,
      }),
      UpdateExpression: updateExpression,
      ExpressionAttributeValues: marshall(expressionAttributeValues),
      ExpressionAttributeNames: expressionAttributeNames,
    };

    const command = new UpdateItemCommand(commandParams);
    const res = await documentClient.send(command);

    const statusResponse: Response | undefined = processStatus(
      res.$metadata.httpStatusCode
    );
    if (statusResponse instanceof Response) {
      return statusResponse;
    }

    return new Response(null, {
      status: 200,
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    });
  } catch (ex) {
    const error = ex as Error;

    return returnBadResponse({ message: error.message });
  }
}
