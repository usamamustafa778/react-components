import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
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
  list:{
    columnCount:"4",
    WebkitColumnCount:"4"
  }
}));

function ZipCodes({ zips, setApiData3, apiData3 }) {
  const { state, city } = useParams();
  useEffect(() => {
    const handleClick2 = async () => {
      try {
        const response = await axios.get(
          `http://api.3utilities.com:86/zips?state=${state.replace(
            /\-/g,
            " "
          )}&city=${city.replace(/\-/g, " ")}&token=MucabF_PcS_KcjU_ucabHPc`
        );
        // http://api.3utilities.com:86/zips?state=texas&city=houston&token=MucabF_PcS_KcjU_ucabHPc

        setApiData3(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    handleClick2();
  }, [state, city]);

  const classes = useStyles();

  return (
    <Box>
      <Container className={classes.apiContainer}>
        <Typography className={classes.heading} variant="h4">
          Areas We Serve
        </Typography>
        <ul className={classes.list}>
          {zips
            ? zips.map((city, i) => (
                <p>
                  <li>{city}</li>
                </p>
              ))
            : null}
        </ul>
      </Container>
    </Box>
  );
}

export default ZipCodes;
