'use client';
import styles from './page.module.css';
import Typography, {
    TypographyVariant,
  } from '@/app/components/typography/Typography';

export default function Page(){
    return(
        <div className={styles.container}>
            <div className={styles.title}>
                <Typography variant={TypographyVariant.H1} color='var(--BondBlack)'>
                        Introduction about Training service
                </Typography>
            </div>
            <div className={styles.bodyText}>
                <h2 className={styles.bodyTitle}>
                    <Typography variant={TypographyVariant.Body1} color='var(--BondBlack)'>
                    Learning/Training Partnerships
                    </Typography>
                </h2>
                <p>
                    <Typography
                    variant={TypographyVariant.Body2}
                    color='var(--BondBlack)'
                    >
                    Have a range of different course of study (certifications and qualifications) available to help neurodivergent people get skilled in different areas. Along with partnering with schools, organisations and universities to help with career progression and achieving higher levels of innovations and excellence.
                    </Typography>
                </p>
            </div>
        </div>
    )
}