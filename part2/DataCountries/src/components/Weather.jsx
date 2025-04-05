import weatherService from '../services/weatherService'
import { useEffect } from 'react'

const WeatherInfo = ({country ,weather ,setWeather}) => {
    const capital = country.capital[0]
    const hookWeather = () => {
      weatherService.getWeatherByCity(capital)
        .then((infoCity) => setWeather(infoCity))
    }
    useEffect(hookWeather, [capital])
  
    if (!weather || !weather.main) return <p>Loading weather...</p>
    
    return (
      <>
        <h2>{`Weather in ${capital}`}</h2>
        <p>{`Temperature ${weather.main.temp} °C`}</p>
        <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="Weather icon" />
        <p>{`Wind ${weather.wind.speed} m/s`}</p>
      </>
    )
}

export{
    WeatherInfo
}