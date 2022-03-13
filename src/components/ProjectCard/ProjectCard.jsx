import "./ProjectCard.scss";
import githubLogo from "../../assets/github.svg";
const imagesProject = require.context("../../assets/projects", true);

export const ProjectCard = ({ img, title, githubLink, demoLink }) => {
  return (
    <div className="project-card">
      <div className="project-card--image">
        <img src={imagesProject(`./${img}`)} alt="project" />
        {/* <img src={img} alt="project" /> */}
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
