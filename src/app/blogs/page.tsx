import React from 'react';
import blogData from './blogData.json';
import styles from './blogs.module.css';
import Typography, {
  TypographyVariant,
} from '../components/typography/Typography';
import { BlogInterface } from '../interfaces/BlogInterface';
import Blog from '../components/blog/Blog';
import { Metadata } from 'next';
import { HOST_URL, TYPE } from '../utilities/constants';
import { KEYWORDS_BLOGS } from '../utilities/metadata/keywords';
import metadataJSON from '../../app/utilities/metadata/metadata.json';
import { createMetadata } from '../utilities/common';

const { title, description } = metadataJSON.metadata.blogs;
const canonicalUrl = `${HOST_URL}/blogs`;
const keywords = KEYWORDS_BLOGS;
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

const CardList: React.FC = () => {
  const blogs: BlogInterface[] = blogData.blogs;

  return (
    <div className={styles.container}>
      <Typography variant={TypographyVariant.H2} color='var(--BondBlack)'>
        Explore Neurodivergent Mates
      </Typography>
      <div className={styles.cardList}>
        {blogs.map((blog: BlogInterface) => (
          <Blog key={blog.id} {...blog} />
        ))}
      </div>
    </div>
  );
};

export default CardList;
