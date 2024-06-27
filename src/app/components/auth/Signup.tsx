'use client';

import styles from './auth.module.css';
import AuthLeftBanner from './AuthLeftBanner';
import classNames from 'classnames';
import AuthInitSignUp from './AuthInitSignUp';
import AuthFinishSignUp from './AuthFinishSignUp';
import { useEffect, useState } from 'react';
import {
  addAuthEventListener,
  removeAuthEventListener,
} from '@/app/utilities/amplify/authListener';
import {
  AUTH_EVENT_TYPE,
  PayloadType,
} from '@/app/utilities/amplify/constants';
import { getCurrentUser } from 'aws-amplify/auth';
import { notifyError } from '@/app/utilities/common';
import LoaderWrapper from '../loaderWrapper/LoaderWrapper';

const SignUp = () => {
  // TODO
  // https://trello.com/c/mkNpbNGg/108-sign-up-implement-persistent-user-sessions
  // We'll configure `user` or relevant variable to determine the user, if in session
  // Also, update the following `unknown` type along with handling the aforementioned issue
  const [user, setUser] = useState<unknown>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);

    getCurrentUser()
      .then((user) => {
        setUser(user);
      })
      .catch((ex) => {
        if (ex.name !== 'UserUnAuthenticatedException') {
          notifyError(ex as object);
        }
      })
      .finally(() => {
        setIsLoading(false);
      });

    const onSignedIn = ({ payload }: { payload: PayloadType }) => {
      const { data } = payload;
      setUser(data);
    };

    const onSignedOut = () => {
      setUser(null);
    };

    addAuthEventListener(AUTH_EVENT_TYPE.SIGNED_IN, onSignedIn);
    addAuthEventListener(AUTH_EVENT_TYPE.SIGNED_OUT, onSignedOut);

    return () => {
      removeAuthEventListener(AUTH_EVENT_TYPE.SIGNED_IN, onSignedIn);
      removeAuthEventListener(AUTH_EVENT_TYPE.SIGNED_OUT, onSignedOut);
    };
  }, []);

  return (
    <main className={styles.container}>
      <LoaderWrapper isLoading={isLoading}>
        <div className='row'>
          <AuthLeftBanner />
          <div className={classNames(styles.formColumn, 'col-md-8')}>
            {user ? <AuthFinishSignUp /> : <AuthInitSignUp />}
          </div>
        </div>
      </LoaderWrapper>
    </main>
  );
};

export default SignUp;
