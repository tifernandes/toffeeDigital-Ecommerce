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
          <li><a href="/">Início</a></li>
          <li><a href="/produtos">Produtos</a></li>
          <li><a href="/contato">Contato</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;