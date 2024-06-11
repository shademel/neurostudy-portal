import type { Metadata } from 'next';
import React from 'react';
import TextHeavyArticle from '../../components/textHeavyArticle/TextHeavyArticle';
import styles from './article.module.css';
import articleData from '../articleData.json';
import ArticleList from '@/app/components/articleList/articleList';
import Typography, {
  TypographyVariant,
} from '../../components/typography/Typography';
import { MetadataProps } from '@/app/interfaces/MetadataProps';

export async function generateMetadata({
  searchParams,
}: MetadataProps): Promise<Metadata> {
  const articleId = searchParams?.articleId;
  const { articles } = articleData;
  const article = articles.find(({ id }) => id === articleId);

  if (!article) {
    return {};
  }

  const { title, imageUrl, description } = article;
  const type = 'article';
  const url = `https://neurodiversityacademy.com/articles/article?articleId=${articleId}`;

  return {
    title,
    description,
    openGraph: {
      title,
      images: [imageUrl],
      type,
      description,
      url,
    },
  };
}

export default function OneArticle({ searchParams }: MetadataProps) {
  const articleId = searchParams?.articleId;
  const { articles } = articleData;
  const article = articles.find((article) => article.id === articleId);

  if (!article) {
    return (
      <Typography variant={TypographyVariant.H1}>Article not found</Typography>
    );
  }

  return (
    <div className={styles.container}>
      <TextHeavyArticle
        id={article.id}
        header={article.header}
        imageUrl={article.imageUrl}
        bodyText={article.bodyText}
      />{' '}
      <ArticleList />
    </div>
  );
}
