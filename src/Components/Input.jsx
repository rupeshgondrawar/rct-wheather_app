import React from "react";
import { useWeather } from "../Context/Wheather";

function Input(props) {
  const Weather=useWeather();
   console.log(Weather);
  return (
    <input
      className="input-field"
      placeholder="Search here"
      value={Weather.searchcity}
      onChange={(e)=>Weather.setSearchCity(e.target.value)}
    />
  );
}

export default Input;
