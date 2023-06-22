import axios from "axios";
import s from "../modules/Infoblock.module.scss";
import { useContext, useEffect, useState } from "react";
import Temperature from "./Temperature";
import Details from "./Details";
import Search from "./Search";
import { Context } from "../context/Context";

const Infoblock = () => {
  
  useEffect(() => {
    getData();
  }, []);

  const contexData = useContext(Context);

  if (!contexData) {
    return null;
  }
  const { getData, weather } = contexData;

  return (
    <div className={s.infoblock}>
      <Temperature weather={weather} />
      <Search />
      <Details weather={weather} />
    </div>
  );
};

export default Infoblock;
