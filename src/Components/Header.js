import React from "react";
import {
  Box,
  Container,
  makeStyles,
  Typography,
} from "@material-ui/core";
import CallButton from "./CallButton";

const useStyles = makeStyles((theme) => ({
  navbar: {
    padding: 20,
    color: "#000",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo: {
    height: 80,
  },
  hIcon: {
    height: 30,
    marginRight:8
  },
  headerLeft:{
    display:"none",
    alignItems:"center",
    [theme.breakpoints.up("sm")]:{
      display:"flex"
    }
  },
  StateName:{
    color:"#ffff"
  },
  headerButton:{
    display:"none",
    [theme.breakpoints.up("sm")]:{
      display:"block"
    }
  }
}));

function Header() {
  const classes = useStyles();

  return (
    <Box>
      <Container className={classes.navbar}>
        <Box className={classes.headerLeft}>
          <img src="/images/icons/loc.png" className={classes.hIcon} alt="" />
          <Typography variant="h6" className={classes.StateName}>Towing US</Typography>
        </Box>
        <img className={classes.logo} src="/images/logo.png" alt="" />
        <Box className={classes.headerButton}>
        <CallButton />
        </Box>
      </Container>
    </Box>
  );
}

export default Header;
