import React, { useEffect, useState } from "react";
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
import axios from "axios";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import SearchBar from "../SearchBar";

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
      gridTemplateColumns: "0.25fr 1fr",
    },
  },
  navLeft: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  navRight: {
    display: "none",
    alignItems: "center",
    justifyContent:"end",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  logo: {
    height: 50,
    [theme.breakpoints.up("md")]: {
      height: 60,
    },
  },
  navLink: {
    margin: "0px 20px",
    color: "#101010",
    textDecoration: "none",
    transition: "0.25s",
    "&:hover": {
      color: "#fff",
    },
  },
  serviceLink: {
    display: "flex",
    alignItems: "center",
  },
  menuIcon: {
    display: "block",
    cursor: "pointer",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },

  // Navbar for phone styling
  navBarPhone: {
    minHeight: "100vh",
    width: "100%",
    backgroundColor: "#0009",
    backdropFilter: "blur(8px)",
    position: "fixed",
    top: 0,
    transform: "translateY(-50vh)",
    zIndex: "10",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  displayNav: {
    minHeight: "100vh",
    width: "100%",
    backgroundColor: "#0009",
    backdropFilter: "blur(8px)",
    position: "fixed",
    top: 0,
    zIndex: "10",
    transform: "translateY(0vh)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  navHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "80%",
    marginTop: 20,
  },
  closeIcon: {
    height: 18,
    marginTop: 10,
  },
  serviceName: {
    color: "#000",
    textDecoration: "none",
    padding: "15px 30px",
    display: "flex",
    alignItems: "center",
    transition: "0.15s",
    "&:hover": {
      backgroundColor: "#f3f3f3",
    },
  },
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
  
  // Fetching Services
  const url = "http://towing-api.3utilities.com:786/services";
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios.get(url).then((res) => {
      setServices(res.data);
      console.log(res.data);
    });
  }, []);


  // Fetching Search Items
  const url2 = "http://towing-api.3utilities.com:786/search"
  const [ search, setSearch ] = useState([]);

  useEffect(() => {
    axios.get(url2)
    .then((res) => {
      setSearch(res.data)
      console.log("Search")
      console.log(res.data)
    })
  }, []);

  const classes = useStyles();
  // Displaying Phone Navbar
  const [style, setStyle] = useState("navbarPhone");
  const [toolbarStyle, setToolbarStyle] = useState("toobarStyle");

  // Changing Style
  const changeStyle = () => {
    if (style === "navbarPhone") {
      setStyle("displayNav");
      setToolbarStyle("hideToolbar");
    } else {
      setStyle("navbarPhone");
      setToolbarStyle("toolbarStyle");
    }
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar>
          <Toolbar className={toolbarStyle} sx={{ backgroundColor: "#ffc000" }}>
            <Box className={classes.navBar}>
              <Box className={classes.navLeft}>
                <Link to="/">
                  <img className={classes.logo} src="/images/logo.png" alt="" />
                </Link>
              </Box>
              <Box className={classes.navRight}>
              <Link to="/" className={classes.navLink}>
                  <Typography className={classes.linkText}>Home</Typography>
                </Link>
                <Link to="/about" className={classes.navLink}>
                  <Typography className={classes.linkText}>About Us</Typography>
                </Link>
                <Link to="/services" className="nav__link">
                  <Typography className="nav__item">Services</Typography>
                  <Box className="nav__dropDown">
                    {services.map((val, key) => {
                      return (
                        <Link to={val.route} className={classes.serviceName}>
                          <ManageAccountsIcon />
                          <Typography className="service">
                            {val.name}
                          </Typography>
                        </Link>
                      );
                    })}
                  </Box>
                </Link>
                <Link to="/findlocation" className={classes.navLink}>
                  <Typography className={classes.linkText}>
                    Find your location
                  </Typography>
                </Link>
              </Box>
              <img
                onClick={() => changeStyle()}
                className={classes.menuIcon}
                src="/images/icons/menuIcon.png"
                alt=""
              />
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
            <img
              className={classes.closeIcon}
              src="/images/icons/crossIcon.png"
              alt=""
            />
          </Link>
        </Box>
        <br />
        <br />

        {/*  Nav Links  */}
        <Box className="phoneLandscape">
          <Box className="navLinksPhone">
            <Link to="/" className="nav__link__phone">
              <Typography>Home</Typography>
            </Link>
            <Link to="/about" className="nav__link__phone">
              <Typography>About Us</Typography>
            </Link>
            <Link to="/services" className="nav__link__phone">
              <Typography className="nav__item">Services</Typography>
              <Box className="nav__dropDown__phone">
                {services.map((val, key) => {
                  return (
                    <Link to={val.route} className={classes.serviceName}>
                      <ManageAccountsIcon />
                      <Typography>{val.name}</Typography>
                    </Link>
                  );
                })}
              </Box>
            </Link>
            <Link to="/findlocation" className="nav__link__phone">
              <Typography>Find your location</Typography>
            </Link>
          </Box>

          {/* Search Bar */}
          <Box className={classes.searchBar}>
          <SearchBar placeholder="Search Location..." data={search} />
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
}
