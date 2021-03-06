import { Navbar } from "../../components/Navbar/Navbar";
import "./Header.scss";

import photo from "../../assets/profile.png";
import linkedin from "../../assets/linkedin.svg";
import github from "../../assets/github.svg";

export const Header = () => {
  return (
    <div id="home">
      <Navbar />
      <div className="app__header-content">
        <div className="app__header-content-title">
          <h1>👋 I am Francisco Iborra</h1>
          <p>{"< Full Stack Developer />"}</p>
        </div>
        <div className="app__header-content-media">
          <div className="header-img">
            <img src={photo} alt="francisco iborra" />
          </div>
          <div className="header-social-media">
            <a
              href="https://www.linkedin.com/in/francisco-javier-iborra-castro-4311691a4/"
              // target="_blank"
              // rel="noreferrer"
            >
              <img
                className="linkedin-logo"
                src={linkedin}
                alt="linkedin-logo"
              />
            </a>
            <a
              href="https://github.com/zett0x"
              // target="_blank"
              // rel="noreferrer"
            >
              <img className="github-logo" src={github} alt="github-logo" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
