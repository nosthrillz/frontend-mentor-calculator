import Keypad from "./components/layout/Keypad";
import ThemeSwitch from "./components/ui/ThemeSwitch";
import { ThemeContext } from "./features/ThemeContext";
import { CalcContext, formatOperand } from "./features/CalcContext";

import { useContext, useEffect } from "react";

function App() {
  const themeCtx = useContext(ThemeContext);
  const theme = themeCtx.state.theme;
  const { state } = useContext(CalcContext);

  useEffect(() => console.log(state), [state]);

  const appClasses = computeClass(theme, "App", ["theme2", "theme3"]);
  const displayClasses = computeClass(theme, "display", ["theme2", "theme3"]);
  const keypadClasses = computeClass(theme, "keypad", ["theme2", "theme3"]);

  return (
    <div className={appClasses}>
      <div className="calculator">
        <div className="head">
          <h1>calc</h1>
          <ThemeSwitch />
        </div>
        <div className={displayClasses}>
          <p className="previous">
            {formatOperand(state.previous)} {state.operation}
          </p>
          <p className="current">{formatOperand(state.current)}</p>
        </div>
        <div className={keypadClasses}>
          <Keypad />
        </div>
      </div>
    </div>
  );
}

export default App;

const computeClass = (theme, main, [conditionTheme2, conditionTheme3]) => {
  if (theme === 1) return main + " " + conditionTheme2;
  if (theme === 2) return main + " " + conditionTheme3;
  return main;
};
