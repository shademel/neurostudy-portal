'use client';

import styles from '../page.module.css';
import AuthLeftBanner from '../component/AuthLeftBanner';
import AuthFormFooter from '../component/AuthFormFooter';
import classNames from 'classnames';

const Page = () => {
  return (
    <main className='container'>
      <div className='row'>
        <AuthLeftBanner />
        <div className={classNames(styles.textColumn, 'col-md-8')}>
          <div className={styles.textColumnWrapper}>
            <div className={styles.textTitleWrapper}>
              <p className={styles.textTitle}>Sign Up</p>
              <span className={styles.smallTextTitle}>Its quick and easy</span>
            </div>
            <form className={styles.form}>
              <div className='row'>
                <div className='col-sm-5'>Hello</div>
                <div className='col-sm-7'>World</div>
              </div>
            </form>
            <AuthFormFooter />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
