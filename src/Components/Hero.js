import { Box, Container, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import CallButton from "./CallButton";
import SearchBar from "./SearchBar";

const useStyles = makeStyles((theme) => ({
  hero: {
    backgroundImage: "url(/images/banner-img1.jpg)",
    minHeight: "70vh",
    backgroundPosition: "top",
    backgroundSize: "cover",
    color: "#ffff",
    textAlign: "center",
  },
  heroContainer: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    padding: "90px 0px",
  },
  tagline:{
    fontSize:"40px",
    [theme.breakpoints.up("lg")]: {
      fontSize:"70px"
    },
  },
  taglineBottom:{
    fontSize:"30px",
    [theme.breakpoints.up("lg")]: {
      fontSize:"50px"
    },
  },
  dividerLine: {
    marginBottom: 10,
    height: 2,
    minWidth: 400,
    display: "none",
    backgroundColor: "#ffff",
    [theme.breakpoints.up("lg")]: {
      display: "block",
    },
  },
}));

function Hero() {
  
  const classes = useStyles();

  return (
    <Box className={classes.hero}>
      <Container className={classes.heroContainer}>
        <Typography className={classes.tagline}>Towing Services</Typography>
        <br />
        <Typography className={classes.taglineBottom}>LA, California</Typography>
        <br />
        <CallButton />
        <br />
        <Box className={classes.dividerLine}></Box>
        <Typography variant="h6">
          24 HOUR EMERGENCY SERVICE & ROADSIDE ASSISTANCE
        </Typography>
        <SearchBar placeholder="Search City..." />
      </Container>
    </Box>
  );
}

export default Hero;
