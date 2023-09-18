import React, { Component } from "react";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faAsterisk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Navbar.css';


class Navbar extends Component {

  downloadFile() {
    
      // Anchor element
      const link = document.createElement('a');
      link.href = process.env.PUBLIC_URL + '/assets/BryanGaskins-Resume.pdf';
      link.download = 'BryanGaskins-Resume.pdf';
  
      // Trigger a click event of anchor
      link.click();
    }

  
  render() {
    return (
      <nav className="navbar navbar-expand fixed-top">
        <div className="container-fluid">
          <div className="logo">
            <h2>Bryan Gaskins</h2>
          </div>
              <ul className="nav-list">
              <FontAwesomeIcon id="asterisk" icon={faAsterisk} size = '2x' className="me-4 mt-2"/>
                <button onClick={this.downloadFile} id="downloadButton">Resume</button>
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
