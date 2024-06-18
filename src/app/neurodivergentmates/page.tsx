import styles from './page.module.css';
import DisplayPodcast from '../components/podcast/DisplayPodcast';
import PodcastBanner from '../components/podcastBanner/PodcastBanner';

import PodcastText from '../components/podcastTextSection/podcastText';
import BlogList from '../components/blogList/blogList';
import { Metadata } from 'next';
import Subscribe from '../components/subscribe/subscribe';
import { HOST_URL, TYPE } from '../utilities/constants';
import {
  KEYWORDS_HOME,
  KEYWORDS_NEURODIVERGENT_MATES,
} from '../utilities/metadata/keywords';
import metadataJSON from '../../app/utilities/metadata/metadata.json';
import { createMetadata } from '../utilities/common';

const { title, description } = metadataJSON.metadata.neurodivergentmates;
const canonicalUrl = `${HOST_URL}/neurodivergentmates`;
const keywords = KEYWORDS_HOME + KEYWORDS_NEURODIVERGENT_MATES;
const type = TYPE.WEBSITE;
const images = { url: '' };

export const metadata: Metadata = createMetadata({
  title,
  keywords,
  description,
  canonicalUrl,
  type,
  images,
});

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
      <Subscribe />
    </main>
  );
}
