import React from 'react';
import styles from'../styles/components/Header.module.css';
import Image from 'next/image'

const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.logo}>
        <a href="/">
          <Image className={styles.logoImg} src="/logo.png" width={137} height={61}/>
        </a>
      </div>
      <nav className={styles.menu}>
        <ul>
          <li><a href="/">INÍCIO</a></li>
          <li><a href="/produtos">PRODUTOS</a></li>
          <li><a href="/contato">CONTATO</a></li>
        </ul>
      </nav>
      <div className={styles.search}>

      </div>
    </header>
  );
};

export default Header;