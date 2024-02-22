import React, { Component } from "react";
import "./About.css";

class AboutMe extends Component {
  render() {
    return (
      <div className="container-fluid" id="intro">
        {/*<div className="col-left">
          <img src="./assets/headshot.png" alt="headshot" /> 
        </div>*/}
        <div className="col-right">
          <p>
            <strong>Hello, I'm Bryan.</strong> I'm an artist and full stack web
            developer based near Worcester, MA. I started in web development in
            early 2022—before graduating from Caltech CTME's full stack web dev
            postgrad program.
            <br />
            <br />
            Now I build responsive and dynamic web applications from backend to
            front end.
            <br />
            <br />
            I've worked with Java/Spring/SQL, HTML/CSS/JS/TS, AWS, Angular,
            Next.js, React, and more.
            <br />
            <br />
            Prior to web development, I wore many hats. I have experience in
            marketing for live events, sales, and even real estate.
          </p>
        </div>
      </div>
    );
  }
}

export default AboutMe;
