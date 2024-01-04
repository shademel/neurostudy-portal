'use client';
import React from 'react';
import { TextHeavyInterface } from '@/app/interfaces/TextHeavyInterface';
import Typography, { TypographyVariant } from '../typography/Typography';
import Image from 'next/image';

export default function TextHeavyArticle({
  header,
  imageSrc,
  bodyText,
}: TextHeavyInterface): JSX.Element {
  return (
    <div>
      <Typography
        variant={TypographyVariant.Body2}
      >{`Home > Articles > ${header}`}</Typography>
      <Typography variant={TypographyVariant.H2}>{header}</Typography>
      <Image width={1150} height={612} src={imageSrc} alt={header} />
      <div>
        <Typography variant={TypographyVariant.Body2}>{bodyText}</Typography>
      </div>
    </div>
  );
}
