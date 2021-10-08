import React, {Fragment} from 'react'

const Autocomplete = ({searchResults, searchTerm, placeResultInput}) => {
  return (
    <Fragment>
      {searchTerm.length > 0  && searchResults.length !== 0 && 
        <div className="autocomplete">
          <div className="places">
            <span>PLACES</span>
            <ul>
              {searchResults.map((item,i) => 
                <li onClick={() => placeResultInput(item.postalCode+' '+item.address)} key={i}>
                  <div className="code">
                    {item.postalCode} 
                  </div>
                  <div className="country">
                    {item.country}
                  </div>
                </li>
              )}
            </ul>
            <hr />
            <span>ADDRESS</span>
            <ul>
              {searchResults.map((item,i) => 
                <li onClick={() => placeResultInput(item.postalCode+' '+item.address)} key={i}>
                  <div className="code">
                    {item.postalCode} {item.address} 
                  </div>
                  <div className="country">
                    {item.country}
                  </div>
                </li>
              )}
            </ul>
          </div>
          
        </div>
      }
    </Fragment>
  )
}

export default Autocomplete
