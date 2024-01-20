'use client';
import React from 'react';
import styles from './contact.module.css';
import ContactUsForm from '../components/contactUs/ContactUsForm';

export default function Page() {
  return (
    <div className={styles.container}>
      {/* <div className={styles.text}>
        <Typography variant={TypographyVariant.H1}>Contact Us</Typography>
        <Typography variant={TypographyVariant.Body1}>
          We will try our best to get back to you as soon as possible
        </Typography>
      </div> */}

      <ContactUsForm />
    </div>
  );
}
