import React, { Component } from "react";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faAsterisk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Navbar.css';


class Navbar extends Component {

  
  render() {
    return (
      <nav className="navbar navbar-expand fixed-top">
        <div className="container-fluid">
          <div className="logo">
            <h2>Bryan Gaskins</h2>
          </div>
              <ul className="nav-list">
                <a className="nav-link active" href="https://www.linkedin.com/in/bryangaskins">
                  <FontAwesomeIcon id="linkedin" icon={faLinkedin} size = 'lg' /></a>
                <a className="nav-link active" href="https://github.com/bgaskins">
                  <FontAwesomeIcon id="github" icon={faGithub} size = 'lg' /></a>
              </ul>
          </div>
      </nav>
    );
  }
}

export default Navbar;
