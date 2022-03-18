import React, { useEffect, useState } from "react";
import data from "../local-json/projects.json";
import { ChevronLeft, ChevronRight } from "../media/SVG/index";
const projects = data;
const ArrowLeft = ChevronLeft(40, "#000000");
const ArrowRight = ChevronRight(40, "#000000");

const Portfolio = () => {
  const [displayed, setDisplayed] = useState(1);

  const dots = projects.map((element) => (
    <button
      key={element.id}
      id={"dot-" + element.id}
      data-id={element.id}
      className="portfolio__dot"
      onClick={selectDot}
    ></button>
  ));

  const description = (
    <p className="portfolio__description">
      {projects[displayed - 1].description}
    </p>
  );

  function portfolioTransition() {
    let cover = document.querySelector(".portfolio__cover");
    cover.classList.remove("portfolio__cover--animate");
    // ngl I don't exaclty understand the following, but it works
    void cover.offsetWidth;
    cover.classList.add("portfolio__cover--animate");
  }

  function nextBtn() {
    portfolioTransition();
    setDisplayed((displayed) => displayed + 1);
    if (displayed >= projects.length) setDisplayed(1);
  }

  function prevBtn() {
    portfolioTransition();
    setDisplayed((displayed) => displayed - 1);
    if (displayed <= 1) setDisplayed(projects.length);
  }

  function selectDot(event) {
    let dot = event.target;
    if (!dot.classList.contains("portfolio__dot--current")) {
      portfolioTransition();

      setDisplayed(parseInt(dot.dataset.id));
    }
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
        <div className="portfolio__cover portfolio__cover--animate"></div>
      </div>
      <div className="portfolio__dots">{dots}</div>
      <button onClick={prevBtn} className="portfolio__arrow">
        {ArrowLeft}
      </button>
      <button
        onClick={nextBtn}
        className="portfolio__arrow portfolio__arrow--next"
      >
        {ArrowRight}
      </button>
      {description}
    </div>
  );
};

export default Portfolio;
