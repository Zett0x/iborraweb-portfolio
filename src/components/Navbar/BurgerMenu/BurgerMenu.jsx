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
      </div>
    </>
  );
};
