import React, { Component } from "react";
import './About.css';



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
          <p><strong>Hello! I'm Bryan—</strong>and I love building things for the web. I started my journey as a developer in 2021, 
                before completing Caltech CTME’s postgraduate program in Full Stack Web Development. 
                <span id="break"><br/><br/></span> Over the years, I have cultivated my knowledge with 
                certifications, self-learning, development communities, and building interesting projects that make me a better developer. 
                <br/><br/>
                Right now, I'm exploring natural language processing for an e-commerce, social app with live video and chat features. Early days.

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
