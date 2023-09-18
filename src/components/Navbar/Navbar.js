import React, { Component } from "react";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faAsterisk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Navbar.css';


class Navbar extends Component {

  handleDownload() {
    // File path
    const pdfPath = 'public/assets/BryanGaskins-Resume.pdf';
  
    // Fetch the PDF file using the fetch() API
    fetch(process.env.PUBLIC_URL + pdfPath)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.blob();
      })
      .then((blob) => {
        // Blob URL for the PDF data
        const blobUrl = URL.createObjectURL(blob);
  
        // Anchor element
        const link = document.createElement('a');
  
        // Href attribute set to the blob URL
        link.href = blobUrl;
  
        // Download filename
        link.download = 'BryanGaskins-Resume.pdf';
  
        // Trigger the click for button
        link.click();
  
        // Release the blob URL when done
        URL.revokeObjectURL(blobUrl);
      })
      .catch((error) => {
        console.error('Error downloading PDF:', error);
      });
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
                <button onClick={this.handleDownload} id="downloadButton">Resume</button>
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
