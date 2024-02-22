import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJava,
  faHtml5,
  faCss3,
  faSquareJs,
  faBootstrap,
  faAngular,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import "./Skills.css";
import { faFlagCheckered } from "@fortawesome/free-solid-svg-icons";

class Skills extends Component {
  render() {
    return (
      <>
        <div className="container-fluid">
          <div className="row" id="skills-icon-group">
            <h3 id="skills-header">SKILLS</h3>
            <div className="col">
              <ul className="list-group">
                <li className="list-group-item">
                  <FontAwesomeIcon
                    icon={faJava}
                    size="4x"
                    className="me-4"
                    id="skill-icon"
                  />
                  <FontAwesomeIcon
                    icon={faHtml5}
                    size="4x"
                    className="me-4"
                    id="skill-icon"
                  />
                  <FontAwesomeIcon
                    icon={faCss3}
                    size="4x"
                    className="me-4"
                    id="skill-icon"
                  />
                  <FontAwesomeIcon
                    icon={faSquareJs}
                    size="4x"
                    className="me-4"
                    id="skill-icon"
                  />
                  <FontAwesomeIcon
                    icon={faAngular}
                    size="4x"
                    className="me-4"
                    id="skill-icon"
                  />
                  <FontAwesomeIcon
                    icon={faReact}
                    size="4x"
                    className="me-4"
                    id="skill-icon"
                  />
                  <FontAwesomeIcon
                    icon={faBootstrap}
                    size="4x"
                    className="me-4"
                    id="skill-icon"
                  />
                </li>
              </ul>
              <div id="tools">
                <strong>Tools:</strong> MySQL, Apache, Jenkins, Git/GitHub, AWS,
                Eclipse, VS Code, Postman, Adobe In/Ai/Ps
              </div>
            </div>
          </div>

          <div id="education">
            <h3>EDUCATION</h3>

            {/* Promineo Tech */}
            <div className="education-item">
              <div className="education-img">
                <img
                  src="./assets/promineologo.png"
                  alt="Promineo Tech logo"
                  className="img-fluid"
                  name="logo"
                />
              </div>
              <div className="education-details">
                <h4 className="card-title">
                  Promineo Tech / Quinsigamond Community College
                </h4>
                <p className="card-text">
                  Front End Software Development Certificate
                  <br />
                  <FontAwesomeIcon
                    icon={faFlagCheckered}
                    size="1x"
                    className="me-4"
                  />
                  Graduated Dec. 2023
                </p>
              </div>
            </div>

            {/* Caltech CTME */}
            <div className="education-item">
              <div className="education-img">
                <img
                  src="./assets/caltechlogo.png"
                  alt="Caltech Logo"
                  className="img-fluid"
                  name="logo"
                />
              </div>
              <div className="education-details">
                <h4 className="card-title">
                  Caltech Center for Technology and Management Education
                </h4>
                <p className="card-text">
                  Full Stack Web Development Post Graduate Degree
                  <br />
                  <FontAwesomeIcon
                    icon={faFlagCheckered}
                    size="1x"
                    className="me-4"
                  />
                  Graduated Oct. 2022
                </p>
              </div>
            </div>

            {/* University of Vermont */}
            <div className="education-item">
              <div className="education-img">
                <img
                  src="./assets/uvmlogo.png"
                  alt="UVM Logo"
                  className="img-fluid"
                  name="logo"
                />
              </div>
              <div className="education-details">
                <h4 className="card-title">University of Vermont</h4>
                <p className="card-text">
                  Bachelor of Arts Degree in Studio Art
                  <br />
                  <FontAwesomeIcon
                    icon={faFlagCheckered}
                    size="1x"
                    className="me-4"
                  />
                  Graduated 2010
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Skills;
