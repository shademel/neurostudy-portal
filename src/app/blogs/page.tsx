'use client';
import React from 'react';
import blogData from './blogData.json';
import styles from './blogs.module.css';
import Typography, {
  TypographyVariant,
} from '../components/typography/Typography';
import { BlogInterface } from '../interfaces/BlogInterface';
import Blog from '../components/blog/Blog';

const CardList: React.FC = () => {
  const blogs: BlogInterface[] = blogData.blogs;

  return (
    <div className={styles.container}>
      <title>Article</title>
      <meta
        name='keywords'
        content='Blogs, neurodiversity, neurodiversityacademy, neurodiversity academy'
      ></meta>
      <meta
        name='description'
        content='Blogs from Neurodiversity Academy.'
      ></meta>
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
