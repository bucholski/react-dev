import RoundAnchorButton from "./RoundAnchorButton";
import { githubLogo, playIcon, backIcon } from "../media/SVG/";

const PortfolioItem = ({ selectItem, project, alt }) => {
  return (
    <button
      className="portfolio__item"
      onClick={selectItem}
      aria-label="See the description of the project"
      data-id={project.id}
    >
      <button
        className="portfolio__back"
        aria-label="Go back to project gallery."
      >
        {backIcon}
      </button>
      <div className="portfolio__buttons">
        <RoundAnchorButton
          icon={githubLogo}
          text="CODE"
          link={project.git}
          aria="Link to this github of this project"
        />
        <RoundAnchorButton
          icon={playIcon}
          text="DEMO"
          link={project.url}
          aria="Link to a live demo of this project"
        />
      </div>

      <picture>
        <source
          srcSet={
            process.env.PUBLIC_URL + "/thumbnails/" + project.thumbnail_hor
          }
          media="(min-width: 500px)"
        />
        <source
          srcSet={
            process.env.PUBLIC_URL + "/thumbnails/" + project.thumbnail_ver
          }
          media="(max-width: 499px)"
        />
        <img
          key={project.id}
          data-id={project.id}
          srcSet={process.env.PUBLIC_URL + "/thumbnails/" + project.thumbnail}
          alt=""
        />
      </picture>
    </button>
  );
};

export default PortfolioItem;
