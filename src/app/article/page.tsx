import React from 'react';
import TextHeavyArticle from '../components/pages/TextHeavyArticle';
import styles from './article.module.css';
import articleData from '.././components/pages/articleData.json';
export default function Page() {
  const { id, header, imageSrc, bodyText } = articleData.articles[0];
  const paragraphs = bodyText
    .split('\n')
    .map((paragraph, index) => <p key={index}>{paragraph}</p>);

  return (
    <div className={styles.container}>
      <div>
        <TextHeavyArticle
          id={id}
          header={header}
          imageSrc={imageSrc}
          bodyText={paragraphs}
        ></TextHeavyArticle>
      </div>
    </div>
  );
}
