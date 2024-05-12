'use client';
import styles from './page.module.css';
import DisplayPodcast from './components/podcast/DisplayPodcast';
import Script from 'next/script';
import Banner from './components/banner/Banner';
import Blogs from './components/articleList/articleList';
import Teacher from './components/teacherSection/Teacher';
import Fact from './components/fact/Fact';
import HowItWorks from './components/howItWorks/HowItWorks';

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
      <Teacher />
      <Fact />
      <HowItWorks></HowItWorks>
      <div>
        <DisplayPodcast />
      </div>
      <div>
        <Blogs />
      </div>
    </main>
  );
}
