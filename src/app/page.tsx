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
import Subscribe from './components/subscribe/subscribe';
import { HOST_URL, META_TYPE } from './utilities/constants';
import { KEYWORDS_HOME } from './utilities/metadata/keywords';
import metadataJSON from '../app/utilities/metadata/metadata.json';
import { createMetadata } from './utilities/common';

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

const { title, description, images } = metadataJSON.metadata.home;
const canonical = `${HOST_URL}/`;
const keywords = KEYWORDS_HOME;
const type = META_TYPE.WEBSITE;

export const metadata: Metadata = {
  metadataBase: new URL(HOST_URL),

  ...createMetadata({
    title,
    keywords,
    description,
    canonical,
    type,
    images,
  }),
};

export default function Home() {
  return (
    <main className={styles.main}>
      <Banner />
      {getGoogleAnalyticsScript()}
      <Teacher />
      <Partner />
      <Fact />
      <HowItWorks></HowItWorks>
      <DisplayPodcast
        scriptSrc='https://www.buzzsprout.com/2132579.js?container_id=buzzsprout-large-player&player=large'
        containerId='buzzsprout-large-player'
        singleBlog={false}
      />
      <ArticleList />
      <Subscribe />
    </main>
  );
}
