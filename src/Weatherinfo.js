import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="Weather-info">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
      </ul>
      <h2>
        <WeatherTemperature celsius={props.data.temperature} />

        <img src={props.data.icon} alt="Clear" />
      </h2>
      <h3>
        <ul>
          <li>Humidity: {props.data.humidity} %</li>
          <li>Wind:{props.data.wind} km/h</li>
          <li className="text-capitalize">
            <span>{props.data.description}</span>
          </li>
        </ul>
      </h3>
    </div>
  );
}
