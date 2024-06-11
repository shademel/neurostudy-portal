import React from 'react';
import styles from './contact.module.css';
import ContactUsForm from '../components/contactUs/ContactUsForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contact page allows customers to contact Neurodiversity Academy.',
  keywords:
    'contact, neurodiversity, neurodiversityacademy, neurodiversity academy',
};

export default function Page() {
  return (
    <div className={styles.container}>
      <ContactUsForm />
    </div>
  );
}
