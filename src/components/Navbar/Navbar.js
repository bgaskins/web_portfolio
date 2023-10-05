import React, { Component } from "react";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGhost, faPersonRunning } from "@fortawesome/free-solid-svg-icons";
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand fixed-top">
          <div className="container-fluid">
            <div className="name">
              <h2>BRYAN GASKINS</h2>
            </div>
            <div className="icon-container">
            <div className="icon">
                <FontAwesomeIcon id="runner" icon={faPersonRunning} size="lg" />
              </div>
              <div className="icon">
                <FontAwesomeIcon id="ghost" icon={faGhost} size="lg" />
              </div>
            </div>
            <ul className="nav-list">
              <a className="nav-link active" href="https://www.linkedin.com/in/bryangaskins">
                <FontAwesomeIcon id="linkedin" icon={faLinkedin} size="lg" />
              </a>
              <a className="nav-link active" href="https://github.com/bgaskins">
                <FontAwesomeIcon id="github" icon={faGithub} size="lg" />
              </a>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;