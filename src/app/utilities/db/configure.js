import { DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb';
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';

export const dbClient = new DynamoDBClient({});
export const dbDocumentClient = DynamoDBDocumentClient.from(dbClient);
