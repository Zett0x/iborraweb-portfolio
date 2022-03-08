import { SkillCard } from "../../components/SkillCard/SkillCard";
import javascript from "../../assets/javascript.svg";
import css from "../../assets/css.svg";
import html from "../../assets/html.svg";
import react from "../../assets/react.svg";
import redux from "../../assets/redux.svg";
import git from "../../assets/git.svg";
import nodejs from "../../assets/nodejs.svg";

import "./Skills.scss";

export const Skills = () => {
  const skillsLogos = [html, css, javascript, react, redux, git, nodejs];
  return (
    <section id="skills">
      <div className="text-container">
        <h3>
          Web development with the latest technologies used by companies such as
          <span className="facebook-text"> Facebook</span>,<span> AirBnb</span>,{" "}
          <span>Uber</span>, <span className="netflix-text">Netflix</span>,{" "}
          <span className="twitter-text">Twitter</span> y <span>Paypal</span>.
        </h3>
        <h3 className="text-mobile">
          Web development with the latest technologies!
        </h3>
      </div>

      <div className="skills-container">
        {skillsLogos.map((logo) => (
          <SkillCard key={logo} img={logo} />
        ))}
      </div>
    </section>
  );
};
