import React from 'react'
import Logo from '../images/logo.png'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div className="container-fluid">
        <nav className="navbar fixed-top navbar-expand-lg bg-light">
          <div className="container-fluid">
            <NavLink to="/">
              <img src={Logo} alt="Logo" width="120" />
            </NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink to="/" className="nav-link">Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/about" className="nav-link">About</NavLink>
                </li>
                <li className="nav-item" >
                  <NavLink to="/service" className="nav-link">Service</NavLink>
                </li>

                <li className="nav-item">
                  <NavLink to="/contact" className="nav-link">Contact Us</NavLink>
                </li>

              </ul>
              <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><i className="fa-brands fa-facebook"></i></a>
              <a href="https://www.linkedin.com/in/rauf-iqbal-0a0b07204/" target="_blank" rel="noreferrer"> <i className="fa-brands fa-linkedin-in"></i></a>

              <a href="https://github.com/Rauf326" target="_blank" rel="noreferrer"> <i className="fa-brands fa-github"></i></a>

            </div>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Navbar