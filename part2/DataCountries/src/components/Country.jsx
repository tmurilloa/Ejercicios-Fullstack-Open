
const CountrieForm = ({value, onChange}) => {
    return(
      <form>
        <p>Find Countries</p>
        <input type="text" value={value} onChange={onChange}/>
      </form>
    )
}
const ListCountries = ({countries, handleClick}) => {
    if (countries.length < 10){
      return(
        <>
        {
        countries.map(
          country => {
            return(
            <div key={country.name.common}>
              {country.name.common} 
              <button onClick={() => handleClick(country)}>show</button>
            </div>
            )
          })
        }
        </>
      )
    }else{
      return(
        <p>Too many matches, specify another filter</p>
      )
    }

}
const InfoCountry = ({country}) => {
    const countrySelected = country
    const pngURL = countrySelected.flags.png
    return(
        <>
        <h1>{countrySelected.name.common}</h1>
        <p>{countrySelected.capital.join(', ')}</p>
        <p>{`Area ${countrySelected.area}`}</p>
        <h2>Languages</h2>
        <ul>
            {Object.values(countrySelected.languages).map(
            (value) => {
                return(
                <li key={value}>{value}</li>
                )
            }
            )}
        </ul>
        <img src={pngURL} />
        </>
    )
}

export{
    CountrieForm,
    ListCountries,
    InfoCountry
}