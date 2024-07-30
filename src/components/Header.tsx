import React, { useEffect, useState } from 'react';
import styles from'../styles/components/Header.module.css';
import Image from 'next/image'
import HomeIcon from '@mui/icons-material/Home';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import CallIcon from '@mui/icons-material/Call';
import ListAltIcon from '@mui/icons-material/ListAlt';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import BusinessIcon from '@mui/icons-material/Business';
import Link from 'next/link'
import { styled, useTheme } from '@mui/material/styles';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Divider from '@mui/material/Divider';

const Header = () => {

  const [menuMbOpen, setMenuMbOpen] = useState(false);
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();

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

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setOpen(open);
  };

  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  }));

  const NavCmp = () => {
    return(
      <>

        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="end"
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>

        <SwipeableDrawer
            PaperProps={{
              sx: { width: "60%", maxWidth: "400px" },
            }}
            anchor="left"
            open={open}
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(true)}
          >
          <DrawerHeader>
            <IconButton onClick={toggleDrawer(false)}>
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </DrawerHeader>
        <Divider />
        <List className={styles.menu}>
          <ListItem disablePadding>
            <Link href="/" onClick={toggleDrawer(false)} passHref>
              <ListItemButton component="a">
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Início" />
              </ListItemButton>
            </Link>
          </ListItem>
          <ListItem disablePadding>
            <Link href="/produtos" onClick={toggleDrawer(false)} passHref>
              <ListItemButton component="a">
                <ListItemIcon>
                  <ShoppingBagIcon />
                </ListItemIcon>
                <ListItemText primary="Produtos" />
              </ListItemButton>
            </Link>
          </ListItem>
          <ListItem disablePadding>
            <Link href="/contato" onClick={toggleDrawer(false)} passHref>
              <ListItemButton component="a">
                <ListItemIcon>
                  <CallIcon />
                </ListItemIcon>
                <ListItemText primary="Contato" />
              </ListItemButton>
            </Link>
          </ListItem>
          <ListItem disablePadding>
            <Link href="/sobrenos" onClick={toggleDrawer(false)} passHref>
              <ListItemButton component="a">
                <ListItemIcon>
                  <BusinessIcon />
                </ListItemIcon>
                <ListItemText primary="Sobre nós" />
              </ListItemButton>
            </Link>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="https://drive.google.com/drive/folders/1W8OrQW2SaWFxaayOYQVQmyIWZ33fuV_m" target="_blank" rel="noopener noreferrer">
              <ListItemIcon>
                <ListAltIcon />
              </ListItemIcon>
              <ListItemText primary="Catálogo" />
            </ListItemButton>
          </ListItem>
        </List>
        </SwipeableDrawer>
      </>
    )
  }

  const HeaderCmp = (props) => {

    return (
      <>
        <div className={styles.logo}>
          <a href="/">
            <Image className={styles.logoImg} alt='logo' src="/logo.png" width={137} height={61}/>
          </a>
        </div>
        <nav className={styles.menuContainer}>
          <NavCmp />
        </nav>
      </>
    )
  }

  return (
    <>
    <header className={styles.container} id="container">
      <HeaderCmp />
    </header>

    {/* NAV BAR FLUTUANTE */}
    <header className={styles.containerFix} id="containerFix">
      <div className={styles.subContainerFix}>
        <HeaderCmp />
      </div>
    </header>
    </>
  );
};

export default Header;