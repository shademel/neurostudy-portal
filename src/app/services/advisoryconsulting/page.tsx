import React from 'react';
import styles from './page.module.css';
import Typography, {
  TypographyVariant,
} from '@/app/components/typography/Typography';
import ActionButton from '@/app/components/buttons/ActionButton';
import { Metadata } from 'next';
import Subscribe from '@/app/components/subscribe/subscribe';

export const metadata: Metadata = {
  title: 'Advisory Neurodiversity Consulting',
  description:
    'Advisory Neurodiversity Consulting services from Neurodiversity Academy',
  keywords:
    'homepage, neurodiversity, neurodiversityacademy, neurodiversity academy, ' +
    'neurodivergent mates, neurodivergentmates, Advisory Neurodiversity Consulting, advisoryneurodiversityconsulting',
};

export default function Page() {
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
        to='/contact'
      />
      <Subscribe />
    </div>
  );
}
