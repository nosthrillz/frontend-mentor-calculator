import React from "react";
import ReactDOM from "react-dom";
import "./styles/globals.scss";
import App from "./App";

import { ThemeProvider } from "./features/ThemeContext";
import { CalcProvider } from "./features/CalcContext";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <CalcProvider>
        <App />
      </CalcProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
