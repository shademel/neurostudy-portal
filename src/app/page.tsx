import styles from './page.module.css';
import DisplayPodcast from './components/podcast/DisplayPodcast';
import Script from 'next/script';
import Banner from './components/banner/Banner';
import ArticleList from './components/articleList/articleList';
import Teacher from './components/teacherSection/Teacher';
import Fact from './components/fact/Fact';
import HowItWorks from './components/howItWorks/HowItWorks';
import Partner from './components/partnerSection/Partner';
import { Metadata } from 'next';

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

export const metadata: Metadata = {
  title: 'Homepage - Neurodiversity Academy',
  keywords:
    'homepage, neurodiversity, neurodiversityacademy, neurodiversity academy',
  description: 'Homepage for Neurodiversity Academy',
};

export default function Home() {
  return (
    <main className={styles.main}>
      <Banner />
      {getGoogleAnalyticsScript()}
      <Partner />
      <Fact />
      <HowItWorks></HowItWorks>
      <DisplayPodcast
        scriptSrc='https://www.buzzsprout.com/2132579.js?container_id=buzzsprout-large-player&player=large'
        containerId='buzzsprout-large-player'
        singleBlog={false}
      />
      <ArticleList />
      <Teacher />
    </main>
  );
}
