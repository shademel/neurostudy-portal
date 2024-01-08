import React from 'react';
import styles from './hero.module.css';
import Typography, { TypographyVariant } from '../typography/Typography';

export default function Banner() {
  return (
    <div className={styles.bannerContainer}>
      <div className={styles.middleBox}>
        <div className={styles.textBox}>
          <div className={styles.textBoxHeader}>
            <Typography variant={TypographyVariant.H1}>
              We endorse the future
            </Typography>
          </div>
          <div className={styles.textBoxSubHeader}>
            <Typography variant={TypographyVariant.H2}>
              Elevating Neurodiversity by guiding individuals to teach and learn
              effectively
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}
