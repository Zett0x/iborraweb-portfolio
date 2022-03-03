import { useSelector, useDispatch } from "react-redux";

import { uiOpenBurgerMenu, uiCloseBurgerMenu } from "../../../actions/ui";

import "./BurgerMenu.scss";

export const BurgerMenu = () => {
  const dispatch = useDispatch();
  //const [menuOpen, setMenuOpen] = useState(false);
  const { burgerMenuOpen: menuOpen } = useSelector((state) => state.ui);
  //VER SI ELIMINAR EL STATE Y USAR REDUX SELECTOR
  const handleMenuClick = () => {
    if (!menuOpen) {
      //setMenuOpen(true);
      dispatch(uiOpenBurgerMenu());
    } else {
      //setMenuOpen(false);
      dispatch(uiCloseBurgerMenu());
    }
  };
  return (
    <>
      <div
        className={`menu-btn ${menuOpen ? "open" : ""}`}
        onClick={handleMenuClick}
      >
        <div className={`menu-btn__burger`}></div>
        {/* <ul className={`menu-btn__burger-items ${menuOpen ? "show" : ""}`}>
          <li className="btn__burger-link">
            <a href="#home">Inicio</a>
          </li>
          <li className="btn__burger-link">
            <a href="#about">Sobre mí</a>
          </li>
          <li className="btn__burger-link">
            <a href="#skills">Habilidades</a>
          </li>
          <li className="btn__burger-link">
            <a href="#projects">Proyectos</a>
          </li>
          <li className="btn__burger-link">
            <a href="#contact">Contacto</a>
          </li>
        </ul> */}
      </div>
    </>
  );
};
