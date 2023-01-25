import React from 'react'
import Hero from './images/hero.jpg'
import ProjectBar from './HomeParts/ProjectBar'
import Article from './HomeParts/Article'

const Home = () => {
  return (
    <>
      <div className="container  mt-5">
        <div className="row ">
          <div className="col-lg-6 col-md-6 col-12 homesection align-self-center mt-5">
            <h1 data-name="Welcome to My Website">Welcome to My Website</h1>
            <h2>We are Programmers</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Nesciunt autem mollitia odit
              molestiae ipsam, magni quis laborum quasi
              soluta libero, omnis perspiciatis, qui veniam.
              Totam illo vero quo quidem ipsum?</p>
            <button className='btn btn-outline-primary me-2'>Get Started</button>
            <button className='btn btn-primary me-2'>Work With Us</button>
          </div>
          <div className="col-lg-6 col-md-6 col-12  mt-5">
            <img src={Hero} alt="" width={500} height={600} className="img-fluid" />
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row ">
          <h1 className='text-center tech-h1 mt-4'>Working Technologies</h1>
          <hr className='mt-3 tech-hr' />
          <div className="col-lg-6 mt-5 skillsection align-self-center">
            <h2>We are <span>Working</span> with Multiple <span>Technologies </span>
              & Different FrameWorks</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae cumque alias,
              laboriosam numquam suscipit assumenda impedit modi debitis soluta eligendi quam,
              accusamus dolorum non iste quis, reiciendis dignissimos vitae officiis.soluta eligendi quam,
              accusamus dolorum non iste quis, reiciendis dignissimos vitae officiis.
            </p>

          </div>
          <div className="col-lg-6 mt-5">
            <div className="skills">
              <div className="skills-bar">
                <div className="bar">
                  <div className="info">
                    <span>HTML</span>
                  </div>
                  <div className="progress-line"><span className="html" /></div>
                  <div className="bar">
                    <div className="info">
                      <span>CSS</span>
                    </div>
                    <div className="progress-line"><span className="css" /></div>
                    <div className="bar">
                      <div className="info">
                        <span>BOOTSTRAP</span>
                      </div>
                      <div className="progress-line"><span className="bootstrap" /></div>
                      <div className="bar">
                        <div className="info">
                          <span>JAVASCRIPT</span>
                        </div>
                        <div className="progress-line">
                          <span className="javascript" />
                        </div>
                        <div className="bar">
                          <div className="info">
                            <span>REACT-JS</span>
                          </div>
                          <div className="progress-line"><span className="react" /></div>
                        </div>
                        <div className="bar">
                          <div className="info">
                            <span>MERN</span>
                          </div>
                          <div className="progress-line"><span className="mern" /></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <ProjectBar />``
      <Article />
    </>
  )
}

export default Home