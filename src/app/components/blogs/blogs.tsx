import CardList from '../article/card';
import ActionButton from '../buttons/ActionButton';
import Typography, { TypographyVariant } from '../typography/Typography';
import styles from './blogs.module.css';
export default function Blogs() {
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
          onClick={() => console.log('clicked explore more button')}
        />
      </div>
    </div>
  );
}
