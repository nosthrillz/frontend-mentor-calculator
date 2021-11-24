import styles from "./Keypad.module.scss";
import { ACTIONS, CalcContext } from "../../features/CalcContext";
import { useContext } from "react";
import KeyDigit from "./KeyDigit";
import KeyOperation from "./KeyOperation";

const Keypad = () => {
  const { dispatch } = useContext(CalcContext);

  return (
    <div className={styles.wrapper}>
      <KeyDigit value="7" />
      <KeyDigit value="8" />
      <KeyDigit value="9" />
      <KeyOperation
        styleType="del"
        value="DEL"
        onClick={() => dispatch({ type: ACTIONS.DELETE_DIGIT })}
      />
      <KeyDigit value="4" />
      <KeyDigit value="5" />
      <KeyDigit value="6" />
      <KeyOperation styleType="main" value="+" />
      <KeyDigit value="1" />
      <KeyDigit value="2" />
      <KeyDigit value="3" />
      <KeyOperation styleType="main" value="-" />
      <KeyDigit value="." />
      <KeyDigit value="0" />
      <KeyOperation styleType="main" value="/" />
      <KeyOperation styleType="main" value="x" />
      <KeyOperation
        styleType="del"
        value="RESET"
        onClick={() => dispatch({ type: ACTIONS.CLEAR })}
      />
      <KeyOperation
        styleType="equal"
        value="="
        onClick={() => dispatch({ type: ACTIONS.EVALUATE })}
      />
    </div>
  );
};

export default Keypad;
