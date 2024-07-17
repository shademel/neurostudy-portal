import { ResourcesConfig } from 'aws-amplify';

const COGNITO_USER_POOL_ID: string = process.env.COGNITO_USER_POOL_ID ?? '';
const COGNITO_CLIENT_ID: string = process.env.COGNITO_CLIENT_ID ?? '';
const COGNITO_CLIENT_SECRET: string = process.env.COGNITO_CLIENT_SECRET ?? '';
const COGNITO_DOMAIN: string = process.env.COGNITO_DOMAIN ?? '';
const COGNITO_ISSUER: string = process.env.COGNITO_ISSUER ?? '';

const HOST_URL =
  ((process.env.NODE_ENV === 'development' &&
    'http://localhost:' + process.env.PORT) ||
    process.env.HOST_URL) ??
  '';

if (
  (process.env.NODE_ENV !== 'development' && !COGNITO_USER_POOL_ID) ||
  !COGNITO_CLIENT_ID ||
  !COGNITO_CLIENT_SECRET ||
  !COGNITO_DOMAIN ||
  !COGNITO_ISSUER ||
  !HOST_URL
) {
  // TEMP
  // throw new Error('Cognito variables have not been properly initialized.');
}

export { COGNITO_USER_POOL_ID };
export { COGNITO_CLIENT_ID };
export { COGNITO_CLIENT_SECRET };
export { COGNITO_DOMAIN };
export { COGNITO_ISSUER };

export const AWS_CONFIG: ResourcesConfig = {
  Auth: {
    Cognito: {
      userPoolId: COGNITO_USER_POOL_ID,
      userPoolClientId: COGNITO_CLIENT_ID,
      loginWith: {
        oauth: {
          domain: COGNITO_DOMAIN,
          scopes: ['openid', 'email'],
          redirectSignIn: [HOST_URL],
          redirectSignOut: [HOST_URL],
          responseType: 'code',
        },
      },
    },
  },
};

export enum AUTH_EVENT_TYPE {
  SIGNED_IN = 'signedIn',
  SIGNED_OUT = 'signedOut',
  SIGN_IN_WITH_REDIRECT_FAILURE = 'signInWithRedirect_failure',
}

export type PayloadType = { event: AUTH_EVENT_TYPE; data: unknown } & {
  message?: string | undefined;
};
