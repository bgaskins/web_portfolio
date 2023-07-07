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
          <p><strong>Hi, I'm Bryan—</strong>and I love building things for the web. In 2021, I began teaching myself web development, eventually 
                completing Caltech CTME’s postgraduate program in Full Stack Web Development. 
                <span id="break"><br/><br/></span> Over the years, I've gained working knowledge of the most popular frontend and backend technologies. 
                <br/><br/>
                Right now, I'm staying involved with learning opportunities, developer communities, and building interesting projects that make me a better developer. 
                
                I'm also exploring natural language processing and AI implementation in the e-commerce world. 

                <br/><br/>
                Thanks for visiting my portfolio. I hope you enjoy exploring some of my work and 
                learning more about my background and qualifications. 
                <br/></p>
            </div>
          </div>
          </div>
          </div>
    );
  }
}

export default AboutMe;
