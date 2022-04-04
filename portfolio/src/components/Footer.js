import React from "react";
import { githubLogo, linkedinLogo, mailIcon } from "../media/SVG";
const Footer = () => {
  return (
    <footer>
      <a
        className="mail"
        href="mailto:bucholskim@gmail.com"
        target="_blank"
        rel="noopener"
      >
        <p> {mailIcon}bucholskim@gmail.com</p>
      </a>

      <div className="social">
        <a href="https://github.com/bucholski" aria-label="My github page">
          <div className="social__item">{githubLogo}</div>
        </a>
        <a
          href="https://www.linkedin.com/in/micha%C5%82-bucholski-703505122/"
          aria-label="My linkedIn page"
        >
          <div className="social__item">{linkedinLogo}</div>
        </a>
      </div>
      <p>
        Made using <a href="https://fontawesome.com/">Font Awesome</a>
      </p>
      <p className="credit">Michał Bucholski</p>
    </footer>
  );
};

export default Footer;
