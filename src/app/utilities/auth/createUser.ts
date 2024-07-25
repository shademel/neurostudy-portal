import { PutItemCommand, PutItemCommandInput } from '@aws-sdk/client-dynamodb';
import { USER_TABLE_NAME, USER_TABLE_PARTITION_ID } from './constants';
import { marshall } from '@aws-sdk/util-dynamodb';
import { dbDocumentClient } from '../db/configure';

const createUser = async (email: string) => {
  const data = {
    [USER_TABLE_PARTITION_ID]: email,
  };
  const commandParams: PutItemCommandInput = {
    TableName: USER_TABLE_NAME,
    Item: marshall(data),
  };

  const command = new PutItemCommand(commandParams);
  await dbDocumentClient.send(command);

  return data;
};

export default createUser;
