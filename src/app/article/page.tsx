'use client';
import React, { useEffect, useState } from 'react';
import TextHeavyArticle from '../components/textHeavyArticle/TextHeavyArticle';
import styles from './article.module.css';
import articleData from './articleData.json';
import { useSearchParams } from 'next/navigation';
import Typography, {
  TypographyVariant,
} from '../components/typography/Typography';

export default function Page() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const searchParams = useSearchParams();
  const { articles } = articleData;
  const articleId = searchParams.get('articleId');
  const article = articles.find((article) => article.id === articleId);
  if (article) {
    const paragraphs = article.bodyText.split('\n').map((paragraph, index) => (
      <Typography
        key={index}
        variant={
          windowWidth <= 800
            ? TypographyVariant.Body1MOB
            : TypographyVariant.Body1
        }
      >
        {paragraph}
      </Typography>
    ));
    return (
      <div className={styles.container}>
        <TextHeavyArticle
          id={article.id}
          header={
            <Typography
              variant={
                window.innerWidth <= 800
                  ? TypographyVariant.H1MOB
                  : TypographyVariant.H1
              }
            >
              {article.header}
            </Typography>
          }
          imageUrl={article.imageUrl}
          bodyText={paragraphs}
        />{' '}
      </div>
    );
  } else {
    return (
      <Typography variant={TypographyVariant.H1}>Article not found</Typography>
    );
  }
}
