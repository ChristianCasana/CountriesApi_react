import React from 'react'

const Countries = ({ country }) => {
  return (
    <article className='card'>
      <img src={country.flags.svg} alt="" />
      <h2>Country: {country.name.common}</h2>
      <ul className='card_list'>
        <li><span className='card_span'>Capital: </span>{country.capital[0]}</li>
        <li><span className='card_span'>Habitantes: </span>{country.population}</li>
        <li><span className='card_span'>Continente: </span>{country.continents[0]}</li>
        <li><span className='card_span'>Area: </span>{country.area}</li>
      </ul>
    </article>
  )
}

export default Countries