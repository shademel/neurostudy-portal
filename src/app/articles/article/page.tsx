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
import Subscribe from '@/app/components/subscribe/subscribe';

export default function OneArticle() {
  const searchParams = useSearchParams();
  const { articles } = articleData;
  const articleId = searchParams.get('articleId');
  const article = articles.find((article) => article.id === articleId);
  if (article) {
    return (
      <>
        <head>
          <title>{article.header}</title>
          <meta
            name='keywords'
            content='article, neurodiversity, neurodiversityacademy, neurodiversity academy'
          ></meta>
          <meta property='og:title' content={article.header} />
          <meta property='og:image' content={article.imageUrl} />
          <meta property='og:type' content='article' />
          <meta property='og:description' content={article?.description} />
          <meta
            property='og:url'
            content={`https://neurodiversityacademy.com/articles/article?articleId=${articleId}`}
          />
          <meta name='description' content={article?.description}></meta>
        </head>
        <div className={styles.container}>
          <TextHeavyArticle
            id={article.id}
            header={article.header}
            imageUrl={article.imageUrl}
            bodyText={article.bodyText}
          />{' '}
          <ArticleList />
          <div className={styles.subscribeContainer}>
          <Subscribe />
        </div>
        </div>
      </>
    );
  } else {
    return (
      <Typography variant={TypographyVariant.H1}>Article not found</Typography>
    );
  }
}
