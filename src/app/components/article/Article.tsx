'use client';
import React from 'react';
import Image from 'next/image';
import Typography, { TypographyVariant } from '../typography/Typography';
import ActionButton, { ButtonStyle } from '../buttons/ActionButton';
import CircleRight from '../../images/CircleRightOrg.svg';
import styles from './article.module.css';
import { ArticleInterface } from '@/app/interfaces/ArticleInterface';

export default function Article({
  title,
  imageUrl,
  description,
}: ArticleInterface): JSX.Element {
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
          onClick={() => console.log('clicked Tertiary button')}
        ></ActionButton>
      </div>
    </div>
  );
}
