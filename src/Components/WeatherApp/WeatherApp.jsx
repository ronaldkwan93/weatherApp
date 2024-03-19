import React from 'react'
import './WeatherApp.css'

import search_icon from '../Assets/search.png'
import clear_icon from '../Assets/clear.png'
import cloud_icon from '../Assets/cloud.png'
import drizzle_icon from '../Assets/drizzle.png'
import rain_icon from '../Assets/rain.png'
import snow_icon from '../Assets/snow.png'
import wind_icon from '../Assets/wind.png'
import humidity_icon from '../Assets/humidity.png'

const WeatherApp = () => {

    let api_key = "ba11d5e609ce0fccf94514f41fbf5842"

    const search= () => {
        const element = document.getElementsByClassName("cityInput")
        if(element[0].value === "") 
        {
            return 0;
        }
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`
    }

  return (
    <div className='container'>
      <div className="top-bar">
        <input type="text" className="cityInput"placeholder='search'/>
        <div className="search-icon" onClick={() => {search()}}>
            <img src={search_icon} alt="" />
        </div>
      </div>
      <div className="weather-image">
            <img src={cloud_icon} alt="" />
        </div>
        <div className="weather-temp">24°C</div>
        <div className="weather-location">London</div>
        <div className="data-container">
            <div className="element">
                <img src={humidity_icon} alt="" className="icon" />
                <div className="data">
                    <div className="humidity-percent">64%</div>
                    <div className="text">Humidity</div>
                </div>
            </div>
            <div className="element">
                <img src={wind_icon} alt="" className="icon" />
                <div className="data">
                    <div className="humidity-percent">18km</div>
                    <div className="text">Wind</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WeatherApp;
