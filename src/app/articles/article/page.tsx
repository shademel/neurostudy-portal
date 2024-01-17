'use client';
import React from 'react';
import TextHeavyArticle from '../../components/textHeavyArticle/TextHeavyArticle';
import styles from './article.module.css';
import articleData from '../articleData.json';
import { useSearchParams } from 'next/navigation';
import Typography, {
  TypographyVariant,
} from '../../components/typography/Typography';

export default function OneArticle() {
  const searchParams = useSearchParams();
  const { articles } = articleData;
  const articleId = searchParams.get('articleId');
  const article = articles.find((article) => article.id === articleId);
  if (article) {
    return (
      <div className={styles.container}>
        <TextHeavyArticle
          id={article.id}
          header={article.header}
          imageUrl={article.imageUrl}
          bodyText={article.bodyText}
        />{' '}
      </div>
    );
  } else {
    return (
      <Typography variant={TypographyVariant.H1}>Article not found</Typography>
    );
  }
}
