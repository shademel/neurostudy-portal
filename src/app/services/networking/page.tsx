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

const { home, neurodivergentmates, networking } = metadataJSON.metadata;
const { title, description, images } = networking;
const keywords =
  home.keywords + neurodivergentmates.keywords + networking.keywords;
const canonical = `${HOST_URL}/services/networking`;
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
          Host Neurodiversity Workshops & Networking (Awareness/Education)
        </Typography>
      </div>
      <div className={styles.bodyText}>
        <p>
          <Typography
            variant={TypographyVariant.Body1}
            color='var(--BondBlack)'
          >
            Hold regular networking and workshop events in person and online,
            designed to promote awareness and educate people around
            Neurodiversity
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
