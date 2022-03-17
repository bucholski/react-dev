import React, { useEffect, useState } from "react";
import data from "../local-json/projects.json";
// import { Square, Countdown } from "../../public/thumbnails";

const projects = data;
const dots = projects.map((element) => (
  <span
    key={element.id}
    id={"dot-" + element.id}
    className="portfolio__dot"
  ></span>
));

const Portfolio = () => {
  const [displayed, setDisplayed] = useState(1);

  const description = (
    <p className="portfolio__description">
      {projects[displayed - 1].description}
    </p>
  );

  function nextBtn() {
    setDisplayed((displayed) => displayed + 1);
    if (displayed >= projects.length) setDisplayed(1);
  }

  function prevBtn() {
    setDisplayed((displayed) => displayed - 1);
    if (displayed <= 1) setDisplayed(projects.length);
  }

  useEffect(() => {
    if (document.querySelector(".portfolio__dot--current")) {
      document
        .querySelector(".portfolio__dot--current")
        .classList.remove("portfolio__dot--current");
    }
    document
      .querySelector(`#dot-${displayed}`)
      .classList.add("portfolio__dot--current");
  }, [displayed]);

  return (
    <div className="portfolio-wrapper">
      <div className="portfolio__display">
        {/* <img src={projects[displayed - 1].thumbnail} /> */}
        <img src={projects[displayed - 1].thumbnail} />
      </div>
      <div className="portfolio__dots">{dots}</div>
      <button onClick={prevBtn} className="portfolio__arrow">
        Prev
      </button>
      <button
        onClick={nextBtn}
        className="portfolio__arrow portfolio__arrow--next"
      >
        Next
      </button>
      {description}
    </div>
  );
};

export default Portfolio;
