'use client';
import { useRouter } from 'next/navigation';
import BlogCardList from '../blog/BlogCardList';
import ActionButton from '../buttons/ActionButton';
import Typography, { TypographyVariant } from '../typography/Typography';
import styles from './blogList.module.css';

export default function BlogList() {
  const router = useRouter();
  const navigateToBlogs = () => {
    router.push(`/blogs`);
  };
  return (
    <div className={styles.blogsContainer}>
      <div>
        <Typography variant={TypographyVariant.H2} color='var(--BondBlack)'>
          Explore Neurodivergent Mates
        </Typography>
      </div>
      <BlogCardList />
      <div>
        <ActionButton
          label='Explore more'
          disabled={false}
          className={styles.accessButton}
          onClick={() => navigateToBlogs()}
        />
      </div>
    </div>
  );
}
