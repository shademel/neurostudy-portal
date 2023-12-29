import Link from 'next/link';
import styles from './navbar.module.css';
import MyLogin from '../buttons/MyLogin';
import Image from 'next/image';
import Logo from '../../images/Logo-navbar.svg';
import Hamburger from '../../images/hamburgerMenu.svg';

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.wrapper}>
        <Image className={styles.logo} src={Logo} alt='logo' />
        <div className={styles.innerWrapper}>
          <ul className={styles.ul}>
            <li className={styles.li}>
              <Link href='#'>Services</Link>
            </li>
            <li className={styles.li}>
              <Link href='#'>Neurodiversity Training</Link>
            </li>
            <li className={styles.li}>
              <Link href='/about'>About Us</Link>
            </li>
            <li className={styles.li}>
              <Link href='/#'>Contact</Link>
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
