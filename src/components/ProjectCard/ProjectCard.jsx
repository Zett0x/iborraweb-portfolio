import "./ProjectCard.scss";
import githubLogo from "../../assets/github.svg";
import { useState } from "react";
const imagesProject = require.context("../../assets/projects", true);

export const ProjectCard = ({ img, title, githubLink, demoLink }) => {
  const [imgClicked, setImgClicked] = useState(false);
  const handleClick = () => {
    setImgClicked(!imgClicked);
  };

  return (
    <div className="project-card">
      <div className="project-card--image" onClick={handleClick}>
        <img
          className={imgClicked ? "hidden" : ""}
          src={imagesProject(`./${img}`)}
          alt="project"
        />
        {/* <img src={img} alt="project" /> */}

        <div className={`overlay ${!imgClicked ? "hidden" : ""}`}>
          <div className="text">
            <p>text etiaetioeatjhioaeiotheatehatuieahtuieahthaeit</p>
          </div>
        </div>
      </div>

      <h3 className="title-project">{title}</h3>
      <div className="links">
        <a href={githubLink}>
          <div className="link--github">
            <img src={githubLogo} alt={"Github logo"} />

            <h4>code</h4>
          </div>
        </a>
        <a href={demoLink}>
          <div className="link--demo">
            <h4>demo</h4>
          </div>
        </a>
      </div>
    </div>
  );
};
