import { Box, Container, makeStyles, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import CallButton from "./CallButton";
import SearchBar from "./SearchBar";
import Locations from "../Data.json"
import axios from "axios";

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
  dividerLine: {
    marginTop: 40,
    marginBottom: 10,
    height: 2,
    minWidth: 400,
    display: "none",
    backgroundColor: "#ffff",
    [theme.breakpoints.up("lg")]: {
      display: "block",
    },
  },
  searchBar: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#ffff",
    justifyContent: "between",
    borderRadius: "100px",
    padding: 12,
    width: "100%",
    maxWidth: 400,
    marginTop: 20,
  },
  searchInput: {
    outline: "none",
    border: "none",
    width: "90%",
    marginLeft: 10,
    height: "100%",
    fontSize: "18px",
  },
  dataResult: {
    width: 400,
    height: 200,
    borderRadius: 5,
    textAlign: "left",
    backgroundColor: "#ffff",
    boxShadow: "#0009 0px 2px 10px",
    marginTop: 5,
    color: "#000",
    overflowX: "hidden",
    overflowY: "auto",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
  dataItem: {
    padding: "15px 20px",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#f3f3f3",
    },
  },
}));

function Hero() {
  
  const classes = useStyles();
  const url = "http://towing-api.3utilities.com:786/search"
  const [ search, setSearch ] = useState([]);

  useEffect(() => {
    axios.get(url)
    .then((res) => {
      setSearch(res.data)
      console.log("Search")
      console.log(res.data)
    })
  }, []);

  return (
    <Box className={classes.hero}>
      <Container className={classes.heroContainer}>
        <Typography variant="h1">Towing Services</Typography>
        <br />
        <Typography variant="h2">LA, California</Typography>
        <br />
        <CallButton />
        <Box className={classes.dividerLine}></Box>
        <Typography variant="h6">
          24 HOUR EMERGENCY SERVICE & ROADSIDE ASSISTANCE
        </Typography>
        <SearchBar placeholder="Search Location..." data={search} />
      </Container>
    </Box>
  );
}

export default Hero;
