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
      <title>Placements (Internships/Employment)</title>
      <meta
        name='keywords'
        content='homepage, neurodiversity, neurodiversityacademy, neurodiversity academy, neurodivergent mates, Neurodiversity Learning/Training Partnerships, placements'
      ></meta>
      <meta
        name='description'
        content={
          'Placements (Internships/Employment) services from Neurodiversity Academy'
        }
      ></meta>
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
        onClick={() => navigateToContactUs()}
      />
    </div>
  );
}
