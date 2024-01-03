import React from 'react';
import Article from './Article';
import cardsData from './cards_data.json';
import styles from './article.module.css';
import { ArticleInterface } from '@/app/interfaces/ArticleInterface';
const CardList: React.FC = () => {
  const { cards } = cardsData;

  return (
    <div className={styles.cardList}>
      {cards.map((card: ArticleInterface) => (
        <Article key={card.id} {...card} />
      ))}
    </div>
  );
};

export default CardList;
