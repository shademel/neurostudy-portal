'use client';
import styles from './page.module.css';
import Typography, {
  TypographyVariant,
} from '@/app/components/typography/Typography';
import ActionButton from '@/app/components/buttons/ActionButton';
import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();
  const navigateToContactUs = () => {
    router.push(`/contact`);
  };

  return (
    <div className={styles.container}>
      <title>
        Host Neurodiversity Workshops & Networking (Awareness/Education)
      </title>
      <meta
        name='keywords'
        content='homepage, neurodiversity, neurodiversityacademy, neurodiversity academy, neurodivergent mates, neurodivergentmates, Host Neurodiversity Workshops & Networking, Neurodiversity Workshops, Neurodiversity Networking'
      ></meta>
      <meta
        name='description'
        content={
          'Hosting Neurodiversity Workshops & Networking services from Neurodiversity Academy'
        }
      ></meta>
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
        onClick={() => navigateToContactUs()}
      />
    </div>
  );
}
