import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJava, faHtml5, faCss3, faSquareJs, faBootstrap, faAngular, faReact } from '@fortawesome/free-brands-svg-icons';
import './Skills.css';


class Skills extends Component {
  render() {
    return (
 <>
<div className="container">
<h3>Skills</h3>
    <div className="knowledge">
    <div className="row">                        
        <div className="col"> 
                <ul className="list-group">
                    <li className="list-group-item border-0">                             
                        <FontAwesomeIcon icon={faJava} size = '4x' className="me-4" id="icon"/>                
                        <FontAwesomeIcon icon={faHtml5} size = '4x' className="me-4" id="icon"/>
                        <FontAwesomeIcon icon={faCss3} size = '4x' className="me-4" id="icon"/>
                        <FontAwesomeIcon icon={faSquareJs} size = '4x' className="me-4" id="icon"/>
                        <FontAwesomeIcon icon={faAngular} size = '4x' className="me-4" id="icon"/>
                        <FontAwesomeIcon icon={faReact} size = '4x' className="me-4" id="icon"/>  
                        <FontAwesomeIcon icon={faBootstrap} size = '4x' className="me-4" id="icon"/>
                    </li>   
                </ul> 
                <div id="tools"><strong>Tools:</strong> MySQL, Tomcat, Jenkins, Git/GitHub, AWS, Eclipse, VS Code, Postman, Adobe In/Ai/Ps
        </div>
        </div>
    </div>
    </div>
</div>

<div className="container">
<h3>Education</h3>
    <div id="education">
            <div className="row">
                    <div className="col-20">
                            <img className="img-fluid" name="logo" src="./assets/caltechlogo.png" alt="Caltech Logo"/>
                    </div>
                        <div className="col-80">
                            <h5 className="card-title">Caltech Center for Technology and Management Education</h5>
                            <p className="card-text">Full Stack Web Development Post Graduate Degree // Graduated Oct. 2022</p>
                        </div>
            </div>


        <div className="row"> 
            <div className="col-20">
                <img className="img-fluid" name="logo" src="./assets/uvmlogo.png" alt="UVM Logo"/>
            </div>
                <div className="col-80">
                    <h5 className="card-title">University of Vermont</h5>
                        <p className="card-text">Bachelor of Arts Degree in Studio Art // Graduated 2010</p>
                </div>
    </div>
        </div>
    </div>

</>
    );
    
  }
}

export default Skills;
 