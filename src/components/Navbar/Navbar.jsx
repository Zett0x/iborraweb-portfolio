import { useDispatch, useSelector } from "react-redux";
import { uiCloseBurgerMenu } from "../../actions/ui";
import { BurgerMenu } from "./BurgerMenu/BurgerMenu";
import "./Navbar.scss";
export const Navbar = () => {
  const { burgerMenuOpen: menuOpen } = useSelector((state) => state.ui);
  const dispatch = useDispatch();
  const handleClick = () => {
    menuOpen && dispatch(uiCloseBurgerMenu());
  };

  return (
    <nav className="app__navbar-container">
      <div className="app__navbar-logo">
        <h1>{"< Iborra Web />"}</h1>
      </div>

      <ul className={`app__navbar-links ${menuOpen ? "show" : ""}`}>
        <li className="app__navbar-link">
          <a href="#home" onClick={handleClick}>
            Home
          </a>
        </li>
        <li className="app__navbar-link">
          <a href="#about" onClick={handleClick}>
            About
          </a>
        </li>
        <li className="app__navbar-link">
          <a href="#skills" onClick={handleClick}>
            Skills
          </a>
        </li>
        <li className="app__navbar-link">
          <a href="#projects" onClick={handleClick}>
            Projects
          </a>
        </li>
        <li className="app__navbar-link">
          <a href="#contact" onClick={handleClick}>
            Contact
          </a>
        </li>
      </ul>

      <BurgerMenu />
    </nav>
  );
};
