import React, { useState } from "react";
import axios from "axios";

import WeatherInfo from "./Weatherinfo";
import "./App.css";
export default function Weather(props) {
  const [city, seyCity] = useState(props.defaultCity);
  const [weatherDate, setWeatherDate] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherDate({
      ready: true,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      wind: response.data.wind.speed,
      city: response.data.name,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
    });
  }

  function search() {
    const apiKey = "3b6b66f380d0f8c6b4889aa8f7d07c34";

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3b6b66f380d0f8c6b4889aa8f7d07c34&units=metric`;
    axios.get(url).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    seyCity(event.target.value);
  }

  if (weatherDate.ready) {
    return (
      <div className="conteiner">
        <div className="weather-app">
          <WeatherInfo data={weatherDate} />
          <div className="input-group mb-3">
            <form className="search-form" onSubmit={handleSubmit}>
              <div className="row">
                <div className="col"></div>
                <div className="col-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your city"
                    aria-label="City"
                    aria-describedby="button-addon2"
                    onChange={handleCityChange}
                  />
                </div>
                <div className="col-2">
                  <button className="btn btn-outline-secondary" type="submit">
                    Search
                  </button>
                </div>
                <div className="col-2">
                  <button className="btn btn-success ">
                    Current location{" "}
                  </button>
                </div>
                <div className="col"></div>
              </div>
            </form>
          </div>
        </div>
        <p className="link mt-5">
          <small>
            <a
              href="https://github.com/OlesiaOk/weatherapp"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Open source code{" "}
            </a>{" "}
            by Olesia Okhrimenko
          </small>
        </p>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
