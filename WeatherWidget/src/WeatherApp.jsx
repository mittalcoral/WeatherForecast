import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react";

function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city : 'Jaipur',
       temp: 23,
          tempMin: 12,
          tempMax: 5,
          humidity: 'fsfhb',
        weather: 'addv',
    });
    
    let updateInfo = (result)=>{
        setWeatherInfo(result);
    }
  return (
    <>
    <h1>Weather App</h1>
    <SearchBox updateInfo={updateInfo}/>
    <br /><br />
    <InfoBox infoBox = {weatherInfo}/>
    </>
  )
}

export default WeatherApp