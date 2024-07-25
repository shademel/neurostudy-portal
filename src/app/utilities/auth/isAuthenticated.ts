import { getToken } from 'next-auth/jwt';
import { NextRequest } from 'next/server';
import { UserToken } from '@/app/interfaces/User';

export default async function isAuthenticated({
  req,
}: {
  req: NextRequest;
}): Promise<UserToken | Response> {
  const token: UserToken | null = await getToken({ req });

  if (!token) {
    return new Response('User is not authorized.', { status: 401 });
  }

  return {
    id: token.id,
    email: token.email,
  };
}
