import React from 'react';
import TextHeavyArticle from './TextHeavyArticle';
import articleData from './articleData.json';
import { TextHeavyInterface } from '@/app/interfaces/TextHeavyInterface';

const Article: React.FC = () => {
  const { articles } = articleData;

  return (
    <div>
      {articles.map((article: TextHeavyInterface) => (
        <TextHeavyArticle key={article.id} {...article} />
      ))}
    </div>
  );
};

export default Article;
