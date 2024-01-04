'use client';
import styles from './page.module.css';
import ButtonDisplay from './components/buttons/ButtonDisplay';
import Example from './components/typography/Example';
import BadgeDisplay from './components/badges/BadgeDisplay';
import CardList from './components/article/card';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const navigateToArticle = () => {
    router.push('/article');
  };
  return (
    <main className={styles.main}>
      <BadgeDisplay />
      <div className={styles.description}>
        <h1>Site under construction</h1>
      </div>

      <div>
        <ButtonDisplay />
        <Example />
      </div>
      <div>
        <CardList />
      </div>
      <div>
        <button onClick={navigateToArticle}>Go to Example Page</button>
      </div>

    </main>
  );
}
