import CardList from './article/card';
import ButtonDisplay from './buttons/ButtonDisplay';
import DisplayPodcast from './podcast/DisplayPodcast';
import Example from './typography/Example';
import styles from '../page.module.css';
import BadgeDisplay from './badges/BadgeDisplay';
import Typography, { TypographyVariant } from './typography/Typography';

export const Components = () => {
  return (
    <main className={styles.main}>
      <Typography variant={TypographyVariant.H1}>Components</Typography>
      <Typography variant={TypographyVariant.H2}>
        Background & Badges
      </Typography>
      <BadgeDisplay />
      <div className={styles.border}>
        <Typography variant={TypographyVariant.H2}>Buttons</Typography>
        <ButtonDisplay />
      </div>{' '}
      <div className={styles.border}>
        <div>
          <Typography variant={TypographyVariant.H2}>Text</Typography>
        </div>
        <br />
        <Example />
      </div>
      <div className={styles.border}>
        <Typography variant={TypographyVariant.H2}>
          Cards/Articles/Blog posts
        </Typography>
        <CardList />
      </div>
      <div className={styles.border}>
        <Typography variant={TypographyVariant.H2}>Podcast embed</Typography>
        <DisplayPodcast />
      </div>
    </main>
  );
};

export default Components;
