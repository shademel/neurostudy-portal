import { AuthError } from 'aws-amplify/auth';
import { returnBadResponse } from '../responses';
import { DynamoDBServiceException } from '@aws-sdk/client-dynamodb';

const DEFAULT_ERROR_NAME = 'Request Failure';
const DEFAULT_ERROR_MESSAGE = 'Server failed to handle the response.';
const DEFAULT_ERROR_RES = {
  name: DEFAULT_ERROR_NAME,
  message: DEFAULT_ERROR_MESSAGE,
};

const returnServerError = (error: Error | null, status: number = 500) => {
  const res =
    (status.toString().startsWith('5') && DEFAULT_ERROR_RES) ||
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
    const status: number | undefined = ex.$metadata.httpStatusCode;
    return returnServerError(status === 400 ? DEFAULT_ERROR_RES : ex, status);
  } else {
    return returnServerError(null);
  }
};
