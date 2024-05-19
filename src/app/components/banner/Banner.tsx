import React from 'react';
import styles from './banner.module.css';
import Typography, { TypographyVariant } from '../typography/Typography';
import BadgeDisplay from '../badges/BadgeDisplay';
// import SearchBar from '../searchBar/SearchBar';

export default function Banner() {
  return (
    <>
      <div className={styles.bannerContainer}>
        <div className={styles.bannerTextAndBadge}>
          <div className={styles.textContainer}>
            <div className={styles.textHeader}>
              <Typography
                variant={TypographyVariant.H1}
                color='var(--GhostWhite)'
              >
                We endorse Neuro-inclusion in higher education
              </Typography>
            </div>
            <div className={styles.textBody}>
              <Typography
                variant={TypographyVariant.H2}
                color='var(--GhostWhite)'
              >
                Reach out to learn more about our endorsements and the impact we
                are creating for Neurodivergent students.
              </Typography>
            </div>
          </div>
          <div>
            <BadgeDisplay></BadgeDisplay>
          </div>
        </div>
        {/*<div className={styles.descktopSearchBar}>
           <SearchBar></SearchBar>
        </div> */}
      </div>
      {/* <div className={styles.mobileSearchBar}>
        <SearchBar></SearchBar> 
      </div> */}
    </>
  );
}
