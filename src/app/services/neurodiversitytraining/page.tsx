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
      <title>Learning/Training Partnerships</title>
      <meta
        name='keywords'
        content='homepage, neurodiversity, neurodiversityacademy, neurodiversity academy, neurodivergent mates, Neurodiversity Learning/Training Partnerships, Neurodiversity Learning, Learning/Training Partnerships, Neurodiversity Training'
      ></meta>
      <meta
        name='description'
        content={
          'Learning/Training Partnerships services from Neurodiversity Academy'
        }
      ></meta>
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
        onClick={() => navigateToContactUs()}
      />
    </div>
  );
}
