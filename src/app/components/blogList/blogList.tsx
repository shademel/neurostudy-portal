'use client';
import { useRouter } from 'next/navigation';
import BlogCardList from '../blog/BlogCardList';
import ActionButton from '../buttons/ActionButton';
import Typography, { TypographyVariant } from '../typography/Typography';
import styles from './blogList.module.css';
import { BUTTON_STYLE } from '@/app/utilities/constants';

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
      <div className={styles.buttonArea}>
        <ActionButton
          label='Explore more'
          disabled={false}
          style={BUTTON_STYLE.Primary}
          fullWidth
          onClick={() => navigateToBlogs()}
        />
      </div>
    </div>
  );
}
