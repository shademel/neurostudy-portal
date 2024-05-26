'use client';
import React from 'react';
import styles from './contact.module.css';
import ContactUsForm from '../components/contactUs/ContactUsForm';
export default function Page() {
  return (
    <div className={styles.container}>
      <title>Contact</title>
      <meta
        name='keywords'
        content='contact, neurodiversity, neurodiversityacademy, neurodiversity academy'
      ></meta>
      <meta
        name='description'
        content='Contact page allows customers to contact Neurodiversity Academy.'
      ></meta>
      <ContactUsForm />
    </div>
  );
}
