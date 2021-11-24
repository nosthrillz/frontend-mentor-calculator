import { useContext } from "react";
import { ThemeContext } from "../../features/ThemeContext";
import { computeClasses } from "../../utils/computeClass";
import styles from "./ThemeSwitch.module.scss";

const ThemeSwitch = () => {
  const themeCtx = useContext(ThemeContext);
  const theme = themeCtx.state.theme;

  const circleClasses = computeClasses(
    theme,
    styles.circle,
    styles.pos2,
    styles.pos3
  );

  const clickHandler = () => {
    theme === 0 && themeCtx.dispatch(1);
    theme === 1 && themeCtx.dispatch(2);
    theme === 2 && themeCtx.dispatch(0);
  };

  return (
    <div className={styles.wrapper} onClick={clickHandler}>
      <div className={styles.theme}>THEME</div>
      <div className={styles.number}>
        <span>1</span>
        <span>2</span>
        <span>3</span>
      </div>
      <div className={styles.toggle}>
        <div className={circleClasses}></div>
      </div>
    </div>
  );
};

export default ThemeSwitch;
