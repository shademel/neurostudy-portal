import { AmplifyError } from '@aws-amplify/core/internals/utils';

export const returnAuthError = (ex: AmplifyError) => {
  const { name, message } = ex;

  return new Response(
    JSON.stringify({
      name,
      message,
    }),
    {
      status: 500,
      statusText: name || 'Request Failure',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    }
  );
};
