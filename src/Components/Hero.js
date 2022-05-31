import { Box, Container, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import CallButton from "./CallButton";

const useStyles = makeStyles((theme) => ({
  hero:{
    backgroundImage:"url(/images/banner-img1.jpg)",
    minHeight:"70vh",
    backgroundPosition:"top",
    backgroundSize:"cover",
    color:"#ffff",
    textAlign:"center"
  },
  heroContainer:{
    display:"flex",
    alignItems:"center",
    flexDirection:"column",
    justifyContent:"center",
    padding:"90px 0px",
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
  },
  searchBar:{
    display:"flex",
    alignItems:"center",
    backgroundColor:"#ffff",
    justifyContent:"between",
    borderRadius:"100px",
    padding:15,
    width:"100%",
    maxWidth:400,
    marginTop:20
  },
  searchInput:{
    outline:"none",
    border:"none",
    width:"90%",
    marginLeft:10,
    height:"100%",
    fontSize:"18px"
  }
}));

function Hero() {
  const classes = useStyles();
  return (
    <Box className={classes.hero}>
      <Container className={classes.heroContainer}>
        <Typography variant="h1">Towing Services</Typography>
        <br />
        <Typography variant="h2">Alabama</Typography>
        <br />
        <CallButton/>
        <Box className={classes.dividerLine}></Box>
        <Typography variant="h6">24 HOUR EMERGENCY SERVICE & ROADSIDE ASSISTANCE</Typography>
        <Box className={classes.searchBar}>
          <input type="text" className={classes.searchInput} placeholder="Search location" />
          <img className={classes.searchIcon}  src="/images/icons/searchIcon.png" alt="" />
        </Box>
      </Container>  
    </Box>
  );
}

export default Hero;

