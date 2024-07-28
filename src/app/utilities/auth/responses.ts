import { AuthError } from 'aws-amplify/auth';
import { returnBadResponse } from '../responses';
import { DynamoDBServiceException } from '@aws-sdk/client-dynamodb';

const DEFAULT_ERROR_NAME = 'Request Failure';
const DEFAULT_ERROR_MESSAGE = 'Server failed to handle the response.';

const returnServerError = (error: Error | null, status: number = 500) => {
  const res =
    (status.toString().startsWith('5') && {
      name: DEFAULT_ERROR_NAME,
      message: DEFAULT_ERROR_MESSAGE,
    }) ||
    (error && {
      name: error.name || DEFAULT_ERROR_NAME,
      message: error.message || DEFAULT_ERROR_MESSAGE,
    }) ||
    null;

  const statusText = res?.name || DEFAULT_ERROR_NAME;

  return new Response(JSON.stringify(res), {
    status,
    statusText,
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
  });
};

export const returnAuthError = (ex: Error | unknown) => {
  if (ex instanceof AuthError) {
    return returnBadResponse({ name: ex.name, message: ex.message });
  } else if (ex instanceof DynamoDBServiceException) {
    return returnServerError(ex, ex.$metadata.httpStatusCode);
  } else {
    return returnServerError(null);
  }
};
