import PropTypes from "prop-types";
import KEY from "./key.js";
import Card from "./components/Card.jsx";
import WheatherForm from "./components/wheatherForm.jsx";
import { useState } from "react";
function App() {
  const [datos, setDatos] = useState({
    weather: 0,
    weatherMin: 0,
    weatherMax: 0,
    lon: 0.0,
    lat: 0.0,
    name: "",
    windSpeed: 0,
    humidity: 0,
    main: "",
    description: "",
    icon: "",
  });
  const getWeather = async (e) => {
    e.preventDefault();
    const { ciudad, pais } = e.target.elements;
    const ciudadValor = ciudad.value;
    const paisValor = pais.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudadValor},${paisValor}&units=metric&appid=${KEY}&lang=es`;
    fetch(url)
      .then((res) => res.json())
      .then((data) =>
        setDatos({
          weather: parseInt(data.main.temp),
          weatherMin: parseFloat(data.main.temp_min),
          weatherMax: parseFloat(data.main.temp_max),
          lon: parseFloat(data.coord.lon),
          lat: parseFloat(data.coord.lat),
          name: data.name,
          windSpeed: parseFloat(data.wind.speed),
          humidity: parseFloat(data.main.humidity),
          main: data.weather[0].main,
          description: data.weather[0].description,
          icon: data.weather[0].icon,
        })
      )
      .catch((err) => console.error("Error fetching weather data:", err));
  };
  const {
    weather,
    weatherMax,
    weatherMin,
    lon,
    lat,
    name,
    windSpeed,
    humidity,
    main,
    description,
    icon,
  } = datos;
  return (
    <>
      <header className="bg-emerald-500 py-4">
        <h1 className="text-white text-center text-2xl font-bold">WeatherApp</h1>
      </header>
      <main className="container mx-auto">
        <WheatherForm getWeather={getWeather} />
        <Card
          temp={weather}
          tempMax={weatherMax}
          tempMin={weatherMin}
          lon={lon}
          lat={lat}
          name={name}
          windSpeed={windSpeed}
          humidity={humidity}
          main={main}
          description={description}
          icon={icon}
        />
      </main>
    </>
  );
}

Card.propTypes = {
  temp: PropTypes.number.isRequired,
  tempMax: PropTypes.number.isRequired,
  tempMin: PropTypes.number.isRequired,
  lon: PropTypes.number.isRequired,
  lat: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  windSpeed: PropTypes.number.isRequired,
  humidity: PropTypes.number.isRequired,
  main: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default App;
