import React, { useState } from 'react'
import './WeatherApp.css'
import search_icon from '../Assets/search.png'
import clear_icon from '../Assets/clear.png'
import drizzle_icon from '../Assets/drizzle.png'
import humidity_icon from '../Assets/humidity.png'
import snow_icon from '../Assets/snow.png'
import wind_icon from '../Assets/wind.png'
import cloud_icon from '../Assets/cloud.png'
import rain_icon from '../Assets/rain.png'

export default function WeatherApp() {

  let api_Key = "Keep your api here";

  const [humidity, setHumidity] = useState('79');
  const [windSpeed, setWindSpeed] = useState('3.29');
  const [temperature, setTemperature] = useState('26.58');
  const [location, setLocation] = useState('Sri City');
  const [Icon,setIcon] = useState(cloud_icon)

  const search = async () => {

    const element = document.querySelector(".cityInput");
    if (!element || element.value === "") {
      return 0;
    }

    let url = `https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=${api_Key}&q=${element.value}&units=Metric`

    
    try {
      let response = await fetch(url);
      if (!response.ok) {
        throw new Error(`API request failed with status: ${response.status}`);
      }

      let data = await response.json();
      if (data) {
        setHumidity(data.main.humidity);
        setWindSpeed(data.wind.speed);
        setTemperature(data.main.temp);
        setLocation(data.name);

        if (data.weather.icon === '01d' || data.weather.icon === '01n'){
          setIcon(clear_icon)
        }
        else if(data.weather.icon === '02d' || data.weather.icon === '02n'){
          setIcon(cloud_icon)
        }
        else if(data.weather.icon === '03d' || data.weather.icon === '03n'){
          setIcon(drizzle_icon)
        }
        else if(data.weather.icon === '04d' || data.weather.icon === '04n'){
          setIcon(drizzle_icon)
        }
        else if(data.weather.icon === '09d' || data.weather.icon === '09n'){
          setIcon(rain_icon)
        }
        else if(data.weather.icon === '10d' || data.weather.icon === '10n'){
          setIcon(rain_icon)
        }
        else if(data.weather.icon === '13d' || data.weather.icon === '13n'){
          setIcon(snow_icon)
        }
        else{
          setIcon(clear_icon)
        }

      } else {
        throw new Error('API response data is empty.');
      }
    } catch (error) {
      alert("Enter a valid location")
      console.error("Error fetching weather data:", error);
    }

  }


  return (
    <>
      <h1 className='heading'>Weather App</h1>
      <div className='container'>
        <div className="top-bar">
          <input type="text" className='cityInput' placeholder='Enter a City' />
          <div className="search-icon" onClick={search}>
            <img src={search_icon} alt="search icon" />
          </div>
        </div>
        <div className="weather-image">
          <img src={Icon} alt="cloud_icon" />
        </div>
        <div className="weather-temp">{temperature}°C</div>
        <div className="weather-location">{location}</div>
        <div className="data-container">
          <div className="element">
            <img src={humidity_icon} alt="humidity_icon" className='icon' />
            <div className="data">
              <div className="humidity-percent">{humidity}</div>
              <div className="text">Humidity</div>
            </div>
          </div>

          <div className="element">
            <img src={wind_icon} alt="" className='icon' />
            <div className="data">
              <div className="wind-speed">{windSpeed} km/h</div>
              <div className="text">Wind Speed</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
