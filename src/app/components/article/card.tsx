import React from 'react';
import Article from './Article';
import articleData from '../../articles/articleData.json';
import styles from './article.module.css';
import { ArticleInterface } from '@/app/interfaces/ArticleInterface';
const CardList: React.FC = () => {
  const articles: ArticleInterface[] = articleData.articles;

  return (
    <div className={styles.cardList}>
      {articles.map(
        (article: ArticleInterface, index: number) =>
          index < 3 && <Article key={article.id} {...article} />
      )}
    </div>
  );
};

export default CardList;
