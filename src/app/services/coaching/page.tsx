'use client';
import React from 'react';
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
      <div className={styles.title}>
        <Typography variant={TypographyVariant.H1} color='var(--BondBlack)'>
          Coaching & Placements
        </Typography>
      </div>
      <div className={styles.bodyText}>
        <ul className={styles.serviceDescriptionList}>
          <li>
            <Typography
              variant={TypographyVariant.Body1}
              color='var(--BondBlack)'
            >
              Give supportive advice on different pathways to take as a
              neurodivergent person to achieve career success or growth
              opportunities in the competitive world
            </Typography>
          </li>
          <li>
            <Typography
              variant={TypographyVariant.Body1}
              color='var(--BondBlack)'
            >
              Work with organisations to help more neurodivergent people get job
              placements in workplaces that support and understand
              Neurodiversity while creating individual professional growth and
              economic prosperity
            </Typography>
          </li>
        </ul>
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
