import React from "react";

const About = () => {
  return (
    <section className="about">
      <p className="bigger-text">Hi, I'm Michał!</p>
      <p>I am a frontend developer.</p>
      <p>
        I <b>love CSS</b> and <b>know</b> my way around <b>JS</b>.
      </p>
      <p className="big-text">
        After <b>18 months of intense studying</b> <br />
        I'm looking for an opportunity to <b>work professionally</b>.
      </p>
      <p>
        So far I have made several small projects.
        <br /> You can find them in the{" "}
        <a href="#portfolio-section">portfolio</a> section.{" "}
      </p>
    </section>
  );
};

export default About;
