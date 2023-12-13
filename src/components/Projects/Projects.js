import React, { Component } from "react";
import "./Projects.css";

class Projects extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="projects">
          <h3 id="project-header">PROJECTS</h3>
          <div className="row">
            {/* Card 1 */}
            <div className="col-sm-4 p-2">
              <div className="card h-100">
                <img
                  src="./assets/FarmStandFinder.png"
                  className="card-img-top"
                  alt="Jax's Market"
                />
                <div
                  className="card-body d-flex flex-column"
                  id="bubble-background"
                >
                  <h5 className="card-title">Farm Stand Finder</h5>
                  <p className="card-text">
                    Farm Stand App allows users to explore and manage
                    information about various farm stands in their area.
                  </p>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item" id="bubbles">
                      <span className="badge bg-warning text-dark">
                        JavaScript
                      </span>
                      <span className="badge bg-warning text-dark">HTML</span>
                      <span className="badge bg-warning text-dark">CSS</span>
                      <span className="badge bg-warning text-dark">
                        ReactJS
                      </span>
                      <span className="badge bg-warning text-dark">
                        React Bootstrap
                      </span>
                      <span className="badge bg-warning text-dark">
                        Node.js
                      </span>
                      <span className="badge bg-warning text-dark">
                        MockAPI
                      </span>
                    </li>
                  </ul>
                  <div className="card-buttons mt-auto">
                    <div className="dropdown">
                      <button
                        className="btn btn-secondary dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        View Project
                      </button>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuButton"
                      >
                        <a
                          className="dropdown-item"
                          href="https://farm-stand-finder.vercel.app"
                        >
                          Live Demo
                        </a>
                        <a
                          className="dropdown-item"
                          href="https://github.com/bgaskins/final_proj_unit_sixteen"
                        >
                          GitHub
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-sm-4 p-2">
              <div className="card h-100">
                <img
                  src="./assets/lockedme.png"
                  className="card-img-top"
                  alt="Locked Me"
                />
                <div
                  className="card-body d-flex flex-column"
                  id="bubble-background"
                >
                  <h5 className="card-title">Locked Me File Assistant</h5>
                  <p className="card-text">
                    Console-based app for displaying, searching, adding, and
                    deleting files.
                  </p>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item" id="bubbles">
                      <span className="badge bg-warning text-dark">Java</span>
                      <span className="badge bg-warning text-dark">
                        Console
                      </span>
                    </li>
                  </ul>
                  <div className="card-buttons mt-auto">
                    <div className="dropdown">
                      <button
                        className="btn btn-secondary dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        View Project
                      </button>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuButton"
                      >
                        <a
                          className="dropdown-item"
                          href="https://github.com/bgaskins/locked_me"
                        >
                          Backend
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-sm-4 p-2">
              <div className="card h-100">
                <img
                  src="./assets/nms-preview.png"
                  className="card-img-top"
                  alt="NMS Cinemas"
                />
                <div
                  className="card-body d-flex flex-column"
                  id="bubble-background"
                >
                  <h5 className="card-title">NMS Cinemas Booking App</h5>
                  <p className="card-text">
                    A movie ticket ordering app that allows customers to
                    purchase tickets.
                  </p>
                  <ul className="list-group list-group-flush h-80">
                    <li className="list-group-item" id="bubbles">
                      <span className="badge bg-warning text-dark">Java</span>
                      <span className="badge bg-warning text-dark">HTML</span>
                      <span className="badge bg-warning text-dark">CSS</span>
                      <span className="badge bg-warning text-dark">
                        Typescript
                      </span>
                      <span className="badge bg-warning text-dark">
                        Angular
                      </span>
                      <span className="badge bg-warning text-dark">SQL</span>
                      <span className="badge bg-warning text-dark">AWS</span>
                    </li>
                  </ul>
                  <div className="card-buttons mt-auto">
                    <div className="dropdown">
                      <button
                        className="btn btn-secondary dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        View Project
                      </button>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuButton"
                      >
                        <a
                          className="dropdown-item"
                          href="https://github.com/bgaskins/nms_cinemas_frontend"
                        >
                          Frontend
                        </a>
                        <a
                          className="dropdown-item"
                          href="https://github.com/bgaskins/nms_cinemas_backend"
                        >
                          Backend
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="col-sm-4 p-2">
              <div className="card h-100">
                <img
                  src="./assets/jaxs-preview.png"
                  className="card-img-top"
                  alt="Jax's Market"
                />
                <div
                  className="card-body d-flex flex-column"
                  id="bubble-background"
                >
                  <h5 className="card-title">Jax's Market Grocery App</h5>
                  <p className="card-text">
                    Dynamic and responsive online order app for groceries and
                    home goods.
                  </p>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item" id="bubbles">
                      <span className="badge bg-warning text-dark">Java</span>
                      <span className="badge bg-warning text-dark">HTML</span>
                      <span className="badge bg-warning text-dark">CSS</span>
                      <span className="badge bg-warning text-dark">
                        Typescript
                      </span>
                      <span className="badge bg-warning text-dark">
                        Angular
                      </span>
                      <span className="badge bg-warning text-dark">SQL</span>
                      <span className="badge bg-warning text-dark">AWS</span>
                    </li>
                  </ul>
                  <div className="card-buttons mt-auto">
                    <div className="dropdown">
                      <button
                        className="btn btn-secondary dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        View Project
                      </button>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuButton"
                      >
                        <a
                          className="dropdown-item"
                          href="https://github.com/bgaskins/jaxs_market_frontend"
                        >
                          Frontend
                        </a>
                        <a
                          className="dropdown-item"
                          href="https://github.com/bgaskins/jaxs_market_backend"
                        >
                          Backend
                        </a>
                      </div>
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
