import React from 'react';
import styles from './page.module.css';
import Typography, {
  TypographyVariant,
} from '@/app/components/typography/Typography';
import ActionButton from '@/app/components/buttons/ActionButton';
import { Metadata } from 'next';
import Subscribe from '@/app/components/subscribe/subscribe';
import { HOST_URL, META_TYPE } from '../../../app/utilities/constants';
import {
  KEYWORDS_HOME,
  KEYWORDS_NEURODIVERGENT_MATES,
  KEYWORDS_COACHING,
} from '../../utilities/metadata/keywords';
import metadataJSON from '../../../app/utilities/metadata/metadata.json';
import { createMetadata } from '@/app/utilities/common';

const { title, description, images } = metadataJSON.metadata.coaching;
const canonical = `${HOST_URL}/services/coaching`;
const keywords =
  KEYWORDS_HOME + KEYWORDS_NEURODIVERGENT_MATES + KEYWORDS_COACHING;
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
        <ul className={styles.serviceDescriptionList}>
          <li>
            <Typography
              variant={TypographyVariant.Body1}
              color='var(--BondBlack)'
            >
              Give supportive advice on different pathways to take as a
              neurodivergent person to achieve career success or growth
              opportunities in the competitive world
            </Typography>
          </li>
        </ul>
      </div>
      <ActionButton
        label='Contact us'
        disabled={false}
        className={styles.accessButton}
        to='/contact'
      />
      <Subscribe />
    </div>
  );
}
