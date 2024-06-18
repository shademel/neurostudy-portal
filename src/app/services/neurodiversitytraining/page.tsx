import styles from './page.module.css';
import Typography, {
  TypographyVariant,
} from '@/app/components/typography/Typography';
import ActionButton from '@/app/components/buttons/ActionButton';
import { Metadata } from 'next';
import Subscribe from '@/app/components/subscribe/subscribe';
import { HOST_URL, TYPE } from '../../../app/utilities/constants';
import {
  KEYWORDS_HOME,
  KEYWORDS_NEURODIVERGENT_MATES,
  KEYWORDS_NEURODIVERSITY_TRAINING,
} from '../../utilities/metadata/keywords';
import metadataJSON from '../../../app/utilities/metadata/metadata.json';
import { createMetadata } from '@/app/utilities/common';

const { title, description } = metadataJSON.metadata.neurodiversitytraining;
const canonicalUrl = `${HOST_URL}/services/neurodiversitytraining`;
const keywords =
  KEYWORDS_HOME +
  KEYWORDS_NEURODIVERGENT_MATES +
  KEYWORDS_NEURODIVERSITY_TRAINING;
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
    <div className={styles.container}>
      <div className={styles.title}>
        <Typography variant={TypographyVariant.H1} color='var(--BondBlack)'>
          Neurodiversity Learning/Training Partnerships
        </Typography>
      </div>
      <div className={styles.bodyText}>
        <p>
          <Typography
            variant={TypographyVariant.Body1}
            color='var(--BondBlack)'
          >
            Have a range of different course of study (certifications and
            qualifications) available to help neurodivergent people get skilled
            in different areas. Along with partnering with schools,
            organisations and universities to help with career progression and
            achieving higher levels of innovations and excellence.
          </Typography>
        </p>
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
