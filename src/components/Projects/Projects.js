import React, { Component } from "react";
import './Projects.css';

class Projects extends Component {
  render() {
    return (
  
      <div className="container-fluid" id="projects">

      {/*****************************
                Project cards 
        *****************************/}
 
        <h3 id="project-header">Projects</h3>

            <div className="row">
                <div className="col-sm-5 col-md-4 col-lg-4 p-4 align-items-stretch">
                    <div className="card w-100 h-100 mx-auto">
                        <img src="./assets/lockedme.png" className="card-img-top" alt="Locked Me"/>
                        <div className="card-body">
                            <h5 className="card-title">Locked Me File Assistant</h5>
                            <p className="card-text">Console-based app for displaying, searching,
                                adding, and deleting files.</p>
                        </div>

                        {/********************************
                           Languages/tools/GitHub button
                         ********************************/}

                        <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <span className="badge rounded-pill bg-warning text-dark">Java</span>
                                </li>
                            <li className="list-group-item"> 
                                <p className="project-concepts">
                                    <strong> Concepts used: </strong>exception handling, collections framework, algorithms, data structures, scrum
                            </p>
                            </li>
                        </ul>
                        <div className="card-body" id="card-bottom">
                            <div className="card-body">                  
                                <a href="https://github.com/bgaskins/locked_me" className="btn">View Project</a>
                            </div>
                        </div>
                    </div>
                </div>





                <div className="col-sm-5 col-md-4 col-lg-4 p-4 align-items-stretch">
                    <div className="card w-100 h-100 mx-auto">
                        <img src="./assets/nmscinemas.png" className="card-img-top" alt="NMS Cinemas"/>
                        <div className="card-body">
                            <h5 className="card-title">NMS Cinemas Booking App</h5>
                            <p className="card-text">A movie ticket ordering app that allows customers to purchase tickets.</p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">                            
                                <span className="badge rounded-pill bg-warning text-dark">Java</span>
                            
                                <span className="badge rounded-pill bg-warning text-dark">HTML5</span>
                            
                                <span className="badge rounded-pill bg-warning text-dark">CSS3</span>
                            
                                <span className="badge rounded-pill bg-warning text-dark">JS</span>
                        
                                <span className="badge rounded-pill bg-warning text-dark">Typescript</span>

                                <span className="badge rounded-pill bg-warning text-dark">SQL</span>

                            </li>
                            <li className="list-group-item"><p className="project-concepts">
                                <strong> Concepts used: </strong> Spring MVC, dynamic data, frameworks (Spring Boot, Bootstrap, Hibernate), backend/frontend integration, REST API, database management, authentication, scrum
                        </p></li>
                        </ul>

                        {/*****************************
                                Dropdown button 
                        *****************************/}   

                        <div className="card-body" id="card-bottom">
                            <div className="card-body">                  
                                <div className="dropdown">
                                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    View Project
                                    </button>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a className="dropdown-item" href="https://github.com/bgaskins/nms_cinemas_frontend">Frontend</a>
                                    <a className="dropdown-item" href="https://github.com/bgaskins/nms_cinemas_backend">Backend</a>
                                    </div>
                                </div>     
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-sm-5 col-md-4 col-lg-4 p-4 align-items-stretch">
                    <div className="card w-100 h-100 mx-auto">
                        <img src="./assets/jaxsmarket.png" className="card-img-top" alt="Jax's Market"/>
                        <div className="card-body">
                            <h5 className="card-title">Jax's Market Grocery App</h5>
                            <p className="card-text">Dynamic and responsive online order app for groceries and home goods.</p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">                            
                                <span className="badge rounded-pill bg-warning text-dark">Java</span>
                            
                                <span className="badge rounded-pill bg-warning text-dark">HTML5</span>
                            
                                <span className="badge rounded-pill bg-warning text-dark">CSS3</span>
                            
                                <span className="badge rounded-pill bg-warning text-dark">JS</span>
                        
                                <span className="badge rounded-pill bg-warning text-dark">Typescript</span>

                                <span className="badge rounded-pill bg-warning text-dark">SQL</span>
                            </li>
                            <li className="list-group-item"><p className="project-concepts">
                                <strong> Concepts used: </strong> Spring MVC, dynamic data, frameworks (Spring Boot, Bootstrap, Hibernate), backend/frontend integration, REST API, database management, scrum
                        </p></li>
                        </ul>

                        {/*****************************
                                Dropdown button 
                        *****************************/}   
                        
                        <div className="card-body" id="card-bottom">
                            <div className="card-body">                  
                                <div className="dropdown">
                                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    View Project
                                    </button>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a className="dropdown-item" href="https://github.com/bgaskins/jaxs_market_frontend">Frontend</a>
                                    <a className="dropdown-item" href="https://github.com/bgaskins/jaxs_market_backend">Backend</a>
                                    </div>
                                </div>     
                            </div>
                        </div>
                </div>
            </div>
        </div>
</div>


    );
  }
}

export default Projects;
