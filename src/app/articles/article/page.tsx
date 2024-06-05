'use client';
import React from 'react';
import TextHeavyArticle from '../../components/textHeavyArticle/TextHeavyArticle';
import styles from './article.module.css';
import articleData from '../articleData.json';
import ArticleList from '@/app/components/articleList/articleList';
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
        <title>{article.header}</title>
        <meta
          name='keywords'
          content='article, neurodiversity, neurodiversityacademy, neurodiversity academy'
        ></meta>
        <meta name='description' content={article?.description}></meta>
        <TextHeavyArticle
          id={article.id}
          header={article.header}
          imageUrl={article.imageUrl}
          bodyText={article.bodyText}
        />{' '}
        <ArticleList />
      </div>
    );
  } else {
    return (
      <Typography variant={TypographyVariant.H1}>Article not found</Typography>
    );
  }
}
