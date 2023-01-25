import React from 'react'
import { NavLink } from 'react-router-dom'
import footerLogo from '../images/footerLogo.png'
import './footer.css'
const Footer = () => {
  return (
    <>
      <section className="home-newsletter mt-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="single">
                <h2>Subscribe to our Newsletter</h2>
                <div className="input-group">
                  <input type="email" className="form-control" placeholder="Enter your email" />
                  <span className="input-group-btn">
                    <button className="btn btn-theme" type="submit">Subscribe</button>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-area" id="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="contact-content text-center">
                <NavLink to="/"><img className="footimg" src={footerLogo} alt="logo" /></NavLink>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum </p>
                <div className="hr" />
                <h6>1120 Lorem ipsum dolor sit amet, KC 179050, Chandigarh.</h6>
                <h6>+01 2345 6789 12<span>|</span>+01 2345 6789 12</h6>
                <div className="contact-social">
                  <ul>
                    <li><a className="hover-target" href="https://www.facebook.com/" target='_blank' rel="noreferrer"><i className="fab fa-facebook-f" /></a></li>
                    <li><a className="hover-target" href="https://www.linkedin.com/in/rauf-iqbal-0a0b07204/" target='_blank' rel="noreferrer"><i className="fab fa-linkedin-in"/></a></li>
                    <li><a className="hover-target" href="https://github.com/Rauf326" target='_blank' rel="noreferrer"><i className="fab fa-github" /></a></li>
                    <li><a className="hover-target" href="https://www.instagram.com/innocentrauf/" target='_blank' rel="noreferrer"><i className="fab fa-instagram" /></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <p>Copyright © 2022 <img src={footerLogo} alt="logo" /> All Rights Reserved by Rauf Iqbal.</p>
      </footer>
    </>
  )
}

export default Footer