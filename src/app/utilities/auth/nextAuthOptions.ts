import {
  confirmSignUp,
  getCurrentUser,
  resendSignUpCode,
  signIn,
  signOut,
} from 'aws-amplify/auth';
import CognitoProvider from 'next-auth/providers/cognito';
import CredentialsProvider from 'next-auth/providers/credentials';
import { FORM_STATE } from './constants';
import { AuthOptions, getServerSession, User } from 'next-auth';
import {
  COGNITO_CLIENT_ID,
  COGNITO_CLIENT_SECRET,
  COGNITO_ISSUER,
} from '../amplify/constants';

const getUser = async () => {
  const user = await getCurrentUser();
  return {
    id: user.userId,
    email: user.username,
  };
};

const applySignIn = async ({
  username,
  password,
}: {
  username: string;
  password: string;
}) => {
  const signInOutput = await signIn({ username, password });

  const { signInStep } = signInOutput.nextStep;

  let user = null;

  if (signInStep === FORM_STATE.DONE) {
    user = await getUser();
    await signOut();
  } else {
    if (signInStep === FORM_STATE.CONFIRM_SIGN_UP) {
      await resendSignUpCode({ username });
    }
    throw new Error(JSON.stringify(signInOutput));
  }

  return user;
};

const nextAuthOptions: AuthOptions = {
  providers: [
    CognitoProvider({
      clientId: COGNITO_CLIENT_ID,
      clientSecret: COGNITO_CLIENT_SECRET,
      issuer: COGNITO_ISSUER,
    }),
    CredentialsProvider({
      credentials: {
        username: { type: 'text', label: 'Username' },
        password: { type: 'password', label: 'Password' },
        confirmationCode: { type: 'text', label: 'Confirmation Code' },
      },
      async authorize(credentials, req) {
        if (await getServerSession(nextAuthOptions)) {
          throw new Error('A user is already signed-in.');
        }

        if (!credentials) {
          throw new Error('No credentials found!');
        }

        const {
          username = '',
          password = '',
          confirmationCode = '',
        } = credentials;

        if (req.query?.method === 'confirmSignUp') {
          const confirmSignUpOutput = await confirmSignUp({
            username,
            confirmationCode,
          });
          const { signUpStep } = confirmSignUpOutput.nextStep;

          if (signUpStep === FORM_STATE.DONE) {
            return await applySignIn({ username, password });
          } else {
            throw new Error(JSON.stringify(confirmSignUpOutput));
          }
        } else {
          return await applySignIn({ username, password });
        }
      },
    }),
  ],
  pages: {
    signIn: '/login',
  },
  callbacks: {
    async session({ session, token }) {
      if (session.user && token.sub) {
        const user: User = session.user as User;
        user.id = token.sub;
      }
      return session;
    },
    async jwt(props) {
      const { token, user } = props;
      if (user) {
        token.id = user.id;
        token.email = user.email;
      }
      return token;
    },
  },
};

export default nextAuthOptions;
