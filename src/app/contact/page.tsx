import React from 'react';
import styles from './contact.module.css';
import ContactUsForm from '../components/contactUs/ContactUsForm';
import { Metadata } from 'next';
import { HOST_URL, TYPE } from '../utilities/constants';
import { KEYWORDS_CONTACT } from '../utilities/metadata/keywords';
import metadataJSON from '../../app/utilities/metadata/metadata.json';
import { createMetadata } from '../utilities/common';

const { title, description } = metadataJSON.metadata.contact;
const canonicalUrl = `${HOST_URL}/contact`;
const keywords = KEYWORDS_CONTACT;
const type = TYPE.WEBSITE;
const images = { url: '' };

export const metadata: Metadata = createMetadata({
  title,
  keywords,
  description,
  canonicalUrl,
  type,
  images,
});

export default function Page() {
  return (
    <div className={styles.container}>
      <ContactUsForm />
    </div>
  );
}
