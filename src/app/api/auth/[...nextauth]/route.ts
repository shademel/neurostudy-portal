import nextAuthOptions from '@/app/utilities/auth/nextAuthOptions';
import NextAuth from 'next-auth';
import '@/app/utilities/amplify/configure';

const handler = NextAuth(nextAuthOptions);

export { handler as GET, handler as POST };
