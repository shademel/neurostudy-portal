export enum AUTH_EVENT_TYPE {
  SIGNED_IN = 'signedIn',
  SIGNED_OUT = 'signedOut',
  SIGN_IN_WITH_REDIRECT_FAILURE = 'signInWithRedirect_failure',
}

export type PayloadType = { event: AUTH_EVENT_TYPE; data: unknown } & {
  message?: string | undefined;
};
