import styles from './page.module.css';
import DisplayPodcast from '../components/podcast/DisplayPodcast';
import PodcastBanner from '../components/podcastBanner/PodcastBanner';

import PodcastText from '../components/podcastTextSection/podcastText';
import BlogList from '../components/blogList/blogList';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Homepage - Neurodivergent Mates',
  description: 'Homepage for Neurodivergent Mates',
  keywords:
    'homepage, neurodiversity, neurodiversityacademy, neurodiversity academy, neurodivergent mates, neurodivergentmates',
};

export default function Home() {
  return (
    <main className={styles.main}>
      <PodcastBanner />
      <PodcastText />
      <DisplayPodcast
        scriptSrc='https://www.buzzsprout.com/2132579.js?container_id=buzzsprout-large-player&player=large'
        containerId='buzzsprout-large-player'
        singleBlog={false}
      />
      <BlogList />
    </main>
  );
}
