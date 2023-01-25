import React from 'react'
import './contact.css'
const Contact = () => {
  return (
    <>
      <section className="contact-page-sexc">
        <div className="container">
          <div className="sec-title">
            <div className="title">Contact Us</div>
            <h2>Let's Get in Touch.</h2>
          </div>
          <div className="inner-container">
            <div className="row clearfix">
              {/*Form Column*/}
              <div className="form-column col-md-8 col-sm-12 col-xs-12">
                <div className="inner-column">
                  {/*Contact Form*/}
                  <div className="contact-form">
                    <form method="post" action="sendemail.php" id="contact-form">
                      <div className="row clearfix">
                        <div className="form-group col-md-6 col-sm-6 co-xs-12">
                          <input type="text" name="name" placeholder="Name" required p />
                        </div>
                        <div className="form-group col-md-6 col-sm-6 co-xs-12">
                          <input type="email" name="email" defaultValue placeholder="Email" required />
                        </div>
                        <div className="form-group col-md-6 col-sm-6 co-xs-12">
                          <input type="text" name="subject" placeholder="Subject" required />
                        </div>
                        <div className="form-group col-md-6 col-sm-6 co-xs-12">
                          <input type="text" name="phone" placeholder="Phone" required />
                        </div>
                        <div className="form-group col-md-12 col-sm-12 co-xs-12">
                          <textarea name="message" placeholder="Massage" />
                        </div>
                        <div className="form-group col-md-12 col-sm-12 co-xs-12">
                          <button type="submit" className="theme-btn btn-style-one">Send Now</button>
                        </div>
                      </div>
                    </form>
                  </div>
                  {/*End Contact Form*/}
                </div>
              </div>
              {/*Info Column*/}
              <div className="info-column col-md-4 col-sm-12 col-xs-12">
                <div className="inner-column">
                  <h2>Contact Info</h2>
                  <ul className="list-info">
                    <li><i className="fas fa-globe " />123 lorem ispum Abc, Street Chandigarh.</li>
                    <li><i className="far fa-envelope" />example@test</li>
                    <li><i className="fas fa-phone" />1-234-567-890 <br /> 1-234-567-890</li>
                  </ul>
                  <ul className="social-icon-four iconHover">
                    <li className="follow">Follow on: </li>
                    <li><i className="fab fa-facebook-f" /></li>
                    <li><i className="fab fa-twitter" /></li>
                    <li><i className="fab fa-google-plus-g" /></li>
                    <li><i className="fab fa-dribbble" /></li>
                    <li><i className="fab fa-pinterest-p" /></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact