import axios from 'axios'
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY
const BaseURL = 'https://api.openweathermap.org/data/2.5'

const getWeatherByCity = (city) => {
    const request = axios.get(`${BaseURL}/weather`,{params: {
        q: city,
        appid: API_KEY,
        units: 'metric',
        lang: 'es'
    }})
    return request.then(response => response.data)
}


export default{
    getWeatherByCity
}