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
  return (
    <div className="bg-white shadow-md border border-gray-200 p-4 rounded-lg my-4">
      {temp ? (
        <div className="grid grid-cols-1 md:grid-cols-2 place-items-center">
          <div>
            <div className="grid grid-cols-2 place-items-center">
              <img
                className="object-contain [filter:drop-shadow(0px_0px_10px_black)]"
                src={`https://openweathermap.org/img/wn/${icon}@4x.png`}
                alt="Imagen clima"
              />
              <h2 className="text-5xl">{temp}°</h2>
            </div>
            <h3 className="text-3xl text-center font-mono font-bold">{name}</h3>
            <h4 className="text-xl text-center font-mono font-bold py-2">
              {main}
            </h4>
            <p className="text-base text-center font-mono font-normal py-2 capitalize">
              {description}
            </p>
          </div>
          <div className="flex [flex-direction:column] text-lg">
            <span>Temperatura minima: {tempMin}</span>
            <span>Temperatura maxima: {tempMax}</span>
              <span>Latitud: {lat}</span>
              <span>Longitud: {lon}</span>
            <span>Humedad: {humidity}%</span>
          <span>Viento: {windSpeed}%</span>
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
