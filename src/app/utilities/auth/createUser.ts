import { PutItemCommand, PutItemCommandInput } from '@aws-sdk/client-dynamodb';
import {
  DEFAULT_USER,
  USER_TABLE_NAME,
  USER_TABLE_PARTITION_ID,
} from './constants';
import { marshall } from '@aws-sdk/util-dynamodb';
import { dbDocumentClient } from '../db/configure';
import { UserProps } from '@/app/interfaces/User';

type NewUserProps = UserProps & {
  Email: string;
};

const createUser = async (email: string): Promise<NewUserProps> => {
  const defaultUser: Partial<NewUserProps> = { ...DEFAULT_USER };
  let key: keyof NewUserProps;
  for (key in defaultUser) {
    if (typeof defaultUser[key] === 'number') {
      delete defaultUser[key];
    }
  }

  const user: NewUserProps = {
    ...defaultUser,
    [USER_TABLE_PARTITION_ID]: email,
  };

  const commandParams: PutItemCommandInput = {
    TableName: USER_TABLE_NAME,
    Item: marshall(user),
  };

  const command = new PutItemCommand(commandParams);
  await dbDocumentClient.send(command);

  return user;
};

export default createUser;
