'use client';

import styles from './auth.module.css';
import ActionButton from '../buttons/ActionButton';
import Link from 'next/link';
import AuthLeftBanner from './AuthLeftBanner';
import AuthFormFooter from './AuthFormFooter';
import { FieldValues, UseFormReturn, useForm } from 'react-hook-form';
import TextBox from '@/app/components/formElements/TextBox';
import {
  BUTTON_STYLE,
  EMAIL_REGEX,
  TOAST_DEV_IN_PROGRESS_MESSAGE,
} from '@/app/utilities/constants';
import classNames from 'classnames';
import Form from '@/app/components/formElements/Form';
import AuthFormHeader from './AuthFormHeader';
import { signIn } from 'aws-amplify/auth';
import toast from 'react-hot-toast';
import { FORM_STATE } from '@/app/utilities/auth/constants';
import { useRouter } from 'next/navigation';
import { notifyError } from '@/app/utilities/common';

interface LoginFieldValues extends FieldValues {
  username: string;
  password: string;
}

const Login = () => {
  const router = useRouter();
  const { control, handleSubmit }: UseFormReturn<LoginFieldValues> =
    useForm<LoginFieldValues>({ mode: 'onBlur' });

  const onSubmit = async (data: LoginFieldValues) => {
    const { username, password } = data;

    try {
      const {
        nextStep: { signInStep },
      } = await signIn({ username, password });

      if (signInStep === FORM_STATE.DONE) {
        router.replace('/');
      } else {
        toast(TOAST_DEV_IN_PROGRESS_MESSAGE);
      }
    } catch (ex) {
      notifyError(ex as object);
    }
  };

  return (
    <main className={styles.container}>
      <div className='row'>
        <AuthLeftBanner />
        <div className={classNames(styles.formColumn, 'col-md-8')}>
          <div className={styles.formColumnWrapper}>
            <AuthFormHeader title='Login' subText='to your account' />
            <Form control={control} onSubmit={handleSubmit(onSubmit)}>
              <TextBox
                name='username'
                type='email'
                label='Email Address'
                required
                placeholder='Email address'
                pattern={EMAIL_REGEX}
              />
              <TextBox
                name='password'
                type='password'
                label='Password'
                required
                placeholder='Password'
              />
              <div className={classNames(styles.forgotPassword, 'pt-1')}>
                <Link href='#'>Forgot Password?</Link>
              </div>
              <div className='my-3'>
                <ActionButton
                  type='submit'
                  label='Login'
                  style={BUTTON_STYLE.Primary}
                  fullWidth
                />
              </div>
            </Form>
            <AuthFormFooter
              text='New to Neurodiversity Academy? '
              to='/auth/signup'
              toText='Sign Up'
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
