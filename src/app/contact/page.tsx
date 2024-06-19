import React from 'react';
import styles from './contact.module.css';
import ContactUsForm from '../components/contactUs/ContactUsForm';
import { Metadata } from 'next';
import { HOST_URL, META_TYPE } from '../utilities/constants';
import { KEYWORDS_CONTACT } from '../utilities/metadata/keywords';
import metadataJSON from '../../app/utilities/metadata/metadata.json';
import { createMetadata } from '../utilities/common';

const { title, description, images } = metadataJSON.metadata.contact;
const canonical = `${HOST_URL}/contact`;
const keywords = KEYWORDS_CONTACT;
const type = META_TYPE.WEBSITE;

export const metadata: Metadata = createMetadata({
  title,
  keywords,
  description,
  canonical,
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
