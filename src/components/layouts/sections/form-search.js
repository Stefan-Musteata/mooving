import React from 'react'
import close from '../../img/close.png'

const FromSearch = ({searchTerm, clearInput, handleChange}) => {
  return (
    <div className="search">
      <input type="text" className="search-input" value={searchTerm} onChange={handleChange} placeholder="Enter Address, Neighborhood, City of Post Code..." />
      {searchTerm.length > 0 &&
        <button type="button" className="close-button" onClick={clearInput}>
          <img src={close} alt="" />
        </button>
      }
      <button type="button" className="search-button">
        <i className="fa fa-search"></i> <span>SEARCH</span>
      </button>
    </div>
  )
}

export default FromSearch
