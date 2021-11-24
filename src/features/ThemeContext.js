import React, { createContext, useReducer } from "react";

export const ThemeContext = createContext();

const initialState = {
  theme: 0,
};

const themeReducer = (state, action) => ({ theme: parseInt(action) });

export function ThemeProvider({ children }) {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
}
