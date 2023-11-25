import PropTypes from "prop-types";
const Card = ({
  temp,
  tempMax,
  tempMin,
  lon,
  lat,
  name,
  windSpeed,
  humidity,
  main,
  description,
  icon,
}) => {
  let iconClima;
  if (icon === "01d") {
    iconClima = "/WeatherApp/animated/day.svg";
  } else if (icon === "01n") {
    iconClima = "/WeatherApp/animated/night.svg";
  } else if (icon === "02d") {
    iconClima = "/WeatherApp/animated/cloudy-day-1.svg";
  } else if (icon === "02n") {
    iconClima = "/WeatherApp/animated/cloudy-night-1.svg";
  } else if (icon === "04d") {
    iconClima = "/WeatherApp/animated/cloudy.svg";
  } else if (icon === "04n") {
    iconClima = "/WeatherApp/animated/cloudy-night-3.svg";
  } else if (icon === "09d") {
    iconClima = "/WeatherApp/animated/rainy-7.svg";
  } else if (icon === "09n") {
    iconClima = "/WeatherApp/animated/rainy-6.svg";
  } else if (icon === "10n") {
    iconClima = "/WeatherApp/animated/rainy-2.svg";
  } else if (icon === "10d") {
    iconClima = "/WeatherApp/animated/rainy-1.svg";
  } else if (icon === "11d") {
    iconClima = "/WeatherApp/animated/thunder.svg";
  } else if (icon === "11n") {
    iconClima = "/WeatherApp/animated/thunder.svg";
  } else if (icon === "13d") {
    iconClima = "/WeatherApp/animated/thunder.svg";
  } else if (icon === "13n") {
    iconClima = "/WeatherApp/animated/thunder.svg";
  } else if (icon === "50n") {
    iconClima = "/WeatherApp/animated/weather.svg";
  } else if (icon === "50d") {
    iconClima = "/WeatherApp/animated/weather.svg";
  } else {
    iconClima = `https://openweathermap.org/img/wn/${icon}@2x.png`;
  }

  return (
    <div className="bg-zinc-100 shadow-md p-4 rounded-lg my-6">
      {temp ? (
        <div className="grid grid-cols-1 md:grid-cols-2 place-items-center">
          <div>
            <div className="grid grid-cols-2 place-items-center">
              <img
                className="h-32 w-40 object-cover [filter:drop-shadow(0px_0px_15px_#0003)]"
                src={iconClima}
                alt="Imagen clima"
              />
              <div className="flex">
                <h2 className="text-5xl">{temp}</h2>
                <img className="h-8" src="/WeatherApp/celcius.svg" />
              </div>
            </div>
            <h3 className="text-3xl text-center font-mono font-bold">{name}</h3>
            <h4 className="text-xl text-center font-mono font-bold py-2">
              {main}
            </h4>
            <p className="text-base text-center font-mono font-normal py-2 capitalize">
              {description}
            </p>
          </div>
          <div className="flex [flex-direction:column] text-lg pt-4 w-full">
            <div className='flex w-full justify-around items-center py-2'>
              <div className="flex [flex-direction:column]">
                <img className="h-8" src="/WeatherApp/temperature-min.svg" />
                <span className="pr-2 text-lg font-bold text-sky-500">{tempMin}°</span>
              </div>
              <div className="flex [flex-direction:column]">
                <img className="h-8" src="/WeatherApp/temperature-max.svg" />
                <span className="pr-2 text-lg font-bold text-red-500">{tempMax}°</span>
              </div>
            </div>
            <div className='flex w-full justify-around items-center py-2'>
              <div className="flex [flex-direction:column] py-2">
                <img className="h-8" src="/WeatherApp/arrow-up.svg" />
                <span className="pr-2 text-lg font-bold text-gray-500">Latitud: {lat}</span>
              </div>
              <div className="flex [flex-direction:column] py-2">
                <img className="h-8" src="/WeatherApp/arrow-right.svg" />
                <span className="pr-2 text-lg font-bold text-gray-500">Longitud: {lon}</span>
              </div>
            </div>
            <div className='flex w-full justify-around items-center py-2'>
              <div className="flex [flex-direction:column] py-2">
                <img className="h-8" src="/WeatherApp/drop.svg" />
                <span className="text-lg font-bold text-blue-700">{humidity}%</span>
              </div>
              <div className="flex [flex-direction:column] py-2">
                <img className="h-8" src="/WeatherApp/wind.svg" />
                <span className="text-lg font-bold text-slate-900">{windSpeed}</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="h-full w-full grid place-content-center">
          <h2 className="text-2xl">No hay resultados</h2>
        </div>
      )}
    </div>
  );
};
{
  /* <p>{temp}</p>
<p>{tempMax}</p>
<p>{tempMin}</p>
<p>{lat}</p>
<p>{lon}</p>
<p>{name}</p>
<p>{windSpeed}</p>
<p>{humidity}</p>
<p>{main}</p>
<p>{description}</p> */
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

export default Card;
