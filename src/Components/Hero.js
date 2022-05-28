import { Box, Container, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import CallButton from "./CallButton";
import Header from "./Header";

const useStyles = makeStyles((theme) => ({
  hero:{
    backgroundImage:"url(/images/banner-img1.jpg)",
    minHeight:"100vh",
    backgroundPosition:"center",
    backgroundSize:"cover",
    color:"#ffff",
    textAlign:"center"
  },
  heroContainer:{
    display:"flex",
    alignItems:"center",
    flexDirection:"column",
    justifyContent:"center",
    padding:"50px 0px",
    marginTop:"50px",
  },
  dividerLine:{
    marginTop:40,
    marginBottom:10,
    height:2,
    minWidth:400,
    display:"none",
    backgroundColor:"#ffff" ,
    [theme.breakpoints.up("lg")]:{
      display:"block"
    }
  }
}));

function Hero() {

  const classes = useStyles();

  return (
    <Box className={classes.hero}>
      <Header />
      <Container className={classes.heroContainer}>
        <Typography variant="h4">Towing Services</Typography>
        <Typography variant="h1">Alabama</Typography>
        <br />
        <CallButton/>
        <Box className={classes.dividerLine}></Box>
        <Typography variant="h6">24 HOUR EMERGENCY SERVICE & ROADSIDE ASSISTANCE</Typography>
      </Container>  
    </Box>
  );
}

export default Hero;

