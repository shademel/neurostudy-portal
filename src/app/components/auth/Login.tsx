'use client';

import styles from './auth.module.css';
import ActionButton from '../buttons/ActionButton';
import Link from 'next/link';
import AuthLeftBanner from './AuthLeftBanner';
import AuthFormFooter from './AuthFormFooter';
import { FieldValues, UseFormReturn, useForm } from 'react-hook-form';
import TextBox from '@/app/components/formElements/TextBox';
import { BUTTON_STYLE, EMAIL_REGEX } from '@/app/utilities/constants';
import classNames from 'classnames';
import Form from '@/app/components/formElements/Form';
import AuthFormHeader from './AuthFormHeader';

interface LoginFieldValues extends FieldValues {
  email: string;
  password: string;
}

const Login = () => {
  const { control }: UseFormReturn<LoginFieldValues> =
    useForm<LoginFieldValues>({ mode: 'onBlur' });

  return (
    <main className={styles.container}>
      <div className='row'>
        <AuthLeftBanner />
        <div className={classNames(styles.formColumn, 'col-md-8')}>
          <div className={styles.formColumnWrapper}>
            <AuthFormHeader title='Login' subText='to your account' />
            <Form control={control}>
              <TextBox
                name='email'
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
              <div>
                <ActionButton
                  type='submit'
                  label='Login'
                  disabled
                  className={classNames(styles.btn, styles.submitBtn, 'mb-3')}
                  style={BUTTON_STYLE.PrimaryFull}
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
