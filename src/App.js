import Card from "./Components/Card";
import Input from "./Components/Input";
import Button from "./Components/Button";
import { useWeather } from "./Context/Wheather";
import { useEffect } from "react";
import "./App.css";


function App() {
  const weather=useWeather();
  console.log(weather);

useEffect(() => {
weather.fetchLocation();
}, [])

  return (
    <div className="App">
      <h3>weather forecast app</h3>
      <Input />
      <Button onClick={weather.fetchData} value="Search" />
      <Card />
     
    </div>
  );
}

export default App;
