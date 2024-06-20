import Link from 'next/link';
import styles from '../page.module.css';

type AuthFormFooterProps = {
  text?: string;
  toText?: string;
  to?: string;
};

const AuthFormFooter: React.FC<AuthFormFooterProps> = ({
  text = 'Already have an account? ',
  toText = 'Login',
  to = '/auth/login',
}: AuthFormFooterProps) => {
  return (
    <>
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
        {text}
        <span className={styles.signUpLink}>
          <Link href={to}>{toText}</Link>
        </span>
      </p>
    </>
  );
};

export default AuthFormFooter;
