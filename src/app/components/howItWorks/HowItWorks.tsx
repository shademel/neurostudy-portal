import React from 'react';
import styles from './howItWorks.module.css';
import Image from 'next/image';
import explore from '../../images/stepsExplore.svg';
import Typography, { TypographyVariant } from '../typography/Typography';

export default function HowItWorks() {
  return (
    <div className={styles.stepsContainer}>
      <div className={styles.stepsTitle}>
        <Typography variant={TypographyVariant.H2} color='var(--GhostWhite)'>
          How it works?
        </Typography>
        <Typography variant={TypographyVariant.Body1} color='var(--GhostWhite)'>
          Neurodiversity Academy understands the challenges neurodivergent
          students face and provides support at every stage of the study
          journey.
        </Typography>
      </div>
      <div className={styles.factGrid}>
        <div className={styles.gridItem}>
          <Image src={explore} alt='explore'></Image>
          <Typography
            variant={TypographyVariant.Body1}
            color='var(--GhostWhite)'
          >
            Explore
          </Typography>
          <Typography
            variant={TypographyVariant.Body1}
            color='var(--GhostWhite)'
          >
            You search for learning organisations
          </Typography>
        </div>
        <div className={styles.gridItem}>
          <Image src={explore} alt='explore'></Image>
          <Typography
            variant={TypographyVariant.Body1}
            color='var(--GhostWhite)'
          >
            Explore
          </Typography>
          <Typography
            variant={TypographyVariant.Body1}
            color='var(--GhostWhite)'
          >
            You search for learning organisations
          </Typography>
        </div>
        <div className={styles.gridItem}>
          <Image src={explore} alt='explore'></Image>
          <Typography
            variant={TypographyVariant.Body1}
            color='var(--GhostWhite)'
          >
            Explore
          </Typography>
          <Typography
            variant={TypographyVariant.Body1}
            color='var(--GhostWhite)'
          >
            You search for learning organisations
          </Typography>
        </div>
        <div className={styles.gridItem}>
          <Image src={explore} alt='explore'></Image>
          <Typography
            variant={TypographyVariant.Body1}
            color='var(--GhostWhite)'
          >
            Explore
          </Typography>
          <Typography
            variant={TypographyVariant.Body1}
            color='var(--GhostWhite)'
          >
            You search for learning organisations
          </Typography>
        </div>
        <div className={styles.gridItem}>
          <Image src={explore} alt='explore'></Image>
          <Typography
            variant={TypographyVariant.Body1}
            color='var(--GhostWhite)'
          >
            Explore
          </Typography>
          <Typography
            variant={TypographyVariant.Body1}
            color='var(--GhostWhite)'
          >
            You search for learning organisations
          </Typography>
        </div>
      </div>
    </div>
  );
}
