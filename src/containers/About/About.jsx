import aboutImg from "../../assets/about.png";
import instaLogo from "../../assets/instagram.svg";
import "./About.scss";
export const About = () => {
  return (
    <section id="about" className="app__about">
      <div className="about-image">
        <img src={aboutImg} alt="francisco and his dog" />
      </div>

      <div className="about-text">
        <h1>About Me</h1>
        <br />

        <p>Curiosity and competitiveness define my personality.</p>
        <br />
        <p>
          I have a great vocation for technology and I am continuosly learning
          new technologies that solve business problems and/or social problems
          in the most efficient way.
        </p>
        <br />
        <p>I love animals, nature and learning/knowing different cultures.</p>
      </div>
      <div className="instagram-container">
        <a href="https://instagram.com/franib97">
          <img src={instaLogo} alt="instagram logo" />
        </a>
      </div>
    </section>
  );
};
