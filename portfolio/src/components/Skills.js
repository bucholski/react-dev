import React from "react";
import {
  htmlLogo,
  cssLogo,
  sassLogo,
  jsLogo,
  reactLogo,
  reduxLogo,
} from "../media/SVG";
const logoHTML = htmlLogo();
const logoCSS = cssLogo();
const logoSass = sassLogo();
const logoJS = jsLogo();
const logoReact = reactLogo();
const logoRedux = reduxLogo();

const Skills = () => {
  return (
    <div className="skills">
      <div className="skills__item">{logoHTML}</div>
      <div className="skills__item">{logoCSS}</div>
      <div className="skills__item">{logoSass}</div>
      <div className="skills__item">{logoJS}</div>
      <div className="skills__item">{logoReact}</div>
    </div>
  );
};

export default Skills;
