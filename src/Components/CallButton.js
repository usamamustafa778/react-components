import { Box, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { Typography } from "@mui/material";
import React from "react";

const useStyles = makeStyles((theme) => ({
    callButton:{
        display:"flex",
        alignItems:"center",
        backgroundColor:"#ffc000",
        borderRadius:100,
        padding:"5px 30px",
        outline:"none",
        cursor:"pointer",
        transition:"0.15s",
        maxHeight:60,
        maxWidth:"250px",
        '&:hover': {
            boxShadow:"0px 40px 60px rgba(0, 0, 0, 0.591)"
         },
    },
    hIcon:{
        height:20,
    },
    ButtonText:{
        display:"flex",
        flexDirection:"column",
        marginLeft:10,
        color:"#000"
    }
}));

const CallButton = () => {

    const classes = useStyles();

  return (
      <Link className={classes.callButton} href="tel:310-594-5229" underline="none">
        <img className={classes.hIcon} src="/images/icons/ph-sm.png" alt="" />
        <Box className={classes.ButtonText}>
            <Typography>Click To Call</Typography>
            <Typography variant="h6">310-594-5229</Typography>
        </Box>
      </Link>
  );
}

export default CallButton;
