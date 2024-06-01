'use client';
import React from 'react';
import Typography, { TypographyVariant } from '../typography/Typography';
import ActionButton, { ButtonStyle } from '../buttons/ActionButton';
import CircleRight from '../../images/CircleRightOrg.svg';
import styles from './blog.module.css';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { BlogInterface } from '@/app/interfaces/BlogInterface';

export default function Blog({
  id,
  title,
  imageUrl,
  description,
}: BlogInterface): JSX.Element {
  const router = useRouter();
  const navigateToblog = (blogId: string) => {
    router.push(`/blogs/blog/?blogId=${blogId}`);
  };
  return (
    <div className={styles.card}>
      <div className={styles.cardImage}>
        <Image src={imageUrl} alt={`Thumbnail for ${title}`} fill={true} />
      </div>
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
          onClick={() => navigateToblog(id)}
        ></ActionButton>
      </div>
    </div>
  );
}
