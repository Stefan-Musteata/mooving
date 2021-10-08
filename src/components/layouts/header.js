import React, {useState} from 'react'
import logo from '../img/logo.png'
import menu from '../img/menu.png'
import close from '../img/close.png'
import { NavLink, withRouter } from 'react-router-dom'


const Header = () => {
  const [toggle, setToggle] = useState(false)

  const toggleMobileMenu = () => {
    setToggle(!toggle)
  }
  
  return (
    <div className="container">
      <div className="header">
        <div className="logo">
          <img src={logo} alt="Logo mooving" />
        </div>
        <div className="nav-bar">
          <div className="nav-bar-mobile" onClick={toggleMobileMenu}>
            <img src={toggle ? close:menu} alt="" />
            <div>{toggle ? 'CLOSE':'MENU'}</div>
          </div>
          <ul className={toggle ? 'd-block' : ''}>
            <li>
              <strong>
                <NavLink to="/">MARKET DATA</NavLink>
              </strong>
            </li>
            <li>
              <NavLink to="/">
                LATEST PROPERTY NEWS
              </NavLink>
            </li>
            <li>
              <NavLink to="/">
                PRICING
              </NavLink>
            </li>
            <li>
              <NavLink to="/">
                FAQ
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className="link-sign-in-mobile">
                SIGN IN
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="sign-in">
          <NavLink to="/" className="link-sign-in">
            SIGN IN
          </NavLink>
        
          <NavLink to="/" className="link-sell">
            SELL
          </NavLink>
        </div>
      </div>
      </div>
  )
}

export default withRouter(Header)
