import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { Box, Container, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  heading: {
    textAlign: "center",
    marginTop: 30,
    fontWeight: 600,
  },
  apiContainer: {
    padding: "50px 10px",
  },
}));

function ServiceArea({ apiData2, setApiData2, loading, setLoading }) {
  const { state, city } = useParams();
  console.log("name is :", state, city);

  useEffect(() => {
    const handleClick = async () => {
      //api get call
      try {
        const response = await axios.get(
          `http://api.3utilities.com:86/cities?state=${state.replace(
            /\-/g,
            " "
          )}&token=MucabF_PcS_KcjU_ucabHPc`
        );

        setApiData2(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    handleClick(state);
  }, []);

  const { cities } = apiData2;

  const classes = useStyles();

  return (
    <Box>
      <Container className={classes.apiContainer}>
        <Typography variant="h4" className={classes.heading}>
          Areas We Serve
        </Typography>
        <Typography>cities</Typography>
        {cities
          ? cities.map((city, i) => (
              <Link to={`/${state}/${city.replace(/\s/g, "-")}`}>
                <li>{city}</li>
              </Link>
            ))
          : null}
      </Container>
    </Box>
  );
}

export default ServiceArea;
