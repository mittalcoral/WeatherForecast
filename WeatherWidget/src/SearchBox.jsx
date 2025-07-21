import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

function SearchBox({updateInfo}) {
    const [city, setCity] = useState("");
     const [error, setError] = useState(false);
    const API_URL = "http://api.openweathermap.org/data/2.5/weather";
    const API_KEY="ef03c45da8b2f99fc3d41af3425c6a66";

    let getWeatherInfo = async () =>{
        try{
          let res = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}`)
        let jsonRes = await res.json();
        console.log(jsonRes);
        let result = {
          city: city,
          temp: jsonRes.main.temp,
          tempMin: jsonRes.main.temp_min,
          tempMax: jsonRes.main.temp_max,
          humidity: jsonRes.main.humidity,
          feelsLike : jsonRes.main.feels_like,
          weather: jsonRes.weather[0].description,
        };
        console.log(result);
        return result;
        }catch(err){
         throw err;
        }
    }


    let handleChange = (event) =>{
        setCity(event.target.value);
    }

    let handleSubmit =async (event) => {
       try{
         event.preventDefault();
        console.log(city);
        setCity("");
        let newInfo = await getWeatherInfo();
        updateInfo(newInfo);
       }catch(err){
        setError(true);
       }
    }


  return (
    <>
    <h3>Search any city name!</h3>
   <form onSubmit={handleSubmit}>
     <TextField id="outlined-basic" label="City Name" variant="outlined" value ={city} onChange={handleChange} />
    <br /> <br />
    <Button variant="contained" type='submit'>Search City</Button>
   {error && <p style={{color: "red"}}>No such place exists!</p>}
   </form>
    </>
  )
}

export default SearchBox