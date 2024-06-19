import React from 'react';
import Article from '../components/article/Article';
import articleData from './articleData.json';
import styles from './articles.module.css';
import { ArticleInterface } from '@/app/interfaces/ArticleInterface';
import Typography, {
  TypographyVariant,
} from '../components/typography/Typography';
import { Metadata } from 'next';
import { HOST_URL, META_TYPE } from '../utilities/constants';
import { KEYWORDS_ARTICLES } from '../utilities/metadata/keywords';
import metadataJSON from '../../app/utilities/metadata/metadata.json';
import { createMetadata } from '../utilities/common';

const { title, description, images } = metadataJSON.metadata.articles;
const canonical = `${HOST_URL}/articles`;
const keywords = KEYWORDS_ARTICLES;
const type = META_TYPE.WEBSITE;

export const metadata: Metadata = createMetadata({
  title,
  keywords,
  description,
  canonical,
  type,
  images,
});

const CardList: React.FC = () => {
  const articles: ArticleInterface[] = articleData.articles;

  return (
    <div className={styles.container}>
      <Typography variant={TypographyVariant.H2} color='var(--BondBlack)'>
        Explore Neurodiversity Academy
      </Typography>
      <div className={styles.cardList}>
        {articles.map((article: ArticleInterface) => (
          <Article key={article.id} {...article} />
        ))}
      </div>
    </div>
  );
};

export default CardList;
