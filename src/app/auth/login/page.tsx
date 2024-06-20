'use client';

import styles from '../page.module.css';
import ActionButton from '../../components/buttons/ActionButton';
import Link from 'next/link';
import AuthLeftBanner from '../component/AuthLeftBanner';
import AuthFormFooter from '../component/AuthFormFooter';
import { FieldValues, UseFormReturn, useForm } from 'react-hook-form';
import TextBox from '@/app/components/formInputs/TextBox';
import { TEXTBOX_VARIANT } from '@/app/utilities/constants';
import classNames from 'classnames';

interface LoginFieldValues extends FieldValues {
  email: string;
  password: string;
}

const Page = () => {
  const { control }: UseFormReturn<LoginFieldValues> =
    useForm<LoginFieldValues>({ mode: 'onBlur' });

  return (
    <main className='container'>
      <div className='row'>
        <AuthLeftBanner />
        <div className={classNames(styles.textColumn, 'col-md-8')}>
          <div className={styles.textColumnWrapper}>
            <div className={styles.textTitleWrapper}>
              <p className={styles.textTitle}>Login</p>
              <span className={styles.smallTextTitle}>to your account</span>
            </div>
            <form className={styles.form}>
              <div className={styles.textArea}>
                <TextBox
                  control={control}
                  variant={TEXTBOX_VARIANT.LONG}
                  name='email'
                  type='email'
                  required
                  placeholder='Email address'
                />
                <TextBox
                  control={control}
                  variant={TEXTBOX_VARIANT.LONG}
                  name='password'
                  type='password'
                  required
                  placeholder='Password'
                />
              </div>
              <div className={styles.forgotPassword}>
                <Link href='/login'>Forgot Password?</Link>
              </div>
              <div className={styles.buttonArea}>
                <ActionButton
                  type='submit'
                  label='Login'
                  disabled={true}
                  className={styles.accessButton}
                />
              </div>
            </form>
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

export default Page;
