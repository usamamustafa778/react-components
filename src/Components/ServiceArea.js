import React,{useParams, useEffect} from "react";
import { Link } from "react-router-dom";
import axios from "axios";


function ServiceArea({ apiData2, setApiData2, loading, setLoading }) {
  const { state, city } = useParams();
  console.log("name is :", state, city);

  useEffect(() => {
    const handleClick = async () => {
      //api get call
      try {
        setLoading(true);
        const response = await axios.get(
          `http://api.3utilities.com:86/cities?state=${state.replace(
            /\-/g,
            " "
          )}&token=MucabF_PcS_KcjU_ucabHPc`
        );

        setApiData2(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    handleClick(state);
  }, []);

  const { cities } = apiData2;

  console.log(loading);

  return (
    <>
      {cities
        ? cities.map((city, i) => (
            <Link to={`/${state}/${city.replace(/\s/g, "-")}`}>
              <li>{city}</li>
            </Link>
          ))
        : null}
    </>
  );
}

export default ServiceArea;
