import * as React from "react";
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
        minHeight: "100vh",
        width: "100%",
        backgroundColor: "#0009",
        backdropFilter: "blur(8px)",
        position: 'fixed',
        top: 0,
        zIndex: "10",
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
        width: "80%"
    },
    closeIcon: {
        height: 18,
        marginTop: 40
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
    logo: {
        height: 50,
        marginTop: 30
    },
    navLink: {
        borderBottom: "1px solid gray",
        width: "80%",
        color: "#ffff",
        textDecoration: "none",
        padding: 20,
        textAlign: "center"
    }
}));

export default function NavbarPhone() {

    const classes = useStyles();
    return (
        <Box className={classes.navBar}>
            <Box className={classes.navHeader}>
                
                {/* Logo */}
                <Link to="/">
                    <img className={classes.logo} src="/images/logo.png" alt="" />
                </Link>
                <Link to="/">
                    <img className={classes.closeIcon} src="/images/icons/crossIcon.png" alt="" />
                </Link>
            </Box>
            <br />
            <br />

            {/*  Nav Links  */}
            <Link to="/" className={classes.navLink}><Typography>Home</Typography></Link>
            <Link to="/" className={classes.navLink}><Typography>About Us</Typography></Link>
            <Link to="/" className={classes.navLink}><Typography>Services</Typography></Link>
            <Link to="/" className={classes.navLink}><Typography>Find your location</Typography></Link>

            {/* Search Bar */}
            <Box className={classes.searchBar}>
                <input type="text" className={classes.searchInput} placeholder="Search location" />
                <img className={classes.searchIcon} src="/images/icons/searchIcon.png" alt="" />
            </Box>
        </Box>
    );
}
