import { useEffect, useState } from "react";
import data from "../local-json/projects.json";
import PortfolioItem from "./PortfolioItem";
function qs(target, parent = document) {
  return parent.querySelector(target);
}
const Portfolio = () => {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    updateDescriptions(selected);
    updateBoxes(selected);
  }, [selected]);

  function updateDescriptions() {
    if (selected)
      qs(".portfolio__description-text").innerHTML =
        data[selected - 1].description;
    if (!selected)
      qs(".portfolio__description-text").innerHTML =
        "<p>Click a thumbnail to learn more about a project</p>";
  }

  function updateBoxes() {
    // if (selected) {
    const boxes = qs(".portfolio__description-boxes");
    while (boxes.firstChild) {
      boxes.removeChild(boxes.firstChild);
    }
    data[selected - 1]?.tech?.forEach((element) => {
      let techbox = document.createElement("span");
      techbox.classList.add("portfolio__techbox");
      techbox.innerText = element;
      boxes.appendChild(techbox);
    });
    // }
  }

  function selectItem(e) {
    const target = e.target;
    if (
      target
        .closest(".portfolio__item")
        ?.classList.contains("portfolio__item--active")
    ) {
      target
        .closest(".portfolio__item")
        ?.classList.remove("portfolio__item--active");
      qs("#portfolio").scrollIntoView({ behavior: "smooth" });
      setSelected(null);
    } else {
      if (qs(".portfolio__item--active")) {
        qs(".portfolio__item--active")?.classList.remove(
          "portfolio__item--active"
        );
      }
      setSelected(parseInt(target?.closest(".portfolio__item").dataset.id));
      target
        ?.closest(".portfolio__item")
        ?.classList?.add("portfolio__item--active");
    }
  }

  return (
    <section className="portfolio" id="portfolio">
      <div className="high-width-center">
        <h2>My latest projects</h2>
        <div className="flex-box">
          <PortfolioItem
            selectItem={selectItem}
            project={data[1]}
            alt="Countdown"
          />
          <PortfolioItem
            selectItem={selectItem}
            project={data[2]}
            alt="Rock-paper-scissors"
          />
          <PortfolioItem
            selectItem={selectItem}
            project={data[3]}
            alt="Item search with Guild Wars2 API"
          />
          <PortfolioItem
            selectItem={selectItem}
            project={data[4]}
            alt="Redux fake blog"
          />
        </div>
        <div className="portfolio__description">
          <div className="portfolio__description-text"></div>
          <div className="portfolio__description-boxes"></div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
