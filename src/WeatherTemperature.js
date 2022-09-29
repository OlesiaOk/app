import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  if (unit === `celsius`) {
    return (
      <div>
        <span>{Math.round(props.celsius)}</span> ℃ |{" "}
        <a href="/" onClick={convertToFahrenheit}>
          ℉
        </a>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;

    return (
      <div>
        <span>{Math.round(fahrenheit)}</span>{" "}
        <a href="/" onClick={convertToCelsius}>
          ℃
        </a>{" "}
        | ℉
      </div>
    );
  }
}
