import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Slide from "@mui/material/Slide";
import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  navBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "#000",
    padding: 8,
    width: "100%",
    [theme.breakpoints.up("md")]: {
      display: "grid",
      gridTemplateColumns: "1fr 0.75fr 1fr",
    }
  },
  navLeft: {
    display: "none",
    alignItems: "center",
    justifyContent: "end",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  },
  navRight: {
    display: "none",
    alignItems: "center",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  },
  navMiddle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    height: 50,
    [theme.breakpoints.up("md")]: {
      height: 60,
    }
  },
  navLink: {
    margin: "0px 20px",
    color: "#000",
    textDecoration: "none",
    transition: "0.25s",
    '&:hover': {
      color: "red"
    },
  },
  menuIcon: {
    display: "block",
    cursor: "pointer",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  },

  // Navbar for phone styling
  navBarPhone: {
    minHeight: "100vh",
    width: "100%",
    backgroundColor: "#0009",
    backdropFilter: "blur(8px)",
    position: 'fixed',
    top: 0,
    transform: "translateY(-50vh)",
    zIndex: "10",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  },
  displayNav: {
    minHeight: "100vh",
    width: "100%",
    backgroundColor: "#0009",
    backdropFilter: "blur(8px)",
    position: 'fixed',
    top: 0,
    zIndex: "10",
    transform: "translateY(0vh)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  },
  navHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "80%",
    marginTop: 30
  },
  closeIcon: {
    height: 18,
    marginTop: 10
  },
  searchBar: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#ffff",
    justifyContent: "between",
    borderRadius: "100px",
    padding: 20,
    width: "80%",
    maxWidth: 400,
    marginTop: 50
  },
  searchInput: {
    outline: "none",
    border: "none",
    width: "90%",
    marginLeft: 10,
    height: "100%",
    fontSize: "18px"
  },
  navLinkPhone: {
    borderBottom: "1px solid gray",
    width: "80%",
    color: "#ffff",
    textDecoration: "none",
    padding: 20,
    textAlign: "center"
  }
}));

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: React.ReactElement;
}

function HideOnScroll(props: Props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function Navbar(props: Props) {

  const classes = useStyles();
  // Displaying Phone Navbar
  const [style, setStyle] = useState("navbarPhone");

  // Changing Style 
  const changeStyle = () => {
    if(style==="navbarPhone"){
      setStyle("displayNav");
    }
    else{
      setStyle("navbarPhone");
    }
  };

  // Chaning Styling back to original
  // const closeNav = () => {
  //   setStyle("nabarPhone");
  // };

  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar>
          <Toolbar sx={{ backgroundColor: "#ffc000" }}>
            <Box className={classes.navBar}>
              <Box className={classes.navLeft}>
                <Link to="/" className={classes.navLink}><Typography>Home</Typography></Link>
                <Link to="/" className={classes.navLink}><Typography>About Us</Typography></Link>
              </Box>
              <Box className={classes.navMiddle}>
                <Link to="/">
                  <img className={classes.logo} src="/images/logo.png" alt="" />
                </Link>
              </Box>
              <Box className={classes.navRight}>
                <Link to="/" className={classes.navLink}><Typography>Services</Typography></Link>
                <Link to="/" className={classes.navLink}><Typography>Find your location</Typography></Link>
              </Box>
              <img onClick={() => changeStyle()} className={classes.menuIcon} src="/images/icons/menuIcon.png" alt="" />
            </Box>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />


      {/* Navbar For Phone Screen */}
      <Box className={style}>
        <Box className={classes.navHeader}>

          {/* Logo */}
          <Link to="/">
            <img className={classes.logo} src="/images/logo.png" alt="" />
          </Link>
          <Link to="/" onClick={() => changeStyle()}>
            <img className={classes.closeIcon} src="/images/icons/crossIcon.png" alt="" />
          </Link>
        </Box>
        <br />
        <br />

        {/*  Nav Links  */}
        <Link to="/" className={classes.navLinkPhone}><Typography>Home</Typography></Link>
        <Link to="/" className={classes.navLinkPhone}><Typography>About Us</Typography></Link>
        <Link to="/" className={classes.navLinkPhone}><Typography>Services</Typography></Link>
        <Link to="/" className={classes.navLinkPhone}><Typography>Find your location</Typography></Link>

        {/* Search Bar */}
        <Box className={classes.searchBar}>
          <input type="text" className={classes.searchInput} placeholder="Search location" />
          <img className={classes.searchIcon} src="/images/icons/searchIcon.png" alt="" />
        </Box>
      </Box>
    </React.Fragment>
  );
}
