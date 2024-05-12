import { useRouter } from 'next/navigation';
import CardList from '../article/card';
import ActionButton from '../buttons/ActionButton';
import Typography, { TypographyVariant } from '../typography/Typography';
import styles from './articleList.module.css';

export default function ArticleList() {
  const router = useRouter();
  const navigateToArticles = () => {
    router.push(`/articles`);
  };
  return (
    <div className={styles.blogsContainer}>
      <div>
        <Typography variant={TypographyVariant.H2} color='var(--BondBlack)'>
          Explore Neurodiversity Academy
        </Typography>
      </div>
      <CardList />
      <div>
        <ActionButton
          label='Explore more'
          disabled={false}
          className={styles.accessButton}
          onClick={() => navigateToArticles()}
        />
      </div>
    </div>
  );
}
