import Link from 'next/link';
import styles from './navbar.module.css';
import MyLogin from '../buttons/MyLogin';
import Image from 'next/image';
import Logo from '../../images/Logo-navbar.svg';
import HamburgerMenu from '../../images/hamburgerMenu.svg';

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <Image className={styles.logo} src={Logo} alt='logo' />
      <div className={styles.div}>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <Link href='/dashboard'>Services</Link>
          </li>
          <li className={styles.li}>
            <Link href='/contact'>Neurodiversity Training</Link>
          </li>
          <li className={styles.li}>
            <Link href='/about'>About Us</Link>
          </li>
          <li className={styles.li}>
            <Link href='/about'>Contact</Link>
          </li>
        </ul>
        <MyLogin />
        <Image
          className={styles.menu}
          src={HamburgerMenu}
          alt='hamburger menu'
        />
      </div>
    </nav>
  );
}
