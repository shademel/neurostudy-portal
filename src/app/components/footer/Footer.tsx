import React from 'react';
import Image from 'next/image';
import styles from './footer.module.css';
import footerLogo from '../../images/footerLogo.svg';
import Typography, { TypographyVariant } from '../typography/Typography';
import facebookIcon from '../../images/facebook.svg';
import linkedinIcon from '../../images/linkedin.svg';
import instagramicon from '../../images/instagram.svg';
import twitterIcon from '../../images/twitter.svg';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topLeft}>
          <Image src={footerLogo} alt='logo' />
          <div className={styles.footerDescription}>
            <Typography
              variant={TypographyVariant.Body2}
              color='var(--GhostWhite)'
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum et
              sapiente doloribus aspernatur iusto harum facere quis quae,
              quisquam, quam unde ex eius possimus atque, ipsa nam ad rem!
              Reiciendis!
            </Typography>
          </div>
          <div className={styles.socials}>
            <Image src={facebookIcon} alt='facebook-icon' />
            <Image src={linkedinIcon} alt='linkedin-icon' />
            <Image src={instagramicon} alt='instagram-icon' />
            <Image src={twitterIcon} alt='twitter-icon' />
          </div>
        </div>
        <div className={styles.topFoot}>
          <Typography
            className={styles.footerText}
            variant={TypographyVariant.Body1}
            color='var(--GhostWhite)'
          >
            Services
          </Typography>

          <ul>
            <li>one</li>
            <li>two</li>
            <li>three</li>
          </ul>
        </div>
        <div className={styles.topFoot}>
          <Typography
            className={styles.footerText}
            variant={TypographyVariant.Body1}
            color='var(--GhostWhite)'
          >
            Navigate
          </Typography>
          <ul>
            <li>Blogs</li>
            <li>About Us</li>
            <li>Service</li>
            <li>Partner with Us</li>
          </ul>
        </div>
        <div className={styles.topFoot}>
          <Typography
            variant={TypographyVariant.Body1}
            color='var(--GhostWhite)'
          >
            Contact Us
          </Typography>
          <ul>
            <li>+61123456</li>
            <li>info@neurodiversityacademy.com</li>
            <li>123,lorem road, Sydney, 2000</li>
          </ul>
        </div>
      </div>
      <div className={styles.footprint}>
        <div className={styles.leftFootprint}>
          <Typography
            variant={TypographyVariant.Body2}
            color='var(--GhostWhite)'
          >
            &copy; 2023 All Rights Reserved
          </Typography>
        </div>
        <div className={styles.rightFootprint}>
          <Typography
            variant={TypographyVariant.Body2}
            color='var(--GhostWhite)'
          >
            Terms of Service
          </Typography>

          <Typography
            variant={TypographyVariant.Body2}
            color='var(--GhostWhite)'
          >
            Privacy Policy
          </Typography>
        </div>
      </div>
    </footer>
  );
}
