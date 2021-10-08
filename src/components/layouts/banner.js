import React, { useState, useEffect } from "react"
import banner from '../img/banner.png'
import data from '../data/locations'
import { FromSearch, Autocomplete } from './sections'

const Banner = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  //useEffect search autocomplete
  useEffect(() => {
    const postalCode = data.filter(item => item.postalCode.includes(searchTerm) );
    const address = data.filter(item => item.address.toLowerCase().includes(searchTerm.toLowerCase()) );
    const concatArrays = [address, postalCode].flat()
    setSearchResults(concatArrays);
  }, [searchTerm])


  //Handle change input
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  }
  
  //onCLick and clear input data
  const clearInput = () => {
    setSearchTerm('')
  }

  //Click and put value in input
  const placeResultInput = (value) => {
    setSearchTerm(value)
  }

  return (
    <div className="banner" style={{  background: `linear-gradient( rgba(0, 0, 0, 0.2) 100%, rgba(0, 0, 0, 0.5)100%), url(${banner})` }}>
      <div className="container">
        <div className="block-text">
          <h1>
            Making moving simple
          </h1>
          <FromSearch searchTerm={searchTerm}  clearInput={clearInput} handleChange={handleChange} />
          <Autocomplete searchResults={searchResults} searchTerm={searchTerm} placeResultInput={placeResultInput}/>
        </div>
      </div>
    </div>
  )
}

export default Banner