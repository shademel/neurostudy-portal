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

const SignUp = () => {
  // TODO
  // https://trello.com/c/mkNpbNGg/108-sign-up-implement-persistent-user-sessions
  // We'll configure `user` or relevant variable to determine the user, if in session
  // Also, update the following `unknown` type along with handling the aforementioned issue
  const [user, setUser] = useState<unknown>();

  useEffect(() => {
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
      <div className='row'>
        <AuthLeftBanner />
        <div className={classNames(styles.formColumn, 'col-md-8')}>
          {user ? <AuthFinishSignUp /> : <AuthInitSignUp />}
        </div>
      </div>
    </main>
  );
};

export default SignUp;
