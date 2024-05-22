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
      <ActionButton
          label='Contact us'
          disabled={false}
          className={styles.accessButton}
          onClick={() => navigateToContactUs()}
        />
    </div>
  );
}
