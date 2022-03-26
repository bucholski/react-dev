import React, { useEffect, useState } from "react";
import data from "../local-json/projects.json";
import {
  ChevronLeft,
  ChevronRight,
  gitLogo,
  playIcon,
} from "../media/SVG/index";
import RoundAnchorButton from "./RoundAnchorButton";

const projects = data;

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
    // <img
    //   key={element.id}
    //   data-id={element.id}
    //   srcSet={process.env.PUBLIC_URL + "/thumbnails/" + element.thumbnail}
    // />
    <picture key={element.id} data-id={element.id}>
      <source
        srcSet={process.env.PUBLIC_URL + "/thumbnails/" + element.thumbnail_hor}
        media="(min-width: 500px)"
      />
      <source
        srcSet={process.env.PUBLIC_URL + "/thumbnails/" + element.thumbnail_ver}
        media="(max-width: 499px)"
      />
      <img
        key={element.id}
        data-id={element.id}
        srcSet={process.env.PUBLIC_URL + "/thumbnails/" + element.thumbnail}
      />
    </picture>
  ));

  const description = projects[displayed - 1].description;
  const tech = projects[displayed - 1].tech;

  function updateDescription(str, strArr) {
    const text = document.querySelector(".portfolio__description-text");
    const boxes = document.querySelector(".portfolio__description-boxes");
    while (boxes.firstChild) {
      boxes.removeChild(boxes.firstChild);
    }
    text.innerHTML = str;
    strArr.forEach((element) => {
      // boxes;
      let techbox = document.createElement("span");
      techbox.classList.add("portfolio__techbox");
      techbox.innerText = element;

      boxes.appendChild(techbox);
    });
  }

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
    updateDescription(description, tech);
  }, [displayed]);

  return (
    <section
      id="portfolio-section"
      aria-label="A display of my finished projects"
    >
      <h2>My projects:</h2>

      <div className="portfolio">
        <div className="portfolio__display">
          <div className="portfolio__slider">{images}</div>
          <button
            onClick={prevBtn}
            className="portfolio__arrow"
            aria-label="Show previous portfolio item"
          >
            {ChevronLeft}
          </button>
          <button
            onClick={nextBtn}
            className="portfolio__arrow portfolio__arrow--next"
            aria-label="Show next portfolio item"
          >
            {ChevronRight}
          </button>
          <div className="portfolio__a-buttons">
            <RoundAnchorButton
              icon={gitLogo}
              text="CODE"
              link={projects[displayed - 1].git}
              aria="Code"
            />
            <RoundAnchorButton
              icon={playIcon}
              text="DEMO"
              link={projects[displayed - 1].url}
              aria="Demo"
            />
          </div>
          <div className="portfolio__dots">{dots}</div>
        </div>
        <div className="portfolio__description">
          <div
            className="portfolio__description-text"
            aria-label="Description of a portfolio item"
          ></div>
          <div
            className="portfolio__description-boxes"
            aria-label="Tech/Skills I used"
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
