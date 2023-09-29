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
        {links.map((navItem) => (
          <li key={navItem.text.toLowerCase()} className={styles.navbarItem}>
            {navItem.text}
          </li>
        ))}
      </ul>
      <a href="/">profile</a>
    </div>
  );
}

export default Header;
