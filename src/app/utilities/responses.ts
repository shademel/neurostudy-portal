export const returnBadResponse = (info?: Record<string, unknown>) => {
  return new Response(JSON.stringify({ error: 'Bad Request', ...info }), {
    status: 400,
    statusText: 'Bad Request',
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
  });
};
