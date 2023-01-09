import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJava, faHtml5, faCss3, faSquareJs, faBootstrap, faAngular, faReact } from '@fortawesome/free-brands-svg-icons';
import './Skills.css';


class Skills extends Component {
  render() {
    return (
 <>
    <div className="container" id="knowledge">
    
    <div className="row">                        
        <div className="col-sm-12">
            <h3>Skills</h3>
                <ul className="list-group">
                    <li className="list-group-item border-0">                             
                        <FontAwesomeIcon icon={faJava} size = '5x' className="me-4" id="icon"/>                
                        <FontAwesomeIcon icon={faHtml5} size = '5x' className="me-4" id="icon"/>
                        <FontAwesomeIcon icon={faCss3} size = '5x' className="me-4" id="icon"/>
                        <FontAwesomeIcon icon={faSquareJs} size = '5x' className="me-4" id="icon"/>
                        <FontAwesomeIcon icon={faAngular} size = '5x' className="me-4" id="icon"/>
                        <FontAwesomeIcon icon={faReact} size = '5x' className="me-4" id="icon"/>  
                        <FontAwesomeIcon icon={faBootstrap} size = '5x' className="me-4" id="icon"/>
                    </li>   
                </ul>
        </div>
        <div id="tools"><strong>Tools:</strong> MySQL, Tomcat, Jenkins, Git/GitHub, Agile, Scrum, SDLC, Research & Documentation, 
            Eclipse, VS Code, Postman, Adobe In/Ai/Ps
        </div>
    </div>
</div>

<div className="container" id="education">
    <h3>Education</h3>
        <div className="row">
                <div className="col-sm-1 p-2 mt-3">
                        <img className="img-fluid" name="logo" src="./assets/caltechlogo.png" alt="Caltech Logo" width="220" height="220"/>
                </div>
                    <div className="col-md-9 p-1 mt-3">
                        <h5 className="card-title">Caltech Center for Technology and Management Education</h5>
                        <p className="card-text">Full Stack Web Development Post Graduate Degree // Graduated Oct. 2022</p>
                    </div>
        </div>


        <div className="row">
            <div className="col-sm-1 p-2 mb-3">
                <img className="img-fluid" name="logo" src="./assets/uvmlogo.png" alt="UVM Logo" width="220" height="220"/>
            </div>
                <div className="col-md-9 p-1 mb-3">
                    <h5 className="card-title">University of Vermont</h5>
                        <p className="card-text">Bachelor of Arts Degree in Studio Art // Graduated 2010</p>
                </div>
        </div>
        </div>

</>
    );
    
  }
}

export default Skills;
 