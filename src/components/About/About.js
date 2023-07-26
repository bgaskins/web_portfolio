import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './About.css';
import { faEye } from "@fortawesome/free-solid-svg-icons";



class AboutMe extends Component {
  render() {
    return (

      <div className="container-fluid" id="intro">
        <div className="row">
          <div className="container-fluid">
            <div className="col-right">
              <img src="./assets/photo.jpg" alt="headshot"/>
            </div>
              <div className="col-left">
              <p><strong>Hi, my name is Bryan.</strong> I'm an artist and full stack web developer based near Worcester, MA. </p>
            
                    <p>I started in web development in 2021—before I was a student in Caltech CTME's full stack web dev postgrad program. 
                    I spent 9 months learning the fundamentals of front-end and back-end technologies and frameworks.</p>

                    <p>Right now, I'm taking night classes to further my front-end skills, and working on full stack projects that might 
                    have use some day.</p>

                    <p>Prior to web development, I wore many hats. I have experience in marketing for live events, sales, and even real estate. </p>

                    <p><FontAwesomeIcon icon={faEye} size = '2x' className="me-4 mt-2" id="eye-icon"/><span>Looking for a developer position. Hire me?</span></p>           
                    <br/>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default AboutMe;
