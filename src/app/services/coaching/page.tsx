import React from 'react';
import styles from './page.module.css';
import Typography, {
  TypographyVariant,
} from '@/app/components/typography/Typography';
import { Metadata } from 'next';
import Subscribe from '@/app/components/subscribe/subscribe';
import { HOST_URL, META_TYPE } from '../../../app/utilities/constants';
import metadataJSON from '../../../app/utilities/metadata/metadata.json';
import { createMetadata } from '@/app/utilities/common';
import Contact from '@/app/components/contact/Contact';

const { home, neurodivergentmates, coaching } = metadataJSON.metadata;
const { title, description, images } = coaching;
const keywords =
  home.keywords + neurodivergentmates.keywords + coaching.keywords;
const canonical = `${HOST_URL}/services/coaching`;
const type = META_TYPE.WEBSITE;

export const metadata: Metadata = createMetadata({
  title,
  keywords,
  description,
  canonical,
  type,
  images,
});

export default function Page() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <Typography variant={TypographyVariant.H1} color='var(--BondBlack)'>
          Career Coaching
        </Typography>
      </div>
      <div className={styles.bodyText}>
        <div className={styles.serviceDescription}>
          <Typography
            variant={TypographyVariant.Body1}
            color='var(--BondBlack)'
          >
            Give supportive advice on different pathways to take as a
            neurodivergent person to achieve career success or growth
            opportunities in the competitive world
          </Typography>
        </div>
      </div>
      <Contact />
      <Subscribe />
    </div>
  );
}
