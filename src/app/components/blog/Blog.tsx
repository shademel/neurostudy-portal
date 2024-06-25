import React from 'react';
import Typography, { TypographyVariant } from '../typography/Typography';
import ActionButton from '../buttons/ActionButton';
import CircleRight from '../../images/CircleRightOrg.svg';
import styles from './blog.module.css';
import Image from 'next/image';
import { BlogInterface } from '@/app/interfaces/BlogInterface';
import { BUTTON_STYLE } from '@/app/utilities/constants';

export default function Blog({
  id,
  title,
  imageUrl,
  description,
}: BlogInterface): JSX.Element {
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
        <div className={styles.buttonArea}>
          <ActionButton
            label='Learn more'
            icon={CircleRight}
            style={BUTTON_STYLE.Tertiary}
            iconPosition='right'
            to={`/blogs/blog/?blogId=${id}`}
          ></ActionButton>
        </div>
      </div>
    </div>
  );
}
