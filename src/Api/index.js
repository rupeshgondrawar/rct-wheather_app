const BaseUrl =
  "https://api.weatherapi.com/v1/current.json?key=9e402758553d4bb7918194815231004";

export const getWheatherDataOfCity = async (city) => {
  const response = await fetch(`${BaseUrl}&q=${city}&aqi=yes`);
  return await response.json();
};
export const getWheatherDataOfLocation = async (lat,lon) => {
  const response = await fetch(`${BaseUrl}&q=${lat},${lon}&aqi=yes`);
  return await response.json();
};
