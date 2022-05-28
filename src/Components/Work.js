import { Box, Container, makeStyles, Typography } from "@material-ui/core";
import { fontWeight } from "@mui/system";
import React from "react";

const useStyles = makeStyles((theme) => ({
  containerFluid: {
    backgroundColor: "#ffc000",
    padding: "50px 10px",
  },
  row: {
    display: "grid",
    gridTemplateColumns:"repeat(1, 1fr)",
    marginTop:30,
    [theme.breakpoints.up("sm")]:{
      gridTemplateColumns:"repeat(3, 1fr)",
    }
  },
  sectionTitle: {
    textAlign: "center",
    fontWeight: 600,
  },
  IconBg: {
    height: 150,
    width: 150,
    borderRadius: "100%",
    backgroundColor: "#ffff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  workComponent:{
      display:"flex",
      flexDirection:"column",
      alignItems:"center",
      textAlign:"center",
    },
    workComponentTitle:{
        fontWeight:600,
        marginTop:20
    }
}));

function Work() {
  const classes = useStyles();

  return (
    <Box className={classes.containerFluid}>
      <Typography variant="h4" className={classes.sectionTitle}>
        HOW TOWING SERVICE WORK
      </Typography>
      <Container>
        <Box className={classes.row}>
          <WorkComponent
            img="./images/icons/ph-icn.png"
            title="Request Help"
            des="It is a long established fact that a reader will be distracted by the
                        readable content"
          />
          <WorkComponent
            img="./images/icons/truck-icn.png"
            title="Truck Show Up"
            des="It is a long established fact that a reader will be distracted by the
                        readable content"
          />
          <WorkComponent
            img="./images/icons/tow-icn.png"
            title="Off You Go"
            des="It is a long established fact that a reader will be distracted by the
                        readable content"
          />
        </Box>
      </Container>
    </Box>
  );
}

export default Work;

function WorkComponent({ img, title, des }) {
  const classes = useStyles();
  return (
    <Box className={classes.workComponent}>
      <Box className={classes.IconBg}>
        <img src={img} alt="" />
      </Box>
      <Typography className={classes.workComponentTitle} variant="h5">{title}</Typography>
      <Typography>{des}</Typography>
    </Box>
  );
}
