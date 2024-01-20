'use client';
import React from 'react';
import styles from './contact.module.css';
import ContactUsForm from '../components/contactUs/ContactUsForm';

export default function Page() {
  return (
    <div className={styles.container}>
      <ContactUsForm />
    </div>
  );
}
