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
                Introduction about HNW & NS service
                </Typography>
            </div>
            <div className={styles.bodyText}>
                <h2 className={styles.bodyTitle}>
                    <Typography variant={TypographyVariant.Body1} color='var(--BondBlack)'>
                    Host NeurodiversityWorkshops & Networking (Awareness/Education)
                    </Typography>
                </h2>
                <p>
                    <Typography
                    variant={TypographyVariant.Body2}
                    color='var(--BondBlack)'
                    >
                    Hold regular networking and workshop events in person and online, designed to promote awareness and educate people around Neurodiversity
                    </Typography>
                </p>
            </div>
        </div>
    )
}