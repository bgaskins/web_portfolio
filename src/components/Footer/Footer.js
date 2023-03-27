import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faTerminal } from "@fortawesome/free-solid-svg-icons";
import React, { Component } from "react";
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <div id="footer">
        <h3>Contact</h3>
            <p className="contact">
            508-769-9222<br/>
            bryandgaskins@gmail.com 
            </p>
            
            <FontAwesomeIcon icon={faTerminal} size = '2xs'/>                
            <div className="copyright"> © 2023 | Built by Bryan Gaskins with <FontAwesomeIcon icon={faReact} size = '1x' className="me-4" id="icon-copyright"/>  
</div>
      </div>
    );
  }
}

export default Footer;
