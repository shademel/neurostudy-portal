import React from 'react';
import Article from './ArticlePage';

const ExamplePage: React.FC = () => {
  // Example data
  const header = 'Sample Article';
  const imageSrc = 'https://picsum.photos/200/300';
  const bodyText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';

  return <Article header={header} imageSrc={imageSrc} bodyText={bodyText} />;
};

export default ExamplePage;
