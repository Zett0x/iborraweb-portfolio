import { types } from "../types/types";

const initialState = {
  burgerMenuOpen: false,
};

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.uiOpenBurgerMenu:
      return {
        ...state,
        burgerMenuOpen: true,
      };
    case types.uiCloseBurgerMenu:
      return {
        ...state,
        burgerMenuOpen: false,
      };

    default:
      return state;
  }
};
