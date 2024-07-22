'use client';

import styles from './auth.module.css';
import AuthLeftBanner from './AuthLeftBanner';
import { UseFormReturn, useForm } from 'react-hook-form';
import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { FORM_STATE } from '@/app/utilities/auth/constants';
import { ForgotPasswordFieldValues } from '@/app/interfaces/ForgotPasswordInterface';
import AuthInitForgotPassword from './AuthInitForgotPassword';
import AuthFinishForgotPassword from './AuthFinishForgotPassword';

const ForgotPassword = () => {
  const methods: UseFormReturn<ForgotPasswordFieldValues> =
    useForm<ForgotPasswordFieldValues>({
      mode: 'onBlur',
    });

  const [username, setUsername] = useState<string>('');
  const [formState, setFormState] = useState<FORM_STATE>(
    FORM_STATE.INITIALIZED
  );
  const isConfirming =
    formState === FORM_STATE.CONFIRM_RESET_PASSWORD_WITH_CODE;
  const [isResetDone, setResetDone] = useState<boolean>(false);

  const handleVerificationCode = (username: string) => {
    setUsername(username);
    setFormState(FORM_STATE.CONFIRM_RESET_PASSWORD_WITH_CODE);
  };

  const handleResetDone = () => {
    setFormState(FORM_STATE.DONE);
    setResetDone(true);
  };

  useEffect(() => {
    methods.reset();
  }, [isResetDone, methods]);

  return (
    <main className={styles.container}>
      <div className='row'>
        <AuthLeftBanner />
        <div className={classNames(styles.formColumn, 'col-md-8')}>
          {!isConfirming ? (
            <AuthInitForgotPassword {...{ handleVerificationCode }} />
          ) : (
            <AuthFinishForgotPassword {...{ username, handleResetDone }} />
          )}
        </div>
      </div>
    </main>
  );
};

export default ForgotPassword;
