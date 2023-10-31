import React from 'react'
import './WeatherApp.css'
import search_icon from '../Assets/search.png'
// import clear_icon from '../Assets/clear.png'
// import drizzle_icon from '../Assets/drizzle.png'
import humidity_icon from '../Assets/humidity.png'
// import snow_icon from '../Assets/snow.png'
import wind_icon from '../Assets/wind.png'
import cloud_icon from '../Assets/cloud.png'
// import rain_icon from '../Assets/rain.png'

export default function WeatherApp() {
  return (
    <div className='container'>
      <div className="top-bar">
        <input type="text" className='cityInput' placeholder='search'/>
        <div className="search-icon">
          <img src={search_icon} alt="search icon" />
        </div>
      </div>
      <div className="weather-image">
        <img src={cloud_icon} alt="cloud_icon" />
      </div>
      <div className="weather-temp">24c</div>
      <div className="weather-location">London</div>
      <div className="data-container">
        <div className="element">
          <img src={humidity_icon} alt="humidity_icon" className='icon'/>
          <div className="data">
            <div className="humidity-percent">64%</div>
            <div className="text">Humidity</div>
          </div>
        </div>
      </div>
      <div className="element">
        <img src={wind_icon} alt="" className='icon'/>
        <div className="data">
          <div className="wind-speed">18 km/h</div>
          <div className="text">Wind Speed</div>
        </div>
      </div>
    </div>
  )
}
