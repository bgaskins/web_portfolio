import React, { Component } from "react";
import './About.css';



class AboutMe extends Component {
  render() {
    return (

      <div className="container-fluid" id="intro">
      <div className="row">
      <div className="container-fluid">
          <div className="col">
            <img src="./assets/headshot.png" alt="headshot" width="300" height="300"/>
          </div>
          <div className="col">
          <p><strong>Hello! I'm Bryan—</strong>and I love building things for the web. I started my journey as a developer in 2021, 
                before completing Caltech CTME’s postgraduate program in Full Stack Web Development. 
                <span id="break"><br/><br/></span>Over the past few years, I have cultivated my knowledge with 
                certifications, studying documentation, and building projects for personal growth.
                <br/><br/>
                Currently, I'm working through the MERN stack, with a React Native project blending e-commerce and live video.   
                <br/><br/>
                Thank you for visiting my portfolio. I hope you enjoy exploring some of my work and 
                learning more about my background and qualifications.<br/></p>
            </div>
          </div>
          </div>
          </div>
    );
  }
}

export default AboutMe;
