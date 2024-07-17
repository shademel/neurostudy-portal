'use client';

import styles from './auth.module.css';
import AuthLeftBanner from './AuthLeftBanner';
import classNames from 'classnames';
import AuthInitSignUp from './AuthInitSignUp';
import AuthFinishSignUp from './AuthFinishSignUp';
import LoaderWrapper from '../loader/LoaderWrapper';
import { useSession } from 'next-auth/react';
import useAuthError from '@/app/hooks/useAuthError';

const SignUp: React.FC = () => {
  const { data: session, status } = useSession();

  useAuthError();

  return (
    <main className={styles.container}>
      <LoaderWrapper isLoading={status === 'loading'} className='row'>
        <AuthLeftBanner />
        <div className={classNames(styles.formColumn, 'col-md-8')}>
          {session ? <AuthFinishSignUp /> : <AuthInitSignUp />}
        </div>
      </LoaderWrapper>
    </main>
  );
};

export default SignUp;
