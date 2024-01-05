'use client';
import styles from './page.module.css';
import ButtonDisplay from './components/buttons/ButtonDisplay';
import Example from './components/typography/Example';
import BadgeDisplay from './components/badges/BadgeDisplay';
import CardList from './components/article/card';

export default function Home() {
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
    </main>
  );
}
