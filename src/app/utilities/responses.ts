export const returnBadResponse = (info?: Record<string, unknown>) => {
  return new Response(JSON.stringify({ error: 'Bad Request', ...info }), {
    status: 400,
    statusText: 'Bad Request',
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
  });
};

export const processStatus = (
  status: number | undefined
): Response | undefined => {
  if (status && !/^(2|3)/.test(status.toString())) {
    return new Response('Request failed to process.', {
      status,
      statusText: 'Request failure',
    });
  }
};
