import aboutImg from "../../assets/about.png";
import instaLogo from "../../assets/instagram-logo.png";
import "./About.scss";
export const About = () => {
  return (
    <div id="about" className="app__about">
      <div className="about-image">
        <img src={aboutImg} alt="francisco and his dog" />
      </div>

      <div className="about-text">
        <h1>Sobre mí</h1>
        <br />

        <p>
          is therefore always free from repetition, injected humour, or
          non-characteristic words etc.
        </p>
        <br />
        <p>
          Where does it come from? Contrary to popular belief, Lorem Ipsum is
          not simply random text. It has roots in a piece of classical Latin
          literature from 45 BC, making it over 2000 years old. Richard
        </p>
        <br />
        <p>
          What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
        </p>
      </div>
      <div className="instagram-container">
        <a href="https://instagram.com/franib97">
          <img src={instaLogo} alt="instagram logo" />
        </a>
      </div>
    </div>
  );
};
