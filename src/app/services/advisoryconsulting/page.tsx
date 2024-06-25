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

const { home, neurodivergentmates, advisoryconsulting } = metadataJSON.metadata;
const { title, description, images } = advisoryconsulting;
const keywords =
  home.keywords + neurodivergentmates.keywords + advisoryconsulting.keywords;
const canonical = `${HOST_URL}/services/advisoryconsulting`;
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
          Advisory Neurodiversity Consulting
        </Typography>
      </div>
      <div className={styles.bodyText}>
        <Typography variant={TypographyVariant.Body1} color='var(--BondBlack)'>
          Provide advisory services regarding Neurodiversity in areas of
        </Typography>
        <ul className={styles.serviceDescriptionList}>
          <li>
            <Typography
              variant={TypographyVariant.Body2}
              color='var(--BondBlack)'
            >
              Inclusive workplace design and setup
            </Typography>
          </li>
          <li>
            <Typography
              variant={TypographyVariant.Body2}
              color='var(--BondBlack)'
            >
              Neurodiversity Awareness to Employers/Employees
            </Typography>
          </li>
          <li>
            <Typography
              variant={TypographyVariant.Body2}
              color='var(--BondBlack)'
            >
              Recruitment and Placements
            </Typography>
          </li>
          <li>
            <Typography
              variant={TypographyVariant.Body2}
              color='var(--BondBlack)'
            >
              Assistive Technology utilisation for learning difficulties
            </Typography>
          </li>
          <li>
            <Typography
              variant={TypographyVariant.Body2}
              color='var(--BondBlack)'
            >
              Adult Education and Career planning guidance
            </Typography>
          </li>
        </ul>
      </div>
      <Contact />
      <Subscribe />
    </div>
  );
}
