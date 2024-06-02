'use client';
import React, { useEffect, useState } from 'react';
import { TextHeavyInterface } from '@/app/interfaces/TextHeavyInterface';
import Typography, { TypographyVariant } from '../typography/Typography';
import Image from 'next/image';
import Link from 'next/link';
import styles from './textHeavyBlog.module.css';
import BlogList from '../blogList/blogList';

export default function TextHeavyBlog({
  header,
  imageUrl,
  bodyText,
}: TextHeavyInterface): JSX.Element {
  const [windowWidth, setWindowWidth] = useState(1150);
  useEffect(() => {
    setWindowWidth(window.innerWidth);
  });

  const paragraphs = bodyText.split('\n').map((paragraph, index) => (
    <div key={index}>
      <Typography key={index} variant={TypographyVariant.Body2}>
        {paragraph}
      </Typography>
      <br></br>
    </div>
  ));
  return (
    <div>
      <div>
        <Typography
          variant={
            windowWidth <= 430
              ? TypographyVariant.Body3MOBstrong
              : TypographyVariant.Body2Strong
          }
        >
          <Link href='/'>Home</Link> {'>'} <Link href='/blogs'>Blogs</Link>{' '}
          {'>'} {header}
        </Typography>
      </div>
      <Typography variant={TypographyVariant.H2}>{header}</Typography>
      {windowWidth > 430 ? (
        <Image
          width={1150}
          height={612}
          src={imageUrl}
          alt={`image for ${header}`}
        />
      ) : (
        <Image
          width={430}
          height={250}
          src={imageUrl}
          alt={`image for ${header}`}
        />
      )}
      <div className={styles.blogText}>{paragraphs}</div>
      <div>
        <BlogList />
      </div>
    </div>
  );
}
