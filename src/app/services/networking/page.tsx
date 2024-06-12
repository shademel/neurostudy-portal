import styles from './page.module.css';
import Typography, {
  TypographyVariant,
} from '@/app/components/typography/Typography';
import ActionButton from '@/app/components/buttons/ActionButton';
import { Metadata } from 'next';
import Subscribe from '@/app/components/subscribe/subscribe';

export const metadata: Metadata = {
  title: 'Host Neurodiversity Workshops & Networking (Awareness/Education)',
  description:
    'Hosting Neurodiversity Workshops & Networking services from Neurodiversity Academy',
  keywords:
    'homepage, neurodiversity, neurodiversityacademy, neurodiversity academy, ' +
    'neurodivergent mates, neurodivergentmates, Host Neurodiversity Workshops & Networking, Neurodiversity Workshops, Neurodiversity Networking',
};

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
