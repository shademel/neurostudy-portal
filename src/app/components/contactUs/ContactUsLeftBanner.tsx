import classNames from 'classnames';
import styles from './contactUs.module.css';
import Typography, {
  TypographyVariant,
} from '@/app/components/typography/Typography';

const ContactUsLeftBanner = () => {
  return (
    <div className={classNames(styles.bannerColumn, 'col-md-4')}>
      <Typography
        variant={TypographyVariant.H2}
        color='var(--GhostWhite'
        className='mt-0 mb-3'
      >
        Contact Us
      </Typography>
      <Typography variant={TypographyVariant.Body2} color='var(--GhostWhite)'>
        We will try our best to get back to you as soon as possible
      </Typography>
    </div>
  );
};

export default ContactUsLeftBanner;
