import React from 'react';
import styles from './about.module.css';
import Typography, {
  TypographyVariant,
} from '../components/typography/Typography';
import Journey from '../components/aboutJourney/Journey';
import Values from '../components/aboutValues/Values';
import Mission from '../components/aboutMission/Mission';
import Vision from '../components/aboutVision/Vision';
import Founders from '../components/aboutFounders/Founders';
import { Metadata } from 'next';
import { HOST_URL, TYPE } from '../utilities/constants';
import { KEYWORDS_ABOUT } from '../utilities/metadata/keywords';
import metadataJSON from '../../app/utilities/metadata/metadata.json';
import { createMetadata } from '../utilities/common';

const { title, description } = metadataJSON.metadata.about;
const canonicalUrl = `${HOST_URL}/about`;
const keywords = KEYWORDS_ABOUT;
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

export default function Page() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.text}>
          <Typography variant={TypographyVariant.H1}>About Us</Typography>
        </div>
        <div className={styles.subContainer}></div>
      </div>
      <Journey />
      <Values />
      <Vision />
      <Mission />
      <Founders />
    </div>
  );
}
