import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTerminal } from "@fortawesome/free-solid-svg-icons";
import React, { Component } from "react";
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="container-fluid" id="footer">
        <h3>Contact</h3>
            <p className="contact">
            508-769-9222<br/>
            bryandgaskins@gmail.com 
            </p>
            
            <FontAwesomeIcon icon={faTerminal} size = '1x'/>                
            <div className="copyright text-muted"> © 2023 | Built by Bryan Gaskins </div>
      </div>
    );
  }
}

export default Footer;
