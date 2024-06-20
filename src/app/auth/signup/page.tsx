'use client';

import styles from '../page.module.css';
import AuthLeftBanner from '../component/AuthLeftBanner';
import AuthFormFooter from '../component/AuthFormFooter';

const Page = () => {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <AuthLeftBanner />
        <div className={styles.textColumn}>
          <div className={styles.textColumnWrapper}>
            <div className={styles.textTitleWrapper}>
              <p className={styles.textTitle}>Sign Up</p>
              <span className={styles.smallTextTitle}>Its quick and easy</span>
            </div>
            <form className={styles.form}>

            </form>
            <AuthFormFooter />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
