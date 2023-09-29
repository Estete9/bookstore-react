import { NavLink } from 'react-router-dom';
import styles from '../styles/header.module.css';

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
      <ul>
        {links.map((link) => (
          <li key={link.text.toLowerCase()} className={styles.navbarItem}>
            <NavLink to={link.path}>{link.text}</NavLink>
          </li>
        ))}
      </ul>
      <a href="/">profile</a>
    </div>
  );
}

export default Header;
