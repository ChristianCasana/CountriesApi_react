import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import Countries from './components/Countries'

function App() {

  const [countries, setCountries] = useState()

  useEffect(() => {
    const URL = 'https://restcountries.com/v3.1/lang/spa'
    axios.get(URL)
      .then(res => setCountries(res.data))
      .catch(err => console.log(err))
  }, [])
  console.log(countries)

  return (
    <div className="App">
      <section className='card_container'>
        {
          countries?.map((country) => (
            < Countries
              key={country.name.official}
              country={country} />
          ))
        }
      </section>

    </div>
  )
}

export default App
