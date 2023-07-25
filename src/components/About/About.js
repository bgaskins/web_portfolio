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
              <p><strong>Hi, my name is Bryan.</strong>I'm an artist and full stack web developer based near Worcester, MA.
                    <br/><br/>
                    I started in web development in 2021—before I was a student in Caltech CTME's full stack web dev postgrad program. 
                    I spent 9 months learning the fundamentals of front-end and back-end technologies and frameworks.
                    <br/><br/>
                    Right now, I'm taking night classes to further my front-end skills, and working on full stack projects that might 
                    have use some day.
                    <br/><br/>
                    Prior to web development, I wore many hats. I have experience in marketing for live events, sales, and even real estate.
                    <br/><br/>
                    <br/></p>
                    Have an opportunity? Let's chat!            
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default AboutMe;
