import { useSelector } from "react-redux";
import { BurgerMenu } from "./BurgerMenu/BurgerMenu";
import "./Navbar.scss";
export const Navbar = () => {
  const { burgerMenuOpen: menuOpen } = useSelector((state) => state.ui);
  console.log(menuOpen);
  return (
    <nav className="app__navbar-container">
      <div className="app__navbar-logo">
        <h1>{"< Iborra Web />"}</h1>
      </div>

      <ul className={`app__navbar-links ${menuOpen ? "show" : ""}`}>
        <li className="app__navbar-link">
          <a href="#home">Inicio</a>
        </li>
        <li className="app__navbar-link">
          <a href="#about">Sobre mí</a>
        </li>
        <li className="app__navbar-link">
          <a href="#skills">Habilidades</a>
        </li>
        <li className="app__navbar-link">
          <a href="#projects">Proyectos</a>
        </li>
        <li className="app__navbar-link">
          <a href="#contact">Contacto</a>
        </li>
      </ul>

      <BurgerMenu />
    </nav>
  );
};
