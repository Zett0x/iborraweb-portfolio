import "./ProjectCard.scss";

import githubLogo from "../../assets/github.svg";
export const ProjectCard = ({ img, title, githubLink, demoLink }) => {
  return (
    <div className="project-card">
      <div className="project-card--image">
        <img src={img} alt="project" />
      </div>
      <h3>{title}</h3>
      <div className="links">
        <div className="link--github">
          <a href={githubLink}>
            <img src={githubLogo} />
          </a>
        </div>

        <div className="link--demo">
          <a href={demoLink}>
            <img src={githubLogo} />
          </a>
        </div>
      </div>
    </div>
  );
};
