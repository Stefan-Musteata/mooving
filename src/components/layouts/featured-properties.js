import React from "react"
import { Link } from 'react-router-dom'
import bed from '../img/icon-specs/bed.png'
import bath from '../img/icon-specs/bath.png'
import data from '../data/properties'

const FeaturedProperties = () => {

  const properties = data

 

  return (
    <div className="container">
      <div className="featured-properties">
        <div className="title">
          <h2>
            Featured Properties
          </h2>
          <Link to="/">MORE PROPERTIES</Link>
        </div>

        <div className="properties">
          {properties.slice(0, 3).map(propertie => (
            
            <div className="item" key={propertie.id}>
              <Link to="/">
                <div className="info-posted">POSTED TODAY</div>
                <div className="picture">
                  <img src={propertie.img} alt="" />
                </div>
                <div className="price">
                  {propertie.price}
                </div>
                <div className="card-specs">
                  <span>
                    <img src={bed} alt="" /> {propertie.bed} Bed
                  </span>
                  <span>
                    <img src={bath} alt="" /> {propertie.bath} Baths
                  </span>
                  <span>
                    {propertie.sq}
                  </span>
                </div>
                <div className="address">
                  {propertie.address}
                </div>
              </Link>
            </div>
            ))
          }
      
        </div>
      </div>
    </div>
  )
}
export default FeaturedProperties