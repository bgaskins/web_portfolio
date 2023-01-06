import React, { Component } from "react";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Navbar.css';
import { faBars } from "@fortawesome/free-solid-svg-icons";

class Navbar extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-sm navbar-light flex-column">
          <div className="w-100 d-flex align-items-center">
          <a class="navbar-brand mx-md-auto" href="https://www.bryandgaskins.com">
            <h1>Bryan Gaskins</h1>
          </a>
          <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target=".navbar-collapse">
              <span><FontAwesomeIcon icon={faBars} size = '1x'/></span>
          </button>
              
        </div>
        <div className="collapse navbar-collapse">
            <ul className="navbar-nav text-center">
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
    </nav>
    );
  }
}

export default Navbar;
