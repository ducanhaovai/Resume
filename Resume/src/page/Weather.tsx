import React, { useEffect, useState } from "react";
import "../assets/CSS/weather.css";

const Weather: React.FC = () => {
  const [currCity] = useState("Ha Noi");
  const [units] = useState("metric");

  const getWeather = () => {
    const API_KEY = "64f60853740a1ee3ba20d0fb595c97d5";

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${currCity}&appid=${API_KEY}&units=${units}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        document.querySelector(".weather__city")!.innerHTML = `${
          data.name
        }, ${convertCountryCode(data.sys.country)}`;
        document.querySelector(".weather__datetime")!.innerHTML =
          convertTimeStamp(data.dt, data.timezone);
        document.querySelector(
          ".weather__forecast"
        )!.innerHTML = `<p>${data.weather[0].main}`;
        document.querySelector(
          ".weather__temperature"
        )!.innerHTML = `${data.main.temp.toFixed()}&#176`;
        document.querySelector(
          ".weather__icon"
        )!.innerHTML = `<img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png" />`;
        document.querySelector(
          ".weather__minmax"
        )!.innerHTML = `<p>Min: ${data.main.temp_min.toFixed()}&#176</p><p>Max: ${data.main.temp_max.toFixed()}&#176</p>`;
        document.querySelector(
          ".weather__realfeel"
        )!.innerHTML = `${data.main.feels_like.toFixed()}&#176`;
        document.querySelector(
          ".weather__humidity"
        )!.innerHTML = `${data.main.humidity}%`;
        document.querySelector(".weather__wind")!.innerHTML = `${
          data.wind.speed
        } ${units === "imperial" ? "mph" : "m/s"}`;
        document.querySelector(
          ".weather__pressure"
        )!.innerHTML = `${data.main.pressure} hPa`;
      });
  };

  useEffect(() => {
    getWeather();
  }, []);

  const convertTimeStamp = (timestamp: number, timezone: number): string => {
    const convertTimezone = timezone / 3600;

    const date = new Date(timestamp * 1000);

    const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      timeZone: `Etc/GMT${convertTimezone >= 0 ? "-" : "+"}${Math.abs(
        convertTimezone
      )}`,
      hour12: true,
    };

    return date.toLocaleString("en-US", options);
  };

  const convertCountryCode = (country: string): string => {
    const regionNames = new Intl.DisplayNames(["en"], { type: "region" });
    return regionNames.of(country) ?? "Unknown";
  };

  return (
    <div className="weather section" id="weather">
      <div className="row">
        <div className="container-app">
          <div className="weather__body">
            <h1 className="weather__city"></h1>
            <div className="weather__datetime"></div>
            <div className="weather__forecast"></div>
            <div className="weather__icon">
              <div className="image-wrapper">
                <img
                  src="http://openweathermap.org/img/wn/10d@4x.png"
                  alt="Weather Icon"
                />
              </div>
            </div>
            <p className="weather__temperature"></p>
            <div className="weather__minmax">
              <p>Min: </p>
              <p>Max: </p>
            </div>
          </div>

          <div className="weather__info">
            <div className="weather__card">
              <i className="fa-solid fa-temperature-full"></i>
              <div>
                <p>Real Feel</p>
                <p className="weather__realfeel"></p>
              </div>
            </div>
            <div className="weather__card">
              <i className="fa-solid fa-droplet"></i>
              <div>
                <p>Humidity</p>
                <p className="weather__humidity"></p>
              </div>
            </div>
            <div className="weather__card">
              <i className="fa-solid fa-wind"></i>
              <div>
                <p>Wind</p>
                <p className="weather__wind"></p>
              </div>
            </div>
            <div className="weather__card">
              <i className="fa-solid fa-gauge-high"></i>
              <div>
                <p>Pressure</p>
                <p className="weather__pressure"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
