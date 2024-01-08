'use client';
import styles from './page.module.css';
import CardList from './components/article/card';
import DisplayPodcast from './components/podcast/DisplayPodcast';
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
        <DisplayPodcast />
        <CardList />
      </div>
    </main>
  );
}
