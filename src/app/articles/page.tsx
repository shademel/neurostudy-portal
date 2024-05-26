'use client';
import React from 'react';
import Article from '../components/article/Article';
import articleData from './articleData.json';
import styles from './articles.module.css';
import { ArticleInterface } from '@/app/interfaces/ArticleInterface';
import Typography, {
  TypographyVariant,
} from '../components/typography/Typography';

const CardList: React.FC = () => {
  const articles: ArticleInterface[] = articleData.articles;

  return (
    <div className={styles.container}>
      <title>Articles</title>
      <meta
        name='keywords'
        content='Articles, neurodiversity, neurodiversityacademy, neurodiversity academy'
      ></meta>
      <meta
        name='description'
        content='Articles from Neurodiversity Academy.'
      ></meta>
      <Typography variant={TypographyVariant.H2} color='var(--BondBlack)'>
        Explore Neurodiversity Academy
      </Typography>
      <div className={styles.cardList}>
        {articles.map((article: ArticleInterface) => (
          <Article key={article.id} {...article} />
        ))}
      </div>
    </div>
  );
};

export default CardList;
