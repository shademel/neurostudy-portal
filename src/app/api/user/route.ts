import { UserProps, UserToken } from '@/app/interfaces/User';
import {
  USER_TABLE_NAME,
  USER_TABLE_PARTITION_ID,
} from '@/app/utilities/auth/constants';
import isAuthenticated from '@/app/utilities/auth/isAuthenticated';
import assertUserProps from '@/app/utilities/validation/assertUserData';
import {
  GetItemCommand,
  GetItemCommandInput,
  GetItemCommandOutput,
  UpdateItemCommandOutput,
} from '@aws-sdk/client-dynamodb';
import { marshall, unmarshall } from '@aws-sdk/util-dynamodb';
import { NextRequest } from 'next/server';
import { dbDocumentClient } from '../../utilities/db/configure';
import updateUser from '@/app/utilities/auth/updateUser';
import createUser from '@/app/utilities/auth/createUser';
import { returnAuthError } from '@/app/utilities/auth/responses';

export async function GET(req: NextRequest) {
  try {
    const userResponse: UserToken | Response = await isAuthenticated({ req });

    if (userResponse instanceof Response) {
      return userResponse;
    }

    const user = userResponse as UserToken;
    const { email } = user;

    const commandParams: GetItemCommandInput = {
      TableName: USER_TABLE_NAME,
      Key: marshall({
        [USER_TABLE_PARTITION_ID]: email,
      }),
    };

    const command = new GetItemCommand(commandParams);
    const res: GetItemCommandOutput = await dbDocumentClient.send(command);

    let { Item } = res;

    if (!Item) {
      // NOTE
      // This is possible when idP user signs up
      Item = marshall(await createUser(email));
    }

    const dbUser = unmarshall(Item);

    return new Response(JSON.stringify(dbUser), {
      status: 200,
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    });
  } catch (ex) {
    return returnAuthError(ex);
  }
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

    const updateResponse: UpdateItemCommandOutput = await updateUser(
      Item,
      user
    );

    if (updateResponse instanceof Response) {
      return updateResponse;
    }

    return new Response(null, {
      status: 200,
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    });
  } catch (ex) {
    return returnAuthError(ex);
  }
}
