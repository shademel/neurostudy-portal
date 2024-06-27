'use client';
import styles from './navbar.module.css';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
// import MyLogin from '../buttons/MyLogin';
import Image from 'next/image';
import Logo from '../../images/Logo-navbar.svg';
import Hamburger from '../../images/hamburgerMenu.svg';
import Typography, { TypographyVariant } from '../typography/Typography';
import { useRootContext } from '@/app/root-provider';
import ActionButton from '../buttons/ActionButton';
import { BUTTON_STYLE } from '@/app/utilities/constants';
import { signOut } from 'aws-amplify/auth';

const UserOutlet: React.FC = () => {
  const { user } = useRootContext();

  return (
    <li className={styles.li}>
      {user ? (
        <ActionButton
          label='Sign Out'
          style={BUTTON_STYLE.Primary}
          className={styles.userOutlet}
          onClick={() => {
            signOut();
          }}
        />
      ) : (
        <ActionButton
          label='Login'
          style={BUTTON_STYLE.Primary}
          className={styles.userOutlet}
          // TODO
          // https://trello.com/c/suoF46yg/131-infrastructure-key-constant-based-url-setup
          to='/auth/login'
        />
      )}
    </li>
  );
};

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
        <Link className={styles.logo} href='/'>
          <Image src={Logo} alt='logo' />
        </Link>
        <div className={styles.innerWrapper}>
          <ul className={styles.ul}>
            <li className={styles.li}>
              <Link href='/neurodivergentmates'>
                <Typography variant={TypographyVariant.Body2}>
                  Neurodivergent Mates
                </Typography>
              </Link>
            </li>
            <li className={styles.li}>
              <div className={styles.dropdown}>
                <Typography variant={TypographyVariant.Body2}>
                  Services
                </Typography>
                <ul className={styles.dropdownContent}>
                  <li>
                    <Link href='/services/neurodiversitytraining'>
                      <Typography variant={TypographyVariant.Body2}>
                        Neurodiversity Training
                      </Typography>
                    </Link>
                  </li>
                  <li>
                    <Link href='/services/advisoryconsulting'>
                      <Typography variant={TypographyVariant.Body2}>
                        Advisory Consulting
                      </Typography>
                    </Link>
                  </li>
                  <li>
                    <Link href='/services/networking'>
                      <Typography variant={TypographyVariant.Body2}>
                        Networking & Workshops
                      </Typography>
                    </Link>
                  </li>
                  <li>
                    <Link href='/services/coaching'>
                      <Typography variant={TypographyVariant.Body2}>
                        Career coaching
                      </Typography>
                    </Link>
                  </li>
                  <li>
                    <Link href='/services/placements'>
                      <Typography variant={TypographyVariant.Body2}>
                        Placements
                      </Typography>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className={styles.li}>
              <Link href='/about'>
                <Typography variant={TypographyVariant.Body2}>
                  About Us
                </Typography>
              </Link>
            </li>
            <li className={styles.li}>
              <Link href='/contact'>
                <Typography variant={TypographyVariant.Body2}>
                  Contact
                </Typography>
              </Link>
            </li>
            {<UserOutlet />}
          </ul>
          {/* <MyLogin className={styles.login} /> */}
        </div>
        <Image
          className={styles.hamburger}
          src={Hamburger}
          alt='hamburger menu'
          onClick={toggleDropdown}
        />
        <div className={styles.dropdownContainer} ref={dropdownRef}>
          {isDropdownVisible && (
            <ul className={`${styles.dropdownMenu}`}>
              <li className={styles.li}>
                <Link href='/neurodivergentmates' onClick={toggleDropdown}>
                  <Typography variant={TypographyVariant.Body2}>
                    Neurodivergent Mates
                  </Typography>
                </Link>
              </li>
              <li className={styles.li}>
                <Link
                  href='/services/neurodiversitytraining'
                  onClick={toggleDropdown}
                >
                  <Typography variant={TypographyVariant.Body2}>
                    Neurodiversity Training
                  </Typography>
                </Link>
              </li>
              <li className={styles.li}>
                <Link
                  href='/services/advisoryconsulting'
                  onClick={toggleDropdown}
                >
                  <Typography variant={TypographyVariant.Body2}>
                    Advisory Consulting
                  </Typography>
                </Link>
              </li>
              <li className={styles.li}>
                <Link href='/services/networking' onClick={toggleDropdown}>
                  <Typography variant={TypographyVariant.Body2}>
                    Networking & Workshops
                  </Typography>
                </Link>
              </li>
              <li className={styles.li}>
                <Link href='/services/coaching' onClick={toggleDropdown}>
                  <Typography variant={TypographyVariant.Body2}>
                    Career coaching
                  </Typography>
                </Link>
              </li>
              <li className={styles.li}>
                <Link href='/services/placements' onClick={toggleDropdown}>
                  <Typography variant={TypographyVariant.Body2}>
                    Placements
                  </Typography>
                </Link>
              </li>
              <li className={styles.li}>
                <Link href='/about' onClick={toggleDropdown}>
                  <Typography variant={TypographyVariant.Body2}>
                    About Us
                  </Typography>
                </Link>
              </li>
              <li className={styles.li}>
                <Link href='/contact' onClick={toggleDropdown}>
                  <Typography variant={TypographyVariant.Body2}>
                    Contact
                  </Typography>
                </Link>
              </li>
              {<UserOutlet />}
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
}
