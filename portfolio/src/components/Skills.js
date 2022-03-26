import React from "react";
import {
  htmlLogo,
  cssLogo,
  sassLogo,
  jsLogo,
  reactLogo,
  reduxLogo,
  gitLogo,
} from "../media/SVG";

const Skills = () => {
  return (
    <section className="skills-section" aria-label="My skills:">
      <h2>Tech I use:</h2>
      <div className="skills">
        <div className="skills__item">
          <div className="skills__icon">{htmlLogo}</div>
          <p className="skills__description">HTML</p>
        </div>
        <div className="skills__item">
          <div className="skills__icon">{cssLogo}</div>
          <p className="skills__description">CSS</p>
        </div>
        <div className="skills__item">
          <div className="skills__icon">{sassLogo}</div>
          <p className="skills__description">SASS</p>
        </div>
        <div className="skills__item">
          <div className="skills__icon">{jsLogo}</div>
          <p className="skills__description">JS</p>
        </div>
        <div className="skills__item">
          <div className="skills__icon">{reactLogo}</div>
          <p className="skills__description">React</p>
        </div>
        <div className="skills__item">
          <div className="skills__icon">{reduxLogo}</div>
          <p className="skills__description">Redux</p>
        </div>
        <div className="skills__item">
          <div className="skills__icon">{gitLogo}</div>
          <p className="skills__description">Git</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
