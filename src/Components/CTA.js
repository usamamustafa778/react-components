import { Box, Container, makeStyles, Typography } from "@material-ui/core";
import React, { useState } from "react";
import CallButton from "./CallButton";

const useStyles = makeStyles((theme) => ({
  box1: {
    backgroundImage: "url(/images/call-bg.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "#fff",
    padding: "50px 0px",
  },
  containerFluid: {
    width: "100%",
    padding: "50px 0px",
    color: "#ffff",
    backgroundColor: "#ffc000",
  },
  heading: {
    textAlign: "center",
    marginTop: 30,
    fontWeight: 600,
    maxWidth: 600,
    textAlign: "center",
  },
  tContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    maxWidth:700
  },
  testimonial:{
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    textAlign:"center",
    padding:30
  }
}));

function CTA() {
  const classes = useStyles();
  const [testmonial, setTestimonial] = useState(true);

  return (
    <Box>
      {/* Box 1 */}
      <Box className={classes.box1}>
        <Typography className={classes.heading} variant="h4">
          Call us for immediate assistance with Towing services in Los Angeles,
          CA
        </Typography>
        <br />
        <CallButton />
      </Box>

      {/* Testimonials */}
      <Box className={classes.containerFluid}>
        <Container className={classes.tContainer}>
          <img src="/images/icons/akar-icons_chevron-left.png" alt="" />
          <Box className={classes.testimonial}>
            <img src="/images/icons/stars.png" alt="" />
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              quas dicta nisi! Neque numquam odio quae laborum iusto aliquid
              alias itaque ab aliquam! Aliquam ea est harum itaque accusamus
              neque.
            </Typography>
          </Box>
          <img src="/images/icons/akar-icons_chevron-right.png" alt="" />
        </Container>
      </Box>
    </Box>
  );
}

export default CTA;
