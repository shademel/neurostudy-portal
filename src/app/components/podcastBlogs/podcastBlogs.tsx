import { useRouter } from 'next/navigation';
import CardList from '../article/card';
import ActionButton from '../buttons/ActionButton';
import Typography, { TypographyVariant } from '../typography/Typography';
import styles from './podcastBlogs.module.css';

export default function PodcastBlogs() {
  const router = useRouter();
  const navigateToArticles = () => {
    router.push(`/articles`);
  };
  return (
    <div className={styles.blogsContainer}>
      <div>
        <Typography variant={TypographyVariant.H2} color='var(--BondBlack)'>
          Explore Neurodivergent Mates
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
