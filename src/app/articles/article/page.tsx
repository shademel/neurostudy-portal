import type { Metadata } from 'next';
import React from 'react';
import TextHeavyArticle from '../../components/textHeavyArticle/TextHeavyArticle';
import styles from './article.module.css';
import articleData from '../articleData.json';
import ArticleList from '@/app/components/articleList/articleList';
import Typography, {
  TypographyVariant,
} from '../../components/typography/Typography';
import Subscribe from '@/app/components/subscribe/subscribe';
import { MetadataProps } from '@/app/interfaces/MetadataProps';
import { HOST_URL, TYPE } from '@/app/utilities/constants';
import { createMetadata } from '@/app/utilities/common';

export async function generateMetadata({
  searchParams,
}: MetadataProps): Promise<Metadata> {
  const articleId = searchParams?.articleId;
  const { articles } = articleData;
  const article = articles.find(({ id }) => id === articleId);

  if (!article) {
    return {};
  }

  const { title, keywords, imageUrl, description } = article;
  const type = TYPE.ARTICLE;
  const canonicalUrl = `${HOST_URL}/articles/article?articleId=${articleId}`;
  const images = { url: imageUrl };

  return createMetadata({
    title,
    keywords,
    description,
    canonicalUrl,
    type,
    images,
  });
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

  const { id, header, imageUrl, bodyText } = article;

  return (
    <div className={styles.container}>
      <TextHeavyArticle
        id={id}
        header={header}
        imageUrl={imageUrl}
        bodyText={bodyText}
      />{' '}
      <ArticleList />
      <Subscribe />
    </div>
  );
}
