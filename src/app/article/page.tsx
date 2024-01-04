import React from 'react';
import TextHeavyArticle from '../components/pages/TextHeavyArticle';
import styles from './article.module.css';
export default function Page() {
  const bodyText = `
    Assistive technology plays a crucial role in enhancing the lives of individuals with disabilities, providing them with tools and solutions to overcome various challenges.From screen readers and voice recognition software to adaptive keyboards and mobility aids, these technologies empower people with diverse abilities to navigate the digital world, pursue education, and participate more fully in society. By fostering inclusivity and accessibility, assistive technology contributes to breaking down barriers and creating a more equitable and supportive environment for everyone.

    Furthermore, the rapid advancements in assistive technology continue to open new possibilities for innovation. Wearable devices, smart home automation, and artificial intelligence-driven solutions are transforming the landscape, offering even more personalized and seamless support. As we embrace these advancements, it is essential to prioritize not only the development of cutting-edge technologies but also their widespread availability and affordability,ensuring that the benefits of assistive technology reach as many individuals as possible.
  `;

  const paragraphs = bodyText
    .split('\n')
    .map((paragraph, index) => <p key={index}>{paragraph}</p>);

  return (
    <div className={styles.container}>
      <div>
        <TextHeavyArticle
          header={'Assistive technology in education'}
          imageSrc={'https://picsum.photos/200/300'}
          bodyText={paragraphs}
        ></TextHeavyArticle>
      </div>
    </div>
  );
}
