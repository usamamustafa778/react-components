import { Box, Container, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import CallButton from "./CallButton";

const useStyles = makeStyles((theme) => ({
  containerFluid: {
    width: "100%",
    padding: "50px 0px",
    color: "#ffff",
    backgroundImage: "url(/images/all-service-bg.jpg)",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
  },
  servicesContainer: {
    display: "grid",
    gridTemplateColumns: "1fr",
    marginTop:20,
    [theme.breakpoints.up("sm")]:{
      gridTemplateColumns:"repeat(3, 1fr)",
    }
  },
  serviceBox: {
    display: "grid",
    gridTemplateColumns: "30px 1fr",
    padding: 30,
  },
  serviceTitle: {
    fontWeight: 600,
  },
  checkIcon: {
    marginTop: 5,
  },
  services: {
    padding: "50px 10px",
    marginTop: 50,
  },
  top: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  heading: {
    textAlign: "center",
    marginTop: 30,
    fontWeight: 600,
  },
  row: {
    display: "grid",
    gridTemplateColumns: "1fr",
    marginTop: 30,
    [theme.breakpoints.up("sm")]:{
      gridTemplateColumns:"1fr 0.35fr",
    }
  },
  para: {
    padding: "0px 30px",
  },
  rowBottom: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    marginTop: 30,
  },
  imageContainer: {
    padding: 10,
  },
  sImg: {
    width: "100%",
  },
}));

