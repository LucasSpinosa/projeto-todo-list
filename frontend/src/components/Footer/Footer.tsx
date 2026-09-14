import React from "react";

import LinkedInIcon from "../../assets/linkedin.svg";
import GitHubIcon from "../../assets/github.svg";
import GmailIcon from "../../assets/gmail.svg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="
      py-3 
      border-top
    "
    >
      <div
        className="  
        d-flex 
        align-items-center
        flex-column
        flex-md-row
      "
      >
        <p
          className="
          col-md-3 
          mb-0 
          text-body-secondary
          mx-auto
        "
        >
          © {currentYear} Lucas de Lima Spinosa dos Santos
        </p>
        <ul
          className="
          d-flex
          nav
          align-items-center
        "
        >
          <li className="nav-item">
            <a
              href="https://www.linkedin.com/in/lucas-spinosa-software/"
              target="_blank"
              className="nav-link"
            >
              <img src={LinkedInIcon} alt="LinkedIn Icon" width={40} />
            </a>
          </li>
          <li className="nav-item">
            <a
              href="https://github.com/LucasSpinosa"
              target="_blank"
              className="nav-link"
            >
              <img src={GitHubIcon} alt="GitHub Icon" width={30} />
            </a>
          </li>
          <li className="nav-item me-md-2">
            <a
              href="mailto:lucasspinosa.software@gmail.com"
              target="_blank"
              className="nav-link"
            >
              <img src={GmailIcon} alt="Gmail Icon" width={40} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
