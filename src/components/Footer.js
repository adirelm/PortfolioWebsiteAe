import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faFacebook,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer id="main-footer">
      <div className="footer-content container">
        <p>Copyright &copy; 2021, All Rights Reserved</p>
        <div className="social">
          <a href="https://www.linkedin.com/in/adir-elmakyes/" target="_blank">
            <FontAwesomeIcon icon={faGithub} className="fab fa-github" />
          </a>
          <a href="https://github.com/adir4455" target="_blank">
            <FontAwesomeIcon icon={faLinkedinIn} className="fab fa-linkedin" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
