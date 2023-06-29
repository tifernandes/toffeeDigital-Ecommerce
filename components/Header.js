import React, { useEffect, useState } from 'react';
import styles from'../styles/components/Header.module.css';
import Image from 'next/image'
import HomeIcon from '@mui/icons-material/Home';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import CallIcon from '@mui/icons-material/Call';
import ListAltIcon from '@mui/icons-material/ListAlt';

const Header = () => {

  const [menuMbOpen, setMenuMbOpen] = useState(false);

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

  const onClick = () => {
    setMenuMbOpen(!menuMbOpen);

    if(menuMbOpen){
      document.getElementById("menuMbShow").style.transform = "translateY(70px)";
    }else {
      document.getElementById("menuMbShow").style.transform = "translateY(-100px)";
    }
  }

  const NavCmp = () => {
    return(
      <>
        <ul>
          <li><a href="/"><HomeIcon/> Início</a></li>
          <li><a href="/produtos"><ShoppingBagIcon/> Produtos</a></li>
          <li><a href="/contato"><CallIcon/> Contato</a></li>
          <li>
              <a href="https://drive.google.com/drive/folders/1W8OrQW2SaWFxaayOYQVQmyIWZ33fuV_m" target="_blank" rel="noopener noreferrer">
              <ListAltIcon/> Catálogo
            </a>
          </li>
        </ul>
      </>
    )
  }

  const HeaderCmp = (props) => {

    const hideMenu = props.hideMenu

    return (
      <>
        <div className={styles.logo}>
          <a href="/">
            <Image className={styles.logoImg} alt='logo' src="/logo.png" width={137} height={61}/>
          </a>
        </div>
        <nav className={styles.menu}>
          <NavCmp />
        </nav>
        <nav className={styles.menuMobile}>
          {/* <div className={styles.menuMbBt}>
            <Button variant="text" onClick={onClick}>{menuMbOpen ? 'Menu' : 'Fechar'}</Button>
          </div> */}
          {!hideMenu && 
            <div className={styles.menuMbShow} id="menuMbShow">
              <NavCmp />
            </div>
          }
        </nav>
      </>
    )
  }

  return (
    <>
    <header className={styles.container} id="container">
      <HeaderCmp hideMenu={true} />
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