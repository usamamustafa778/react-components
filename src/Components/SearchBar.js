import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { Box, makeStyles, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  searchBar: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#ffff",
    justifyContent: "between",
    borderRadius: "100px",
    padding: 12,
    width: 300,
    marginTop: 20,
    color: "#000",
    [theme.breakpoints.up("lg")]: {
      width: 400,
    },
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
    width: 300,
    maxHeight: 250,
    position: "absolute",
    borderRadius: 20,
    textAlign: "left",
    backgroundColor: "#ffff",
    boxShadow: "#0009 0px 2px 10px",
    marginTop: 5,
    color: "#000",
    overflowX: "hidden",
    overflowY: "auto",
    [theme.breakpoints.up("lg")]: {
      width: 400,
    },
  },
  searchImg: {
    height: "60px",
    marginRight: 8,
    borderRadius: 5,
  },
  dataService: {
    color: "gray",
    fontSize: 12,
  },
  dataItem:{
    
  },
  dataLink: {
    color: "#000",
    textDecoration: "none",
    padding: "10px 20px",
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    borderBottom: "1px solid #f3f3f3",
    "&:hover": {
      backgroundColor: "#f3f3f3",
    },
  },
  CloseIcon: {
    cursor: "pointer",
  },
}));

function SearchBar({ placeholder, data }) {
  const url = "http://towing-api.3utilities.com:786/search?_sk=";
  const [search, setSearch] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const [time, setTimer] = useState(false);

  const callApi = () => {
    setInterval(() => {
      setTimer(true);
      axios.get(url + wordEntered).then((res) => {
        setSearch(res.data);
        console.log("Search");
        console.log(res.data);
      });
    }, 500);
  };

  const handleFilter = (event) => {
    callApi();
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = search.filter((value) => {
      return value.city_name.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  const classes = useStyles();

  return (
    <Box>
      <Box className={classes.searchBar}>
        <input
          className={classes.searchInput}
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        />
        <div className={classes.searchIcon}>
          {filteredData.length === 0 ? (
            <SearchIcon />
          ) : (
            <CloseIcon className={classes.CloseIcon} onClick={clearInput} />
          )}
        </div>
      </Box>
      {filteredData.length != 0 && (
        <Box className={classes.dataResult}>
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <Link className={classes.dataLink} to={value.city_route}>
                <img
                  className={classes.searchImg}
                  src="https://static.toiimg.com/thumb/msid-77416935,width-900,height-1200,resizemode-6.cms"
                  alt=""
                />
                <Box className={classes.dataItem}>
                  <Typography>
                    {value.state_name}, {value.city_name}
                  </Typography>
                  <Typography className={classes.dataService}>
                    {value.service_name}{" "}
                  </Typography>
                </Box>
              </Link>
            );
          })}
        </Box>
      )}
    </Box>
  );
}

export default SearchBar;
