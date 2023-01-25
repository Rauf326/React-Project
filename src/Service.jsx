import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import ServicePic from './images/service.svg'
import Servicejumbo from './images/serviceJumbo.svg'

const Service = () => {
  const serviceIcons = [
    {
      id: 1,
      ServiceImage: "image1/servicebox1.svg",
      ServiceHeading: "Content Marketing"
    },
    {
      id: 2,
      ServiceImage: "image1/servicebox2.svg",
      ServiceHeading: "Social Media Marketing"
    },
    {
      id: 3,
      ServiceImage: "image1/servicebox3.svg",
      ServiceHeading: "Social Media Advertising"
    },
    {
      id: 4,
      ServiceImage: "image1/servicebox4.svg",
      ServiceHeading: "Brand & Logo Design"
    },
    {
      id: 5,
      ServiceImage: "image1/servicebox5.svg",
      ServiceHeading: "Web Design / Development"
    },
    {
      id: 6,
      ServiceImage: "image1/servicebox6.svg",
      ServiceHeading: "Mobile App Development"
    },
  ]
  const [SerImage] = useState(serviceIcons)

  return (
    <>
      <div className="container  mt-5">
        <div className="row ">
          <div className="col-lg-6 col-md-6 col-12 homesection align-self-center mt-5">
            <h1 data-name="Service help Buisnesses">Service help Buisnesses</h1>
            <h2>Make Your Business More Profitable</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Nesciunt autem mollitia odit
              molestiae ipsam, magni quis laborum quasi
              soluta libero, omnis perspiciatis, qui veniam.
              Totam illo vero quo quidem ipsum?</p>
            <button className='btn btn-outline-primary btn-lg me-2'>Get Started</button>
          </div>
          <div className="col-lg-6 col-md-6 col-12  mt-5">
            <img src={ServicePic} alt="" width={700} height={600} className="img-fluid" />
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-12">
            <h1 className='text-center tech-h1 mt-5'>Our Features</h1>
            <hr className='mt-3 tech-hr' />
          </div>
          <div className="row  ">
            {
              SerImage.map((elem) => {
                return (
                  <div className="col-lg-6 col-12 col-md-6 col-sm-12 mt-4 servicesBox" key={elem.id}>
                    <div className="row">
                      <div className="col-lg-2">
                        <img src={elem.ServiceImage} alt="" width="150" className='img-fluid' />
                      </div>
                      <div className="col-lg-10">
                        <div>
                          <h2>{elem.ServiceHeading}</h2>
                          <p>Far far away, behind the word mountains,
                            far from the countries Vokalia and Consonantia, there live the blind texts depends on it</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
            }



          </div>


        </div>
      </div>

      <div className="container-fluid mt-5 service-jumbo text-white jumbotron">
        <div className="container">
          <h1 data-name="Service help Buisnesses" className='text-center '>Our Services in Demand</h1>

          <div className="row mt-4">
            <div className="col-lg-6 col-md-6 col-12  mt-5">
              <img src={Servicejumbo} alt="" width={500} height={600} className="img-fluid" />
            </div>
            <div className="col-lg-6 col-md-6 col-12 align-self-center mt-5">
              <h1 data-name="Our Mission">Our Mission</h1>
              <p className='mt-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Nesciunt autem mollitia odit
                molestiae ipsam, magni quis laborum quasi
                soluta libero, omnis perspiciatis, qui veniam.
                Totam illo vero quo quidem ipsum</p>
              <ul className='py-1'>
                <li><i className="fa-solid fa-check me-4"></i>Dynamic Websites</li>
                <li><i className="fa-solid fa-check me-4"></i>Mobile Application</li>
                <li><i className="fa-solid fa-check me-4"></i>Game Development</li>
                <li><i className="fa-solid fa-check me-4"></i>Digital Marketing</li>
                <li><i className="fa-solid fa-check me-4"></i>AI Development</li>

              </ul>
              <NavLink to="/contact">
                <button className='btn btn-primary btn-lg me-2 mt-4'>Contact Us</button>
              </NavLink>
            </div>

          </div>
        </div>

      </div>
    </>
  )
}

export default Service