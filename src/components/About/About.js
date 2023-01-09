import React, { Component } from "react";
import './About.css';



class AboutMe extends Component {
  render() {
    return (
      <div className="container" id="intro">
      <div className="row">
        <div className="container-fluid">
          <div className="col-xs-8 col-sm-6 col-md-6 col-lg-6">
            <img src="./assets/headshot.png" id="image" alt="headshot" width="350" height="350"/>
          </div>
          <div className="col-xs-8 col-sm-11 col-md-12 col-lg-12">
            <p id="about"><strong>Hello! I'm Bryan—</strong>and I love building things for the web. I started my journey as a developer in 2021, 
              before completing Caltech CTME’s postgraduate program in Full Stack Web Development. Since then, I've been
              completely hooked on the world of development. Over the past few years, I have cultivated my knowledge with 
              certifications, studying documentation, and building projects for personal growth.
              <br/><br/>
              I am excited about creating innovative and user-friendly applications and am ready to continue learning and 
              growing in the world of web dev. Thank you for visiting my portfolio. I hope you enjoy exploring my work and 
              learning more about my background and qualifications.<br/></p>
            </div>
          </div>
          </div>
          </div>
    );
  }
}

export default AboutMe;
