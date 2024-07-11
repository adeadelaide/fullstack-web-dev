import { useEffect, useState } from "react";
import api from "../services/api";

const Details = ({ country }) => {
  if (!country) {
    return <></>;
  }

  const [weather, setWeather] = useState(null);

  useEffect(() => {
    api
      .getWeather(country.capitalInfo.latlng[0], country.capitalInfo.latlng[1])
      .then((res) => setWeather(res));
  });

  return (
    <div>
      <h2>{country.name.common}</h2>
      <p>Capital: {country.capital[0]}</p>
      <p>Area: {country.area}</p>
      <p>Population: {country.population}</p>

      <h2>Languages spoken:</h2>
      <ul>
        {Object.values(country.languages).map((lang) => (
          <li key={lang}>{lang}</li>
        ))}
      </ul>

      <h2>Flag:</h2>
      <img src={country.flags.png} />

      {weather && (
        <div>
          <h2>Weather in {country.capital[0]}</h2>
          <p>temperature is {weather.current.temperature_2m} Celsius </p>
          <p>rain level is {weather.current.rain}mm </p>
          <p>
            max temperature is {Math.max(...weather.daily.temperature_2m_max)}{" "}
            Celsius{" "}
          </p>
          <p>
            min temperature is {Math.min(...weather.daily.temperature_2m_min)}{" "}
            Celsius{" "}
          </p>
        </div>
      )}
    </div>
  );
};

export default Details;
