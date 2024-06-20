import classNames from 'classnames';
import styles from '../page.module.css';

const AuthLeftBanner: React.FC = () => {
  return (
    <div className={classNames(styles.colorColumn, 'col-md-4')}>
      <div className={styles.colorTitle}>
        <p>
          Signup/Login to{' '}
          <span className={styles.colorTitleSpan}>Neurodiversity Academy</span>
        </p>
      </div>
      <div className={styles.colorDescription}>
        <p className={styles.colorDescriptionTitle}>Lorem ipsum</p>
        <p className={styles.colorDescriptionText}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
          laboriosam delectus tenetur perspiciatis qui labore eius sint cumque
          sunt.
        </p>
      </div>
    </div>
  );
};

export default AuthLeftBanner;
