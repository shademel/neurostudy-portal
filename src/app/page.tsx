import styles from './page.module.css';
import ButtonDisplay from './components/buttons/ButtonDisplay';
import Example from './components/typography/Example';
import Navbar from './components/navbar/Navbar';

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <div className={styles.description}>
        <h1>Site under construction</h1>
      </div>

      <div>
        <ButtonDisplay />
        <Example />
      </div>
    </main>
  );
}
