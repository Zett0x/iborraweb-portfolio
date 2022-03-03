import { useState } from "react";
import "./BurgerMenu.scss";

export const BurgerMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    if (!menuOpen) {
      setMenuOpen(true);
    } else {
      setMenuOpen(false);
    }
  };
  return (
    <div
      className={`menu-btn ${menuOpen ? "open" : ""}`}
      onClick={handleMenuClick}
    >
      <div className="menu-btn__burger"></div>
    </div>
  );
};
