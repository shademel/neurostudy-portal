'use client';

import styles from '../page.module.css';
import TextBox, { TextboxVariant } from '../../components/textbox/Textbox';
import ActionButton from '../../components/buttons/ActionButton';
import Link from 'next/link';
import LeftBanner from '../component/LeftBanner';

const Page = () => {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <LeftBanner />
        <div className={styles.textColumn}>
          <div className={styles.textColumnWrapper}>
            <div className={styles.textTitleWrapper}>
              <p className={styles.textTitle}>Login</p>
              <span className={styles.smallTextTitle}>to your account</span>
            </div>
            <form className={styles.form}>
              <div className={styles.textArea}>
                <TextBox
                  variant={TextboxVariant.LONG}
                  name={'Email'}
                  label={''}
                  type={'email'}
                  value={''}
                  required={true}
                  errorMessage={''}
                  placeholder={'Email address'}
                  onBlur={() => { }}
                  onChange={() => { }}
                />
                <TextBox
                  variant={TextboxVariant.LONG}
                  name={'Password'}
                  label={''}
                  type={'password'}
                  value={''}
                  required={true}
                  errorMessage={''}
                  placeholder={'New Password'}
                  onBlur={() => { }}
                  onChange={() => { }}
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
            <div className={styles.breakLineWrapper}>
              <hr className={styles.breakLine} />
              <span className={styles.or}>or</span>
              <hr className={styles.breakLine} />
            </div>
            <div>
              <button className={styles.continueWithGoogleButton}>
                Continue with Google
              </button>
            </div>
            <p className={styles.newSignUp}>
              New to Neurodiversity Academy ?{' '}
              <span className={styles.signUpLink}>
                <Link href='/login'>Sign up</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
