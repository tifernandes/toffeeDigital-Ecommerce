import React, { useEffect, useState } from "react";
import styles from "../styles/components/Header.module.css";
import Image from "next/image";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Link from "next/link";
import { styled, useTheme } from "@mui/material/styles";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Divider from "@mui/material/Divider";
import useMediaQuery from "@mui/material/useMediaQuery";
import { FloatingNav } from "@/components/ui/floating-nav";
import { CTA_REVENDA, WHATSAPP_URL, CATALOGO_URL } from "@/lib/site";
import { trackLeadConversion } from "@/lib/gtag";

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  // Menu completo só cabe a partir de ~1024px (5 itens + CTA + logo).
  // Abaixo disso usamos o drawer (hambúrguer).
  const isMobile = useMediaQuery("(max-width:1023px)");

  useEffect(() => {
    window.onscroll = function () {
      const currentScrollPos = window.pageYOffset;
      if (currentScrollPos < 100) {
        document.getElementById("containerFix")!.style.transform =
          "translateY(-100px)";
      } else {
        document.getElementById("containerFix")!.style.transform =
          "translateY(0px)";
      }
    };
  }, []);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setOpen(open);
    };

  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-start",
  }));

  const drawerItemSx = {
    "&:hover": {
      backgroundColor: "#1e3a8a",
      color: "white",
    },
  };

  const MobileMenu = () => (
    <>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="end"
        onClick={toggleDrawer(true)}
        sx={{ color: "#1e3a8a" }}
      >
        <MenuIcon />
      </IconButton>

      <SwipeableDrawer
        PaperProps={{
          sx: {
            width: "80%",
            maxWidth: "300px",
            backgroundColor: "#f8fafc", // slate-50
          },
        }}
        anchor="left"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <DrawerHeader sx={{ backgroundColor: "#1e3a8a", color: "white" }}>
          <IconButton onClick={toggleDrawer(false)} sx={{ color: "white" }}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
          <span className="ml-2 font-semibold">Menu</span>
        </DrawerHeader>
        <Divider />
        <List className={styles.menu}>
          <ListItem disablePadding>
            <Link href="/sobrenos" passHref style={{ width: "100%" }}>
              <ListItemButton
                component="a"
                onClick={toggleDrawer(false)}
                sx={drawerItemSx}
              >
                <ListItemText primary="Sobre nós" />
              </ListItemButton>
            </Link>
          </ListItem>
          <ListItem disablePadding>
            <Link href="/como-trabalhamos" passHref style={{ width: "100%" }}>
              <ListItemButton
                component="a"
                onClick={toggleDrawer(false)}
                sx={drawerItemSx}
              >
                <ListItemText primary="Como Trabalhamos" />
              </ListItemButton>
            </Link>
          </ListItem>
          <ListItem disablePadding>
            <Link href="/parceiros" passHref style={{ width: "100%" }}>
              <ListItemButton
                component="a"
                onClick={toggleDrawer(false)}
                sx={drawerItemSx}
              >
                <ListItemText primary="Parceiros" />
              </ListItemButton>
            </Link>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              component="a"
              href={CATALOGO_URL}
              target="_blank"
              rel="noopener noreferrer"
              sx={drawerItemSx}
            >
              <ListItemText primary="Baixar Catálogo" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              component="a"
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackLeadConversion()}
              sx={drawerItemSx}
            >
              <ListItemText primary="Fale Conosco" />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disablePadding>
            <ListItemButton
              component="a"
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackLeadConversion()}
              sx={{
                backgroundColor: "#facc15", // yellow-400
                color: "#1e3a8a",
                fontWeight: 700,
                justifyContent: "center",
                my: 1,
                "&:hover": {
                  backgroundColor: "#fde047", // yellow-300
                },
              }}
            >
              <ListItemText
                primary={CTA_REVENDA}
                primaryTypographyProps={{ fontWeight: 700, textAlign: "center" }}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </SwipeableDrawer>
    </>
  );

  const DesktopMenu = () => (
    <div className="hidden lg:flex items-center gap-3">
      <FloatingNav
        navItems={[
          { name: "Sobre nós", link: "/sobrenos" },
          { name: "Como Trabalhamos", link: "/como-trabalhamos" },
          { name: "Parceiros", link: "/parceiros" },
          { name: "Baixar Catálogo", link: CATALOGO_URL },
          {
            name: "Fale Conosco",
            link: WHATSAPP_URL,
            onClick: () => trackLeadConversion(),
          },
        ]}
      />
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackLeadConversion()}
        className="inline-flex items-center whitespace-nowrap rounded-lg bg-yellow-400 px-4 py-2 text-sm font-bold text-blue-900 shadow-sm transition-colors hover:bg-yellow-300"
      >
        {CTA_REVENDA}
      </a>
    </div>
  );

  const HeaderCmp: React.FC = () => (
    <div className="container mx-auto px-4 flex items-center justify-between h-full">
      <Link href="/" className="flex items-center">
        <Image
          className={styles.logoImg}
          alt="logo"
          src="/logo.png"
          width={137}
          height={61}
          priority
        />
      </Link>
      <nav className="flex items-center">
        {isMobile ? <MobileMenu /> : <DesktopMenu />}
      </nav>
    </div>
  );

  return (
    <>
      <header className="h-20 bg-white shadow-sm z-50">
        <HeaderCmp />
      </header>

      <header
        className="fixed top-0 left-0 w-full h-20 bg-white shadow-md transform -translate-y-full transition-transform duration-300 z-50"
        id="containerFix"
      >
        <HeaderCmp />
      </header>
    </>
  );
};

export default Header;
