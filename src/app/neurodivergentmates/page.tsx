import styles from './page.module.css';
import DisplayPodcast from '../components/podcast/DisplayPodcast';
import PodcastBanner from '../components/podcastBanner/PodcastBanner';

import PodcastText from '../components/podcastTextSection/podcastText';
import BlogList from '../components/blogList/blogList';
import { Metadata } from 'next';
import Subscribe from '../components/subscribe/subscribe';
import { HOST_URL, META_TYPE } from '../utilities/constants';
import metadataJSON from '../../app/utilities/metadata/metadata.json';
import { createMetadata } from '../utilities/common';

const { home, neurodivergentmates } = metadataJSON.metadata;
const { title, description, images } = neurodivergentmates;
const keywords = home.keywords + neurodivergentmates.keywords;
const canonical = `${HOST_URL}/neurodivergentmates`;
const type = META_TYPE.WEBSITE;

export const metadata: Metadata = createMetadata({
  title,
  keywords,
  description,
  canonical,
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
