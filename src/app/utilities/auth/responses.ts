export const returnAuthError = (ex: Error) => {
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
