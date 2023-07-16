import React from "react";
import { useWeather } from "../Context/Wheather";

function Card() {
  const weather = useWeather();
  return (
    <div className="card">
      <img src={weather.data?.current?.condition?.icon} />
      <h2>{weather.data?.current?.temp_c}°C</h2>
      <h4>
        {weather.data?.location?.name},{weather.data?.location?.region}{" "}
        {weather.data?.location?.country}
      </h4>
    </div>
  );
}

export default Card;
