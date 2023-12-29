import Link from 'next/link';
import styles from './navbar.module.css';
import MyLogin from '../buttons/MyLogin';
import Image from 'next/image';
import Logo from '../../images/Logo-navbar.svg';
import Hamburger from '../../images/hamburgerMenu.svg';
import Typography, { TypographyVariant } from '../typography/Typography';

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.wrapper}>
        <Image className={styles.logo} src={Logo} alt='logo' />
        <div className={styles.innerWrapper}>
          <ul className={styles.ul}>
            <li className={styles.li}>
              <Link href='#'>
                <Typography variant={TypographyVariant.Body2}>
                  Services
                </Typography>
              </Link>
            </li>
            <li className={styles.li}>
              <Link href='#'>
                <Typography variant={TypographyVariant.Body2}>
                  Neurodiversity Training
                </Typography>
              </Link>
            </li>
            <li className={styles.li}>
              <Link href='/about'>
                <Typography variant={TypographyVariant.Body2}>
                  About Us
                </Typography>
              </Link>
            </li>
            <li className={styles.li}>
              <Link href='/#'>
                <Typography variant={TypographyVariant.Body2}>
                  Contact
                </Typography>
              </Link>
            </li>
          </ul>
          <MyLogin className={styles.login} />
        </div>
        <Image
          className={styles.hamburger}
          src={Hamburger}
          alt='hamburger menu'
        />
      </div>
    </nav>
  );
}
