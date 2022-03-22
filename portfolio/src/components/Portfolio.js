import React, { useEffect, useState } from "react";
import data from "../local-json/projects.json";
import { ChevronLeft, ChevronRight } from "../media/SVG/index";
const projects = data;
const ArrowLeft = ChevronLeft();
const ArrowRight = ChevronRight();

const Portfolio = () => {
  const [displayed, setDisplayed] = useState(1);
  document.documentElement.style.setProperty("--img-index", displayed - 1);

  const dots = projects.map((element) => (
    <button
      key={element.id}
      id={"dot-" + element.id}
      data-id={element.id}
      className="portfolio__dot"
      onClick={selectDot}
    ></button>
  ));

  const images = projects.map((element) => (
    <img
      key={element.id}
      data-id={element.id}
      src={process.env.PUBLIC_URL + element.thumbnail}
    />
  ));

  const description = (
    <p className="portfolio__description">
      {projects[displayed - 1].description}
    </p>
  );

  function nextBtn() {
    setDisplayed((displayed) => displayed + 1);
    if (displayed >= projects.length) setDisplayed(1);
    document.documentElement.style.setProperty("--img-index", displayed - 1);
  }

  function prevBtn() {
    setDisplayed((displayed) => displayed - 1);
    if (displayed <= 1) setDisplayed(projects.length);
    document.documentElement.style.setProperty("--img-index", displayed - 1);
  }

  function selectDot(event) {
    let dot = event.target;
    if (!dot.classList.contains("portfolio__dot--current")) {
      setDisplayed(parseInt(dot.dataset.id));
    }
    document.documentElement.style.setProperty("--img-index", displayed - 1);
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
        <div className="portfolio__slider">{images}</div>
        <button onClick={prevBtn} className="portfolio__arrow">
          {ArrowLeft}
        </button>
        <button
          onClick={nextBtn}
          className="portfolio__arrow portfolio__arrow--next"
        >
          {ArrowRight}
        </button>
        <div className="portfolio__dots">{dots}</div>
      </div>
      {description}
    </div>
  );
};

export default Portfolio;
