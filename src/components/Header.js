import { NavLink } from 'react-router-dom';
import styles from '../styles/header.module.css';
import profileBtnImg from '../assets/profile-btn.png';

function Header() {
  const links = [
    { path: '/', text: 'BOOKS' },
    { path: 'categories', text: 'CATEGORIES' },
  ];

  return (
    <div className={styles.header}>
      <a className={styles.logo} href="/">
        Bookstore CMS
      </a>
      <ul className={styles.navbar}>
        {links.map((link) => (
          <li key={link.text.toLowerCase()} className={styles.navbarItem}>
            <NavLink to={link.path}>{link.text}</NavLink>
          </li>
        ))}
      </ul>
      <a className={styles.profile} href="/">
        <img alt="profile-button" src={profileBtnImg} />
      </a>
    </div>
  );
}

export default Header;
