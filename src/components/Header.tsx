import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.navList}>
          <li className={styles.navItem}><a href="/">Home</a></li>
          <li className={styles.navItem}><a href="/about">About Us</a></li>
          <li className={styles.navItem}><a href="/contact">Contact Us</a></li>
          <li className={styles.navItem}><a href="/job">Job</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

  