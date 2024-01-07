'use client';
import React from 'react';
import Typography, { TypographyVariant } from '../typography/Typography';
import ActionButton, { ButtonStyle } from '../buttons/ActionButton';
import CircleRight from '../../images/CircleRightOrg.svg';
import styles from './article.module.css';
import { ArticleInterface } from '@/app/interfaces/ArticleInterface';
import { useRouter } from 'next/navigation';

export default function Article({
  id,
  title,
  imageUrl,
  description,
}: ArticleInterface): JSX.Element {
  const router = useRouter();
  const navigateToArticle = (articleId: string) => {
    router.push(`/article/?articleId=${articleId}`);
  };
  return (
    <div className={styles.card}>
      <img
        src={imageUrl}
        alt={`Thumbnail for ${title}`}
        className={styles.cardImage}
      />
      <div>
        <div className={styles.description}>
          <Typography variant={TypographyVariant.Body2}>
            {description}
          </Typography>
        </div>
        <ActionButton
          label='Learn more'
          icon={CircleRight}
          style={ButtonStyle.Tertiary}
          disabled={false}
          iconPosition='right'
          onClick={() => navigateToArticle(id)}
        ></ActionButton>
      </div>
    </div>
  );
}
