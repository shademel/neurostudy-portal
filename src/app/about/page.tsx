'use client';
import React from 'react';
import styles from './about.module.css';
import Typography, {
  TypographyVariant,
} from '../components/typography/Typography';
import Journey from '../components/aboutJourney/Journey';
import Values from '../components/aboutValues/Values';
import Mission from '../components/aboutMission/Mission';
import Vision from '../components/aboutVision/Vision';
import Founders from '../components/aboutFounders/Founders';

export default function Page() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.text}>
          <Typography variant={TypographyVariant.H1}>About Us</Typography>
        </div>
        <div className={styles.subContainer}></div>
      </div>
      <Journey />
      <Values />
      <Vision />
      <Mission />
      <Founders />
    </div>
  );
}
