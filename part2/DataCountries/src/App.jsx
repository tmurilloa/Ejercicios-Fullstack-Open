import { useEffect, useState } from 'react'
import countryService from './services/countryServices'
import {CountrieForm, ListCountries, InfoCountry} from './components/Country'
import { WeatherInfo } from './components/Weather'

function App() {

  const [AllCountries, setAllCountries] = useState([])
  const [weather, setWeather] = useState(null)

  const [valueCountry, setValueCountry] = useState('')
  const [mostrarCountry, setMostrarCountry] = useState(false)
  const [countrySelected, setCountrySeleceted] = useState({})
  
  const CountryFilter = (countryName) =>{
    return(countryName.toLowerCase().includes(valueCountry.toLowerCase()))
  }
  
  const FilteredCountries = valueCountry === '' 
    ? AllCountries
    : AllCountries.filter(
      (country) => CountryFilter(country.name.common)
    )

  const handlerCountryChange = (event) =>{
    setValueCountry(event.target.value)
  }
  const handlerClickShow = (country) =>{
    setMostrarCountry(true)
    setCountrySeleceted(country)
  }
  const hookCountries = () => {
    countryService.getAll()
      .then((initialCountries) => setAllCountries(initialCountries))
  }
  useEffect(hookCountries, [])

  return (
    <>
    <CountrieForm value={valueCountry} 
      onChange={handlerCountryChange}/>
    <ListCountries countries={FilteredCountries} handleClick={handlerClickShow}/>
    {mostrarCountry && <InfoCountry country={countrySelected}/>}
    {mostrarCountry && <WeatherInfo 
      country={countrySelected}
      weather={weather}
      setWeather={setWeather}
      />}
    </>
    
  )
}

export default App
