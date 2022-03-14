import "./Projects.scss";
import { projects } from "./projects-data";
import { ProjectCard } from "../../components/ProjectCard/ProjectCard";
//import heroesImg from "../../assets/projects/heroes-info.png";
export const Projects = () => {
  //console.log(process.env.PUBLIC_URL);
  return (
    <section id="projects">
      <div className="projects-main-content">
        <h2 className="projects-title">Here are my personal projects!</h2>
      </div>

      <div className="projects-container">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            img={project.imgURL}
            title={project.title}
            githubLink={project.githubURL}
            demoLink={project.demoURL}
            description={project.description}
          />
        ))}
      </div>
    </section>
  );
};
