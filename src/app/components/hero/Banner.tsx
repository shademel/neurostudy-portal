import React from 'react';
import styles from './hero.module.css';
import Typography, { TypographyVariant } from '../typography/Typography';

export default function Banner() {
  return (
    <div className={styles.bannerContainer}>
      {/* <div className={styles.middleBox}> */}
      {/* <div className={styles.textBox}> */}
      {/* <div className={styles.textBoxHeader}> */}
      <div className={styles.textContainer}>
        <Typography variant={TypographyVariant.H1} color='var(--GhostWhite)'>
          We endorse the future
        </Typography>
        <Typography variant={TypographyVariant.H2} color='var(--GhostWhite)'>
          Elevating Neurodiversity by guiding individuals to teach and learn
          effectively
        </Typography>
      </div>

      {/* </div> */}
      {/* <div className={styles.textBoxSubHeader}> */}

      {/* </div> */}
      {/* </div> */}
      {/* </div> */}
    </div>
  );
}
