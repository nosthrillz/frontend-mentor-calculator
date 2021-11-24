import { useContext } from "react";
import { ThemeContext } from "../../features/ThemeContext";
import { computeClasses } from "../../utils/computeClass";
import styles from "./Key.module.scss";

const Key = ({ value, onClick, styleType = "main" }) => {
  const themeCtx = useContext(ThemeContext);
  const theme = themeCtx.state.theme;

  const keyClasses = computeClasses(
    theme,
    styles.wrapper,
    styles.theme2,
    styles.theme3,
    styles[styleType]
  );

  return (
    <button className={keyClasses} onClick={onClick}>
      {value}
    </button>
  );
};

export default Key;
