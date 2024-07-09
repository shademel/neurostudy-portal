import { ResourcesConfig } from 'aws-amplify';

const NEXT_PUBLIC_USER_POOL_ID = process.env.NEXT_PUBLIC_USER_POOL_ID;
const NEXT_PUBLIC_CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID;
const NEXT_PUBLIC_COGNITO_DOMAIN = process.env.NEXT_PUBLIC_COGNITO_DOMAIN;

const BASE_URL =
  typeof window !== 'undefined'
    ? window.location.origin
    : process.env.HOST_URL || 'http://localhost:' + process.env.PORT;

if (
  !NEXT_PUBLIC_USER_POOL_ID ||
  !NEXT_PUBLIC_CLIENT_ID ||
  !NEXT_PUBLIC_COGNITO_DOMAIN ||
  !BASE_URL
) {
  throw new Error('Cognito variables have not been properly initialized.');
}

const awsConfig: ResourcesConfig = {
  Auth: {
    Cognito: {
      userPoolId: NEXT_PUBLIC_USER_POOL_ID,
      userPoolClientId: NEXT_PUBLIC_CLIENT_ID,
      loginWith: {
        oauth: {
          domain: NEXT_PUBLIC_COGNITO_DOMAIN,
          scopes: ['openid', 'email'],
          redirectSignIn: [BASE_URL],
          redirectSignOut: [BASE_URL],
          responseType: 'code',
        },
      },
    },
  },
};

export default awsConfig;
