import React, { useState } from 'react'
import Projectmenu from './Projectmenu'

const ProjectBar = () => {

    const [project, setproject] = useState(Projectmenu)

    const filterItem = (categElem) => {
        const updatedItems = Projectmenu.filter((curElem) => {
            return curElem.category === categElem;
        })
        setproject(updatedItems);
    }


    return (
        <div className="container-fluid mt-5">


            <div className="row justify-content-center">


                <h1 className='text-center tech-h1 mt-4'>Projects</h1>
                <hr className='mt-3 tech-hr' />
                <div className="container mt-3 ">
                    <div className="row text-center">
                        <div className="col-lg-12">
                            <button className='btn btn-outline-primary me-4 box-menu mt-3'
                                onClick={() => setproject(Projectmenu)}>All</button>
                            <button className='btn btn-outline-primary me-4 box-menu mt-3'
                                onClick={() => filterItem("Dashboard")}>Dashboards</button>
                            <button className='btn btn-outline-primary me-4 box-menu mt-3'
                                onClick={() => filterItem("Restaurant")}>Restaurants</button>
                            <button className='btn btn-outline-primary me-4 box-menu mt-3'
                                onClick={() => filterItem("Ecommerce")}>Ecommerce</button>
                        </div>
                    </div>
                </div>

                {
                    project.map((elem) => {
                        const { id, simage, description } = elem;
                        return (
                            <div className="col-lg-3 mt-5 col-md-6 col-sm-12 col-12 me-3" key={id}>
                                <div className="box text-center">
                                    <figure>
                                        <img src={simage} alt="" width="500px" className='img-fluid boxxxx' />
                                        <figcaption>
                                            {description}
                                        </figcaption>
                                    </figure>

                                </div>
                            </div>
                        )
                    })
                }

            </div>


        </div>
    )
}

export default ProjectBar