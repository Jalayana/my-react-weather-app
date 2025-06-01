import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      city: response.data.city,
      humidity: response.data.temperature.humidity,
      description: response.data.condition.description,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/cloudy.png",
      date: response.data.time,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        {
          <form>
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  placeholder="Please enter a city"
                  className="form-control"
                  autoFocus="on"
                />
              </div>
              <div className="col-3">
                <button className="btn btn-primary">Search</button>
              </div>
            </div>
          </form>
        }
        <h1>{weatherData.city}</h1>
        <ul>
          <li>{weatherData.date}</li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <div className="weather-temperature">
              <img src={weatherData.iconUrl} alt={weatherData.description} />
              <span className="temperature-celsius">
                {Math.round(weatherData.temperature)}
              </span>
              <span className="unit-metric">°C</span>
            </div>
          </div>

          <div className="col-6">
            <ul>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {Math.round(weatherData.wind)}km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "036afccb5b3e1756f153fo40e081f7t7";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
}
