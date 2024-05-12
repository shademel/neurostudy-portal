'use client';
import styles from './page.module.css';
import DisplayPodcast from '../components/podcast/DisplayPodcast';
import PodcastBanner from '../components/podcastBanner/PodcastBanner';

import PodcastText from '../components/podcastTextSection/podcastText';
import BlogList from '../components/blogList/blogList';

export default function Home() {
  return (
    <main className={styles.main}>
      <PodcastBanner />
      <PodcastText />
      <div>
        <DisplayPodcast />
      </div>
      <div>
        <BlogList />
      </div>
    </main>
  );
}
