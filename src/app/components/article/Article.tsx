'use client';
import React from 'react';
import Typography, { TypographyVariant } from '../typography/Typography';
import ActionButton, { ButtonStyle } from '../buttons/ActionButton';
import CircleRight from '../../images/CircleRightOrg.svg';
import styles from './article.module.css';
import { ArticleInterface } from '@/app/interfaces/ArticleInterface';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function Article({
  id,
  title,
  imageUrl,
  description,
}: ArticleInterface): JSX.Element {
  const router = useRouter();
  const navigateToArticle = (articleId: string) => {
    router.push(`/articles/article/?articleId=${articleId}`);
  };
  return (
    <div className={styles.card}>
      <div className={styles.cardImage}>
        <Image src={imageUrl} alt={`Thumbnail for ${title}`} fill={true} />
      </div>
      <div className={styles.descriptionContainer}>
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
