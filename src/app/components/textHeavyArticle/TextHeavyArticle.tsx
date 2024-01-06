'use client';
import React, { useEffect, useState } from 'react';
import { TextHeavyInterface } from '@/app/interfaces/TextHeavyInterface';
import Typography, { TypographyVariant } from '../typography/Typography';
import Image from 'next/image';

export default function TextHeavyArticle({
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
      <Typography
        key={index}
        variant={
          windowWidth <= 430
            ? TypographyVariant.Body1MOB
            : TypographyVariant.Body2
        }
      >
        {paragraph}
      </Typography>
      <br></br>
    </div>
  ));
  return (
    <div>
      <Typography
        variant={
          windowWidth <= 430
            ? TypographyVariant.Body2MOBstrong
            : TypographyVariant.Body2Strong
        }
      >
        {`Home > Articles > ${header}`}
      </Typography>
      <Typography variant={TypographyVariant.H2}>{header}</Typography>
      {windowWidth >= 430 ? (
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
      <div>{paragraphs}</div>
    </div>
  );
}
