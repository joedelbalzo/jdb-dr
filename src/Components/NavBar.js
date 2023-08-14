import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Services from "./Services";
import About from "./About";
import Contact from "./Contact";

//mui
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

//images
import books from "./assets/books.jpg";
import bookssmall from "./assets/bookssmall.jpg";
import redUnderline from "./assets/redunderline.png";

const NavBar = () => {
  const [width, setWidth] = useState(0);
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  useEffect(() => {
    try {
      const width = window.innerWidth;
      setWidth(width);
    } catch (err) {
      console.log(err);
    }
  }, []);

  let pages = ["Services", "Portfolio", "Contact"];

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <nav>
        <div className="nameDivContainer">
          <div className="name">
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              Dawn Ryan
            </Link>
          </div>
          <div className="underline">
            <img src={redUnderline} />
          </div>
        </div>
        <div className="menuItems" id="large">
          <Link to="/about">
            <div className="menuItems-second-child">About</div>
          </Link>
          <Link to="/services">
            <div className="menuItems-first-child">Services</div>
          </Link>
          <Link to="/contact">
            <div className="menuItems-third-child">Contact</div>
          </Link>
        </div>
        <div className="menuItems" id="small">
          <Box
            sx={{
              padding: "0px",
              margin: "0px",
              // width: "50px",
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
              // size="large"
              // aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              // id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                padding: 0,
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem key={"home"} onClick={scrollToTop}>
                <Typography textAlign="center">Home</Typography>
              </MenuItem>
              <MenuItem key={"services"}>
                <Typography textAlign="center">
                  <Link offset="10" href="#services">
                    Services
                  </Link>
                </Typography>
              </MenuItem>
              <MenuItem key={"portfolio"}>
                <Typography textAlign="center">
                  <Link offset="10" href="#portfolio">
                    Portfolio
                  </Link>
                </Typography>
              </MenuItem>
              <MenuItem key={"contact"}>
                <Link offset="10" href="#contact">
                  <Typography textAlign="center">Contact</Typography>
                </Link>
              </MenuItem>
            </Menu>
          </Box>
        </div>
      </nav>

      {width <= 600 ? (
        <img
          src={books}
          style={{ width: "100%", borderBottom: " 6px solid rgba(50, 80, 250, 0.4)" }}
          alt="https://unsplash.com/@eddrobertson"
        />
      ) : (
        <img
          src={bookssmall}
          style={{ width: "100%", borderBottom: " 6px solid rgba(50, 80, 250, 0.4)" }}
          alt="https://unsplash.com/@eddrobertson"
        />
      )}
    </>
  );
};

export default NavBar;
