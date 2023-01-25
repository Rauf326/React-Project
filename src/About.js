import React, { useState } from 'react'
import AboutHero from './images/aboutHero.png'
const About = () => {
  const partnerPic = [
    {
      id: 1,
      imgurl: "https://www.pmits.co.uk/portals/0/images/partners/solar-communications-200.png"
    },
    {
      id: 2,
      imgurl: "https://www.pmits.co.uk/portals/0/images/partners/cbf-200.png"
    },
    {
      id: 3,
      imgurl: "https://www.pmits.co.uk/portals/0/images/partners/gxs-200.png",
    },
    {
      id: 4,
      imgurl: "https://www.pmits.co.uk/portals/0/images/partners/jpr-200.png",
    },
    {
      id: 5,
      imgurl: "https://www.pmits.co.uk/portals/0/images/partners/talk-internet-200.png",
    },
    {
      id: 6,
      imgurl: "https://www.pmits.co.uk/Portals/0/img/opera3_logo.png",
    },
    {
      id: 7,
      imgurl: "https://www.pmits.co.uk/Portals/0/pegasus-logo.png",
    },
    {
      id: 8,
      imgurl: "https://www.pmits.co.uk/Portals/0/sage business partner.jpg"
    }
  ]
  const [aboutPic] = useState(partnerPic)

  return (
    <>
      <div className="container  mt-5">
        <div className="row ">
          <div className="col-lg-6 col-md-6 col-12 homesection align-self-center mt-5">
            <h1 data-name="We are professional programmers">We are professiosnal</h1>
            <h2>We are Helping to support your business</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Nesciunt autem mollitia odit
              molestiae ipsam, magni quis laborum quasi
              soluta libero, omnis perspiciatis, qui veniam.
              Totam illo vero quo quidem ipsum?</p>
            <button className='btn btn-outline-primary btn-lg me-2'>Get Started</button>
          </div>
          <div className="col-lg-6 col-md-6 col-12  mt-5">
            <img src={AboutHero} alt="" width={500} height={600} className="img-fluid" />
          </div>
        </div>
      </div>

      <div className="container text-center mt-5">
        <div className="row">
          <div className="col-lg-12">
            <h1 className='text-center tech-h1 mt-4'>Our Features</h1>
            <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec sagittis felis.</h5>
            <hr className='mt-3 tech-hr' />
          </div>
          <div className="col-lg-4 mt-5">
            <div className="serviceBox p-5">
              <div className="row  text-start">
                <div className="col-12 IconBox">
                  <span><i className="h1 mt-3 fa-regular fa-lightbulb"></i></span>
                </div>
                <div className="col-12">
                  <h4 className='mt-5'>Lorem ipsum dolor sit amet, adipiscing elit. Suspendisse sagittis felis.</h4>
                </div>
                <div className="col-lg-6 py-4 ms-auto">

                  <button className='d-none btn  btn-outline-primary  serviceBoxButton'>Read me More</button>

                </div>
                <div className="col-lg-6 serviceboxhide">
                  <span className="h5">Read More</span>
                  <i className="fa-solid fa-arrow-right ms-3"></i>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 mt-5">
            <div className="serviceBox p-5">
              <div className="row  text-start">
                <div className="col-12 IconBox">
                  <span><i className="h1 mt-3 fa-solid fa-earth-americas"></i></span>
                </div>
                <div className="col-12">
                  <h4 className='mt-5'>Lorem ipsum dolor sit amet, adipiscing elit. Suspendisse sagittis felis.</h4>
                </div>
                <div className="col-lg-6 py-4 ms-auto">

                  <button className='d-none btn  btn-outline-primary  serviceBoxButton'>Read me More</button>

                </div>
                <div className="col-lg-6 serviceboxhide">
                  <span className="h5">Read More</span>
                  <i className="fa-solid fa-arrow-right ms-3"></i>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 mt-5">
            <div className="serviceBox p-5">
              <div className="row  text-start">
                <div className="col-12 IconBox">
                  <span><i className="h1 mt-3 fa-regular fa-dollar"></i></span>
                </div>
                <div className="col-12">
                  <h4 className='mt-5'>Lorem ipsum dolor sit amet, adipiscing elit. Suspendisse sagittis felis.</h4>
                </div>
                <div className="col-lg-6 py-4 ms-auto">

                  <button className='d-none btn  btn-outline-primary  serviceBoxButton'>Read me More</button>

                </div>
                <div className="col-lg-6 serviceboxhide">
                  <span className="h5">Read More</span>
                  <i className="fa-solid fa-arrow-right ms-3"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="teamSec container-fluid text-center mt-5 ">
        <div className="row">
          <div className="col-lg-12 teambox">
            <h1 className='tech-h1 fw-bolder  '>Our Team</h1>
            <p className='h5 py-3'>Lorem ipsum dolor amet,
              consectetur adipiscing.Lorem ipsum dolor amet,</p>
            <button className='btn btn-primary rounded btn-lg px-5 py-3'>See More</button>
          </div>
        </div>
      </div>

      <div className="jumbotron mt-5">
        <div className="container ">
          <div className="row">
            <div className="col-lg-2"></div>
            <div className="col-lg-8">
              <p className='text='>
                Explore the research we've done <br /> for our great clients. <br />
                <span>View now.</span>
              </p>
            </div>
            <div className="col-lg-2"></div>
          </div>
        </div>
      </div>

      <section className="section section-default mt-none mb-none partners">
        <div className="container">
          <h1 className='text-center tech-h1 mt-4 fw-bold'>Our Partners</h1>
          <hr className='mt-3 tech-hr' />
          <strong>
            <div className="row">
              {
                aboutPic.map((elem) => {
                  return (
                    <div className="col-sm-6 col-md-4 col-lg-3" key={elem.id}>
                      <div className="square-holder">
                        <img alt="" src={elem.imgurl} />
                      </div>
                    </div>
                  )
                })
              }


            </div>
          </strong>
        </div>
      </section>

    </>
  )
}
export default About;