function Services() {
  const classes = useStyles();

  return (
    <Box>
      {/* SD1 */}
      <Container className={classes.services}>
        <Box className={classes.top}>
          <CallButton />
          <Typography className={classes.heading} variant="h4">
            Towing Serivces
          </Typography>
        </Box>
        <Box className={classes.row}>
          <Typography className={classes.para}>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purposeIt is a long
            established fact that a reader will be distracted by the readable
            content of a page when looking at its layout. The point of using
            Lorem Ipsum is that it has a more-or-less normal distribution of
            letters, as opposed to using 'Content here, content here', making it
            look like readable English. Many desktop publishing packages and web
            page editors now use Lorem Ipsum as their default model text, and a
            search for 'lorem ipsum' will uncover many web sites still in their
            infancy. Various versions have evolved over the years, sometimes by
            accident, sometimes on purpose The point of using Lorem Ipsum is
            that it has a more-or-less normal distribution of letters, as
            opposed to using 'Content here, content here', making it look like
            readable English. Many desktop publishing packages and web page
            editors now use Lorem Ipsum as their default model text, and a
            search for 'lorem ipsum' will uncover many web sites still in their
            infancy. Various versions have evolved over the years, sometimes by
            accident, sometimes on purpose The point of using Lorem Ipsum is
            that it has a more-or-less normal distribution of letters, as
            opposed to using 'Content here, content here', making it look like
            readable English. Many desktop publishing packages and web page
            editors now use Lorem Ipsum as their default model text, and a
            search for 'lorem ipsum' will uncover many web sites still in their
            infancy. Various versions have evolved over the years, sometimes by
            accident, sometimes on purpose
          </Typography>
          <Box className={classes.map}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40811.95901496711!2d-118.26267711605716!3d34.03423245399524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA%2C%20USA!5e0!3m2!1sen!2sin!4v1645436723473!5m2!1sen!2sin"
              width="100%"
              height="500"
              style={{ border: "none" }}
              loading="lazy"
            ></iframe>
          </Box>
        </Box>
      </Container>

      {/* Services Starts Here */}
      <Box className={classes.containerFluid}>
        <Container>
          <Box className={classes.top}>
            <Typography className={classes.heading} variant="h4">
              TOWING SERVICE. US
            </Typography>
          </Box>

          <Box className={classes.servicesContainer}>
            <Service
              title="Flatbed Towing"
              des="The point of using Lorem Ipsum is that it has a more-or-less normal
                distribution of letters, as opposed to using 'Content here, content
                here'."
            />
            <Service
              title="Flatbed Towing"
              des="The point of using Lorem Ipsum is that it has a more-or-less normal
                distribution of letters, as opposed to using 'Content here, content
                here'."
            />
            <Service
              title="Flatbed Towing"
              des="The point of using Lorem Ipsum is that it has a more-or-less normal
                distribution of letters, as opposed to using 'Content here, content
                here'."
            />
            <Service
              title="Roadside Assistance"
              des="The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'."
            />
            <Service
              title="Roadside Assistance"
              des="The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'."
            />
            <Service
              title="Roadside Assistance"
              des="The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'."
            />
            <Service
              title="Emergency 24 Hours"
              des="The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'."
            />
            <Service
              title="Emergency 24 Hours"
              des="The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'."
            />
            <Service
              title="Emergency 24 Hours"
              des="The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'."
            />
          </Box>
        </Container>
      </Box>

      {/* Services Ends Here */}

      {/* SD2 */}
      <Container className={classes.services}>
        <Box className={classes.top}>
          <CallButton />
          <Typography className={classes.heading} variant="h4">
            TOWING SERVICE. US
          </Typography>
        </Box>
        <Box className={classes.row}>
          <Typography className={classes.para}>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purposeIt is a long
            established fact that a reader will be distracted by the readable
            content of a page when looking at its layout. The point of using
            Lorem Ipsum is that it has a more-or-less normal distribution of
            letters, as opposed to using 'Content here, content here', making it
            look like readable English. Many desktop publishing packages and web
            page editors now use Lorem Ipsum as their default model text, and a
            search for 'lorem ipsum' will uncover many web sites still in their
            infancy. Various versions have evolved over the years, sometimes by
            accident, sometimes on purpose The point of using Lorem Ipsum is
            that it has a more-or-less normal distribution of letters, as
            opposed to using 'Content here, content here', making it look like
            readable English. Many desktop publishing packages and web page
            editors now use Lorem Ipsum as their default model text, and a
            search for 'lorem ipsum' will uncover many web sites still in their
            infancy. Various versions have evolved over the years, sometimes by
            accident, sometimes on purpose The point of using Lorem Ipsum is
            that it has a more-or-less normal distribution of letters, as
            opposed to using 'Content here, content here', making it look like
            readable English. Many desktop publishing packages and web page
            editors now use Lorem Ipsum as their default model text, and a
            search for 'lorem ipsum' will uncover many web sites still in their
            infancy. Various versions have evolved over the years, sometimes by
            accident, sometimes on purpose
          </Typography>
          <Box className={classes.map}>
            <iframe
              width="100%"
              height="350"
              src="https://www.youtube.com/embed/wER6WVNEEwo"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </Box>
        </Box>

        {/* Images */}
        <Box className={classes.rowBottom}>
          <Box className={classes.imageContainer}>
            <img
              className={classes.sImg}
              src="/images/compress/service1.jpg"
              alt=""
            />
          </Box>
          <Box className={classes.imageContainer}>
            <img
              className={classes.sImg}
              src="/images/compress/service2.jpg"
              alt=""
            />
          </Box>
          <Box className={classes.imageContainer}>
            <img
              className={classes.sImg}
              src="/images/compress/service2.jpg"
              alt=""
            />
          </Box>
          <Box className={classes.imageContainer}>
            <img
              className={classes.sImg}
              src="/images/compress/service4.jpg"
              alt=""
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Services;

function Service({ title, des }) {
  const classes = useStyles();

  return (
    <Box className={classes.serviceBox}>
      <Box>
        <img
          className={classes.checkIcon}
          src="/images/icons/check-icn.png"
          alt=""
        />
      </Box>
      <Box>
        <Typography variant="h5" className={classes.serviceTitle}>
          {title}
        </Typography>
        <p className="ft18">{des}</p>
      </Box>
    </Box>
  );
}
