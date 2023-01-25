import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'


const Article = () => {
  const data = [
    {
      id: 1,
      sname: "Technology",
      aimage: 'image1/blog1.jpg',
      heading: "Why is the Tesla Cybertruck designed the way it is?",
      btname: "Read More",
      Cname: "Nixon Addams",
      sdate: "11-Feb-2015"
    },
    {
      id: 2,
      sname: "POPULAR",
      aimage: 'image1/blog2.jpg',
      heading: "How to Keep Going When You Don’t Know What’s Next.",
      btname: "Read More",
      Cname: "Taylor Write",
      sdate: "11-April-2010"
    },
    {
      id: 3,
      sname: "Design",
      aimage: 'image1/blog3.jpg',
      heading: "10 Rules to Travel in Europe Countries. What are you think about?",
      btname: "Read More",
      Cname: "Richard Cameroon",
      sdate: "18-December-2005"
    }
  ]

  const [sarticle] = useState(data);


  return (
    <div className="container mt-5">
      <h1 className='text-center tech-h1 mt-4'>News Article</h1>
      <hr className='mt-3 mb-4 tech-hr' />
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {
          sarticle.map((elem) => {
            const { id, sname, aimage, heading, btname, Cname, sdate } = elem;
            return (
              <div className="col" key={id}>
                <div className="card">
                  <img src={aimage} className="card-img-top img-fluid" alt="..." />
                  <div className="card-body">
                    <span className="badge bg-primary">{sname}</span>
                    <h5 className="card-title">{heading}</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, ullam! </p>
                    <div className="row">
                      <div className="col-lg-6">
                        <NavLink to={"./Articles"}>
                          <button className='btn btn-primary'>{btname}</button>
                        </NavLink>
                      </div>
                      <div className="col-lg-6 text-end">
                        <p className='fw-bold'>{Cname}
                          <br />
                          <span className='text-primary'>{sdate}</span>
                        </p>


                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        }

      </div>
    </div>
  )
}

export default Article;