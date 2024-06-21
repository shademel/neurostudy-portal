import Typography, {
  TypographyVariant,
} from '@/app/components/typography/Typography';
import styles from '../page.module.css';

type AuthFormHeaderProps = {
  title?: string;
  subText?: string;
};

const AuthFormHeader: React.FC<AuthFormHeaderProps> = ({
  title = 'Sign Up? ',
  subText = 'Its quick and easy',
}: AuthFormHeaderProps) => {
  return (
    <div className={styles.formTitleWrapper}>
      <div className={styles.formTitle}>{title}</div>
      <Typography variant={TypographyVariant.Body2} color='var(--grey-500)'>
        {subText}
      </Typography>
    </div>
  );
};

export default AuthFormHeader;
