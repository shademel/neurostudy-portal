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
  KEYWORDS_PLACEMENTS,
} from '../../utilities/metadata/keywords';
import metadataJSON from '../../../app/utilities/metadata/metadata.json';
import { createMetadata } from '@/app/utilities/common';

const { title, description } = metadataJSON.metadata.placements;
const canonicalUrl = `${HOST_URL}/services/placements`;
const keywords =
  KEYWORDS_HOME + KEYWORDS_NEURODIVERGENT_MATES + KEYWORDS_PLACEMENTS;
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
          Placements (Internships/Employment)
        </Typography>
      </div>
      <div className={styles.bodyText}>
        <p>
          <Typography
            variant={TypographyVariant.Body1}
            color='var(--BondBlack)'
          >
            Work with organisations to help more neurodivergent people get job
            placements in workplaces that support and understand Neurodiversity
            while creating individual professional growth and economic
            prosperity.
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
