import React, { Component } from "react";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Navbar.css';

class Navbar extends Component {
  render() {

    return (
    
      <nav className="navbar navbar-expand bg-light fixed-top">
        <div className="container-fluid">
          <div className="w-100 h-50 d-flex">
            <a className="navbar-brand" id="name" href="https://www.bryandgaskins.com">Bryan Gaskins</a>
          </div>
          <div class="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                  <a className="nav-link active" href="https://www.linkedin.com/in/bryangaskins">
                        <FontAwesomeIcon icon={faLinkedin} size = '1x'/></a>
                  </li>
                  <li className="nav-item">
                  <a className="nav-link active" href="https://github.com/bgaskins">
                        <FontAwesomeIcon icon={faGithub} size = '1x'/></a>
                  </li>
              </ul>
           </div>
          </div>
      </nav>
    );
  }
}

export default Navbar;
