export const returnBadResponse = () => {
  return new Response(JSON.stringify({ error: 'Bad Request' }), {
    status: 400,
    statusText: 'Bad Request',
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
  });
};
