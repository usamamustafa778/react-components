import {
  Box,
  Container,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { fontWeight } from "@mui/system";
import React from "react";
import CallButton from "./CallButton";

const useStyles = makeStyles((theme) => ({
  relatedTags: {
    backgroundImage:
      "linear-gradient(rgba(0, 0, 0, 0.564), rgba(0, 0, 0, 0.527)),url(/images/tags-bg.jpg)",
    display: "flex",
    justifyContent: "center",
    flexDirection:"column",
    padding: "50px 10px",
    textAlign: "center",
    backgroundPosition: "center",
    backgroundSize: "cover",
    [theme.breakpoints.up("sm")]:{
      flexDirection:"row",
    }
  },
  relatedTagsContainer: {
    backgroundColor: "#fff",
    padding: 30,
    borderRadius: 50,
    maxWidth: 800,
  },
  heading: {
    textAlign: "center",
    marginTop: 30,
    fontWeight: 600,
  },
  reltedTagsList: {
    display: "flex",
    marginTop: 20,
  },
  footer: {
    backgroundColor: "#151515",
    padding: "50px 10px",
    color: "#ffff",
  },
  footerRow: {
    display: "grid",
    gridTemplateColumns: "1fr",
    [theme.breakpoints.up("sm")]:{
      gridTemplateColumns:"repeat(3, 1fr)",
    }
  },
  footerBox:{
      padding:10,
      [theme.breakpoints.up("sm")]:{
        padding:20
      }
  },
  cardsImg:{
      width:"100%"
  }
}));

function Footer() {
  const classes = useStyles();
  return (
    <Box>
      <Box className={classes.relatedTags}>
        <Container className={classes.relatedTagsContainer}>
          <Typography className={classes.heading} variant="h4">
            Related Tags
          </Typography>
          <List className={classes.reltedTagsList}>
            <ListItem>Test Alturas, CA</ListItem>
            <ListItem>Test2 Alturas, CA</ListItem>
          </List>
        </Container>
      </Box>
      <Box className={classes.footer}>
        <Container className={classes.footerRow}>
          <Box className={classes.footerBox}>
            <Typography variant="h3">5 Star Review!</Typography>
            <img src="/images/icons/starY.png" alt="" />
            <Typography>
              Everyday Locksmith provides a 24/7 locksmith services. We are
              licensed and insured, and all of our locksmiths are up to date
              with the latest security technology.
            </Typography>
          </Box>
          <Box className={classes.footerBox}>
          <Typography variant="h3">We Accept All Major credit Cards!</Typography>
           <br />
            <img src="/images/pay-cards.png" className={classes.cardsImg} alt="" />
          </Box>
          <Box className={classes.footerBox}>
              <CallButton/>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default Footer;
