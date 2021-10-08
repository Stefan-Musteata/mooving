import React, {useState} from 'react'
import logo from '../img/logo-white.png'
import women from '../img/women.png'
import { Link } from 'react-router-dom'


const Footer = () => {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleClickSubscribe = (e) => {
    e.preventDefault()
    if (email === '') {
      setMessage('Enter Email')
    } else {
      setMessage('')
    }
  }
  
  return (
    <footer>
      <div className="container">
        <div className="block">
          <div className="first-column">
            <img src={logo} alt="" />

            <div className="nav-footer">
              <ul>
                <li>
                  <Link to="/">PRIVACY POLICY</Link>
                </li>
                <li>
                  <Link to="/">TERM & CONDITIONS</Link>
                </li>
                <li>
                  <Link to="/">PRESS</Link>
                </li>
                <li>
                  <Link to="/">CONTACT US</Link>
                </li>
              </ul>
            </div>

            <div className="copywrite">
              ©2021 Mooving.uk. All rights reserved.
            </div>
          </div>
        
          <div className="last-column">
            <div className="social-media">
              <ul>
                <li>
                  <Link to="/">
                    <i className="fa fa-instagram"></i>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <i className="fa fa-twitter"></i>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <i className="fa fa-facebook"></i>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <i className="fa fa-youtube-play"></i>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <i className="fa fa-linkedin"></i>
                  </Link>
                </li>

              </ul>
            </div>

            <div className="form-subscribe">
              <h2>
                Get the latest news
              </h2>
              <form action="">
               
                  <input type="text" placeholder="Your email" onChange={e => setEmail(e.target.value)}/>
                  {message && <div className="text-red">{message}</div>}
               
                <button type="submit" onClick={handleClickSubscribe}>SUBSCRIBE</button>
              </form>
            </div>
          </div>
          
          <div className="women">
            <img src={women} alt="" />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
