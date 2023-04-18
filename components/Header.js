import React, { useEffect } from 'react';
import styles from'../styles/components/Header.module.css';
import Image from 'next/image'
import HomeIcon from '@mui/icons-material/Home';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import CallIcon from '@mui/icons-material/Call';

const Header = () => {

  useEffect(() => {
    window.onscroll = function() {
      const currentScrollPos = window.pageYOffset;
      if (currentScrollPos < 100) {
        document.getElementById("containerFix").style.transform = "translateY(-100px)";
      } else {
        document.getElementById("containerFix").style.transform = "translateY(70px)";
      }
    };
  }, []);

  const HeaderCmp = () => {
    return (
      <>
        <div className={styles.logo}>
          <a href="/">
            <Image className={styles.logoImg} src="/logo.png" width={137} height={61}/>
          </a>
        </div>
        <nav className={styles.menu}>
          <ul>
            <li><a href="/"><HomeIcon/> Início</a></li>
            <li><a href="/produtos"><ShoppingBagIcon/> Produtos</a></li>
            <li><a href="/contato"><CallIcon/> Contato</a></li>
          </ul>
        </nav>
      </>
    )
  }

  return (
    <>
    <header className={styles.container} id="container">
      <HeaderCmp />
    </header>
    <header className={styles.containerFix} id="containerFix">
      <div className={styles.subContainerFix}>
        <HeaderCmp />
      </div>
    </header>
    </>
  );
};

export default Header;