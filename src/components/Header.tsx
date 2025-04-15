import React, { useEffect, useState } from "react";
import styles from "../styles/components/Header.module.css";
import Image from "next/image";
import BusinessIcon from "@mui/icons-material/Business";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Link from "next/link";
import { styled, useTheme } from "@mui/material/styles";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Divider from "@mui/material/Divider";
import { Button } from "@mui/material";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import useMediaQuery from "@mui/material/useMediaQuery";
import { FloatingNav } from "@/components/ui/floating-nav";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import ConstructionIcon from "@mui/icons-material/Construction";

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery("(max-width:768px)");

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

  const MobileMenu = () => (
    <>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="end"
        onClick={toggleDrawer(true)}
        sx={{
          display: { xs: "flex", md: "none" },
          color: "#1e3a8a", // blue-900
        }}
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
                sx={{
                  "&:hover": {
                    backgroundColor: "#1e3a8a",
                    color: "white",
                    "& .MuiListItemIcon-root": {
                      color: "white",
                    },
                  },
                }}
              >
                <ListItemIcon>
                  <BusinessIcon />
                </ListItemIcon>
                <ListItemText primary="Sobre nós" />
              </ListItemButton>
            </Link>
          </ListItem>
          <ListItem disablePadding>
            <Link href="/como-trabalhamos" passHref style={{ width: "100%" }}>
              <ListItemButton
                component="a"
                onClick={toggleDrawer(false)}
                sx={{
                  "&:hover": {
                    backgroundColor: "#1e3a8a",
                    color: "white",
                    "& .MuiListItemIcon-root": {
                      color: "white",
                    },
                  },
                }}
              >
                <ListItemIcon>
                  <ConstructionIcon />
                </ListItemIcon>
                <ListItemText primary="Como Trabalhamos" />
              </ListItemButton>
            </Link>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              component="a"
              href="https://drive.google.com/drive/folders/1W8OrQW2SaWFxaayOYQVQmyIWZ33fuV_m"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                "&:hover": {
                  backgroundColor: "#1e3a8a",
                  color: "white",
                  "& .MuiListItemIcon-root": {
                    color: "white",
                  },
                },
              }}
            >
              <ListItemIcon>
                <FileDownloadIcon />
              </ListItemIcon>
              <ListItemText primary="Baixar Catálogo" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              component="a"
              href="https://wa.me/message/6FZ3YWIMM7XWF1"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                "&:hover": {
                  backgroundColor: "#1e3a8a",
                  color: "white",
                  "& .MuiListItemIcon-root": {
                    color: "white",
                  },
                },
              }}
            >
              <ListItemIcon>
                <FileDownloadIcon />
              </ListItemIcon>
              <ListItemText primary="Fale Conosco" />
            </ListItemButton>
          </ListItem>
        </List>
      </SwipeableDrawer>
    </>
  );

  const DesktopMenu = () => (
    <div className="hidden md:flex items-center space-x-6">
      <FloatingNav
        navItems={[
          {
            name: "Sobre nós",
            link: "/sobrenos",
            icon: <BusinessIcon className="h-5 w-5" />,
          },
          {
            name: "Como Trabalhamos",
            link: "/como-trabalhamos",
            icon: <ConstructionIcon className="h-5 w-5" />,
          },
          {
            name: "Baixar Catálogo",
            link: "https://drive.google.com/drive/folders/1W8OrQW2SaWFxaayOYQVQmyIWZ33fuV_m",
            icon: <FileDownloadIcon className="h-5 w-5" />,
          },
          {
            name: "Fale Conosco",
            link: "https://wa.me/message/6FZ3YWIMM7XWF1",
            icon: <FileDownloadIcon className="h-5 w-5" />,
          },
        ]}
      />
    </div>
  );

  const HeaderCmp: React.FC = () => (
    <BackgroundGradient className="container mx-auto px-4 flex items-center justify-between h-full bg-white/80 backdrop-blur-sm">
      <div className={styles.logo}>
        <Link href="/">
          <Image
            className={styles.logoImg}
            alt="logo"
            src="/logo.png"
            width={137}
            height={61}
            priority
          />
        </Link>
      </div>
      <nav className="flex items-center">
        {isMobile ? <MobileMenu /> : <DesktopMenu />}
      </nav>
    </BackgroundGradient>
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
