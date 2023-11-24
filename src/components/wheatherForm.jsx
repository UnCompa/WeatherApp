export default function wheatherForm({getWeather}) {
  return (
        <form onSubmit={getWeather} className="h-62 w-full [display:flex] [flex-direction:column] mt-4 bg-gray-100 border border-gray-300 p-6 rounded-lg">
          <label className="pl-4 py-2">Ciudad:</label>
          <input className="pl-2 h-8 mx-4 outline-2 outline-blue-500" type="text" name="ciudad" autoFocus placeholder="Ingrese una ciudad: Londres"/>
          <label className="pl-4 py-2">Pais:</label>
          <input className="pl-2 h-8 mx-4 outline-2 outline-blue-500" type="text" name="pais" placeholder="Ingrese un pais: Colombia"/>
          <p className="pl-4 pt-2 text-gray-500">
          Usando 
          <a className="text-gray-700 hover:text-gray-950 underline pl-2" href="https://openweathermap.org">OpenWeatherAPi</a></p>
          <button type="submit" className="bg-blue-500 text-white m-4 py-2">Buscar</button>
        </form>
  )
}
