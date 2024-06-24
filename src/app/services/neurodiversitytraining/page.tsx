import styles from './page.module.css';
import Typography, {
  TypographyVariant,
} from '@/app/components/typography/Typography';
import ActionButton from '@/app/components/buttons/ActionButton';
import { Metadata } from 'next';
import Subscribe from '@/app/components/subscribe/subscribe';
import { HOST_URL, META_TYPE } from '../../../app/utilities/constants';
import metadataJSON from '../../../app/utilities/metadata/metadata.json';
import { createMetadata } from '@/app/utilities/common';

const { home, neurodivergentmates, neurodiversitytraining } =
  metadataJSON.metadata;
const { title, description, images } = neurodiversitytraining;
const keywords =
  home.keywords +
  neurodivergentmates.keywords +
  neurodiversitytraining.keywords;
const canonical = `${HOST_URL}/services/neurodiversitytraining`;
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
