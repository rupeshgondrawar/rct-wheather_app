import { createContext, useContext, useState } from "react";
import { getWheatherDataOfCity, getWheatherDataOfLocation } from "../Api";

const weatherContext = createContext(null);

// for reading the context
export const useWeather = () => {
  return useContext(weatherContext);
};

export const WeatherProvider = (props) => {
  const [data, setData] = useState(null);
  const [searchCity, setSearchCity] = useState(null);

  const fetchData = async () => {
    const response = await getWheatherDataOfCity(searchCity);
    setData(response);
  };

  const fetchLocation = () => {
   navigator.geolocation.getCurrentPosition((position) => {
      getWheatherDataOfLocation(
        position.coords.latitude,
        position.coords.longitude
      ).then((data)=>setData(data));
    });
  };

  return (
    <weatherContext.Provider
      value={{ data, searchCity, setSearchCity, fetchData ,fetchLocation}}
    >
      {props.children}
    </weatherContext.Provider>
  );
};
