import { ResourcesConfig } from 'aws-amplify';

const COGNITO_USER_POOL_ID: string = process.env.COGNITO_USER_POOL_ID ?? '';
const COGNITO_CLIENT_ID: string = process.env.COGNITO_CLIENT_ID ?? '';
const COGNITO_CLIENT_SECRET: string = process.env.COGNITO_CLIENT_SECRET ?? '';
const COGNITO_ISSUER: string = process.env.COGNITO_ISSUER ?? '';

if (
  (process.env.NODE_ENV !== 'development' && !COGNITO_USER_POOL_ID) ||
  !COGNITO_CLIENT_ID ||
  !COGNITO_CLIENT_SECRET ||
  !COGNITO_ISSUER
) {
  throw new Error('Cognito variables have not been properly initialized.');
}

export { COGNITO_USER_POOL_ID };
export { COGNITO_CLIENT_ID };
export { COGNITO_CLIENT_SECRET };
export { COGNITO_ISSUER };

export const AWS_CONFIG: ResourcesConfig = {
  Auth: {
    Cognito: {
      userPoolId: COGNITO_USER_POOL_ID,
      userPoolClientId: COGNITO_CLIENT_ID,
    },
  },
};
