import axios from "axios";
import s from "../modules/Infoblock.module.scss";
import { useEffect, useState } from "react";
import Temperature from "./Temperature";
import Details from "./Details";
import Search from "./Search";

const Infoblock = () => {
  const [weather, setWeather] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(
          `http://api.weatherapi.com/v1/current.json?key=e87949e9799246fd969134321232106&q=Krakow,Poland&aqi=no`
        );
        setWeather(res.data);
        console.log("Response", res);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    console.log("Weather", weather);
  }, [weather]);

  return (
    <div className={s.infoblock}>
      <Temperature weather={weather} />
      <Search />
      <Details weather={weather} />
    </div>
  );
};

export default Infoblock;
