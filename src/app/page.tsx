'use client';
import styles from './page.module.css';
// import ButtonDisplay from './components/buttons/ButtonDisplay';
// import Example from './components/typography/Example';
// import BadgeDisplay from './components/hero/Hero';
import CardList from './components/article/card';
import Script from 'next/script';
import Banner from './components/hero/Banner';

const getGoogleAnalyticsScript = () => {
  return (
    <>
      <Script src='https://www.googletagmanager.com/gtag/js?id=G-5YMLVTTK45' />
      <Script id='google-analytics'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-5YMLVTTK45');
        `}
      </Script>
    </>
  );
};

export default function Home() {
  return (
    <main className={styles.main}>
      <Banner />
      {getGoogleAnalyticsScript()}

      <div>
        <CardList />
      </div>
    </main>
  );
}
