import styles from '../page.module.css';

const LeftBanner: React.FC = () => {
  return (
    <div className={styles.colorColumn}>
      <div className={styles.colorTitle}>
        <p>
          Signup/Login to{' '}
          <span className={styles.colorTitleSpan}>
            Neurodiversity Academy
          </span>
        </p>
      </div>
      <div className={styles.colorDescription}>
        <p className={styles.colorDescriptionTitle}>Lorem ipsum</p>
        <p className={styles.colorDescriptionText}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
          laboriosam delectus tenetur perspiciatis qui labore eius sint
          cumque sunt.
        </p>
      </div>
    </div>
  )
}

export default LeftBanner;