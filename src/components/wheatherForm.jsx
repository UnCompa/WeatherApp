export default function wheatherForm({getWeather}) {
  return (
        <form onSubmit={getWeather} className="h-52 w-full [display:flex] [flex-direction:column] mt-4 bg-transparent border-4 border-gray-200 p-6 rounded-lg">
          <label className="pl-4 py-2 text-white font-bold">Ciudad:</label>
          <input className="p-2 h-8 mx-4 bg-transparent border-2 border-white outline-2 font-semibold text-gray-100 placeholder:text-gray-100 outline-blue-500 focus:bg-gray-100 focus:text-black focus:placeholder:text-black transition-colors" type="text" name="ciudad" autoFocus placeholder="Ingrese una ciudad: Londres"/>
          <p className="pl-4 pt-2 text-gray-50">
          Usando:
          <a className="bg-clip-text text-transparent bg-gradient-to-r from-orange-300 to-yellow-300 hover:from-orange-500 hover:to-yellow-500 font-bold pl-2" href="https://openweathermap.org">OpenWeatherAPi</a></p>
          <button type="submit" className="rounded border-2 border-blue-500 bg-blue-900/25 hover:bg-blue-500 font-bold text-white m-4 py-2 transition-colors">Buscar</button>
        </form>
  )
}
