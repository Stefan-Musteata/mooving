import React from 'react'
import bed from '../img/icon-specs/bed.png'
import bath from '../img/icon-specs/bath.png'
import data from '../data/testimonials'
import moment from 'moment'

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


const Testimonials = () => {

  const options = {
    margin: 30,
    responsiveClass: true,
    nav: true,
    autoplay: false,
    navText: ['&#8249;','&#8250;'],
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 1,
        },
        400: {
            items: 1,
        },
        600: {
            items: 2,
        },
        700: {
            items: 2,
        },
        1000: {
            items: 3,
        }
    },
  }

  return (
    <section className="bg-white">
      <div className="container">
        <div className="testimonials">
          <div className="title">
            <h2>Reviews & Testimonials</h2>
            
          </div>
          
          <div className="block-testimonials">
            <OwlCarousel className="slider-items owl-carousel" {...options} >
            
              {data.map(testimonial => (
                <div className="item" key={testimonial.id}>
                  <div className="rating">
                    <span className="nr-rating">{testimonial.rating}.0</span> 
                    {[...Array(5)].map((star, index) => {
                      index += 1;
                      return (
                        <button
                          type="button"
                          key={index}
                          className={index <= testimonial.rating ? "on" : "off"}
                        >
                          <span className="star">&#128970;</span>
                        </button>
                      );
                    })}
                  </div>
                  <div className="description">
                  {testimonial.description}
                  </div>
                  <strong>
                    {testimonial.status} {moment(testimonial.createdAt).format('MMM D')} – ${testimonial.price}M
                  </strong>
                  <div className="card-specs">
                    <span>
                      <img src={bed} alt="" /> 1 Bed
                    </span>
                    <span>
                      <img src={bath} alt="" /> 3 Baths
                    </span>
                    <span>
                      1
                    </span>
                  </div>
                  <div className="address">
                    50E 72nd St, New York, NY 10021
                  </div>
              </div>
              ))}
            </OwlCarousel>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default Testimonials