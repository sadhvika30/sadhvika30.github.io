<<<<<<< HEAD
import React, { createContext, useReducer } from "react";

export const ThemeContext = createContext();
const initialState = { darkMode: true };

const themeReducer = (state, action) => {
  switch (action.type) {
    case "LIGHTMODE":
      return { darkMode: false };
    case "DARKMODE":
      return { darkMode: true };
    default:
      return state;
  }
};

export function ThemeProvider(props) {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  return (
    <ThemeContext.Provider
      value={{ state: false || state, dispatch: dispatch }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
}
=======
import React, { createContext, useReducer } from "react";

export const ThemeContext = createContext();
const initialState = { darkMode: true };

const themeReducer = (state, action) => {
  switch (action.type) {
    case "LIGHTMODE":
      return { darkMode: false };
    case "DARKMODE":
      return { darkMode: true };
    default:
      return state;
  }
};

export function ThemeProvider(props) {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  return (
    <ThemeContext.Provider
      value={{ state: false || state, dispatch: dispatch }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
}
>>>>>>> 1d9431ce13051575ef071c3da2db0f11f1c2fd64
