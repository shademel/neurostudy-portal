// TODO
// https://trello.com/c/OxSL9Xpf/132-infrastructure-integrate-redux
// This is a temporary alternative until we set up & integrate redux

'use client';

import { AuthUser } from 'aws-amplify/auth';
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import { AUTH_EVENT_TYPE, PayloadType } from './utilities/amplify/constants';
import {
  addAuthEventListener,
  removeAuthEventListener,
} from './utilities/amplify/authListener';
import { notifyError } from './utilities/common';

interface PropType {
  user: AuthUser | undefined;
  children: ReactNode;
}

export interface RootContent {
  user: PropType['user'];
  setUser: Dispatch<PropType['user'] | SetStateAction<PropType['user']>>;
}

export const RootContext = createContext<RootContent | undefined>(undefined);

export const useRootContext = () => {
  const context = useContext(
    RootContext as React.Context<RootContent | undefined>
  );
  if (!context) {
    throw new Error('useRootContext does not have proper context.');
  }
  return context;
};

export default function RootProvider({ user: rootUser, children }: PropType) {
  const [user, setUser] = useState<PropType['user']>(rootUser);

  useEffect(() => {
    const onSignedIn = ({ payload }: { payload: PayloadType }) => {
      const data = payload.data as AuthUser;
      setUser(data);
    };

    const onSignedOut = () => {
      setUser(undefined);
    };

    const onSignInWithRedirectFailure = () => {
      notifyError('There was an error signing in.');
    };

    addAuthEventListener(AUTH_EVENT_TYPE.SIGNED_IN, onSignedIn);
    addAuthEventListener(AUTH_EVENT_TYPE.SIGNED_OUT, onSignedOut);
    addAuthEventListener(
      AUTH_EVENT_TYPE.SIGN_IN_WITH_REDIRECT_FAILURE,
      onSignInWithRedirectFailure
    );

    return () => {
      removeAuthEventListener(AUTH_EVENT_TYPE.SIGNED_IN, onSignedIn);
      removeAuthEventListener(AUTH_EVENT_TYPE.SIGNED_OUT, onSignedOut);
    };
  }, []);

  return (
    <RootContext.Provider value={{ user, setUser }}>
      {children}
    </RootContext.Provider>
  );
}
