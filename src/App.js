import { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import CTA from "./Components/CTA";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Services from "./Components/Services";
import Work from "./Components/Work";
import axios from "axios";
import ServiceArea from "./Components/ServiceArea";
import ZipCodes from "./Components/ZipCodes";
import { Container, makeStyles, Box, Typography } from "@material-ui/core";
import DocumentMeta from "react-document-meta";


const useStyles = makeStyles({
  apiContainer:{
    padding:"50px 10px"
  }
})

function App() {
  const [apiData, setApiData] = useState([]);
  const [apiData2, setApiData2] = useState([]);
  const [apiData3, setApiData3] = useState([]);
  const [loading, setLoading] = useState(false);
  const [stateName, setStateName] = useState("Towing Us");
  let [color, setColor] = useState("#ffffff");

  useEffect(() => {
    const apiDatas = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "http://api.3utilities.com:86/states?token=MucabF_PcS_KcjU_ucabHPc"
        );
        setApiData(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    apiDatas();
  }, []);

  const { keyword, states } = apiData;
  const { zips } = apiData3;

  var title = `Towing USA - ${stateName}`;
  var description = `We are in - ${stateName}`;

  const meta = {
    title: title,
    description: description,
    canonical: "http://example.com/path/to/page",
    meta: {
      charset: "utf-8",
      name: {
        keywords: `${keyword}`,
      },
    },
  };

  const classes = useStyles();

  return (
    <div className="App">
      <Hero />
      <Work />
      <Services />
      <CTA />
      <DocumentMeta {...meta} />
      <Box>
        <Routes>
          <Route
            path="/"
            element={
              <Container className={classes.apiContainer}>
                <Typography className={classes.heading} variant="h4">Areas We Serve</Typography>
                {states
                  ? states.map((state, i) => (
                      <Link
                        className="item-list"
                        key={i}
                        onClick={() => {
                          setStateName(state);
                        }}
                        to={`/${state.replace(/\s/g, "-")}`}
                      >
                        <li>{state}</li>
                      </Link>
                    ))
                  : null}
              </Container>
            }
          />{" "}
          <Route
          path="/:state"
          element={
            <ServiceArea
              loading={loading}
              setLoading={setLoading}
              setApiData2={setApiData2}
              apiData2={apiData2}
            />
          }
        ></Route>
        <Route
          path="/:state/:city"
          element={
            <>
              <ZipCodes
                zips={zips}
                loading={loading}
                setLoading={setLoading}
                apiData3={apiData3}
                setApiData3={setApiData3}
              />
            </>
          }
        ></Route>
        </Routes>
      </Box>
      <Footer />
    </div>
  );
}

export default App;
