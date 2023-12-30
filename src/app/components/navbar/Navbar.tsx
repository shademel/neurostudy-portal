'use client';
import styles from './navbar.module.css';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import MyLogin from '../buttons/MyLogin';
import Image from 'next/image';
import Logo from '../../images/Logo-navbar.svg';
import Hamburger from '../../images/hamburgerMenu.svg';
import Typography, { TypographyVariant } from '../typography/Typography';

export default function Navbar() {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };
  const closeDropdown = () => {
    setIsDropdownVisible(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        closeDropdown();
      }
      console.log('Clickeed');
    };
    if (isDropdownVisible) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isDropdownVisible]);

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
          onClick={toggleDropdown}
        />
        <div ref={dropdownRef}>
          {isDropdownVisible && (
            <ul className={`${styles.dropdownMenu}`}>
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
          )}
        </div>
      </div>
    </nav>
  );
}
