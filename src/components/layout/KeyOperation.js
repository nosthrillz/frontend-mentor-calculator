import { useContext } from "react";
import { ACTIONS, CalcContext } from "../../features/CalcContext";
import Key from "../ui/Key";

const KeyOperation = ({ value, styleType }) => {
  const { dispatch } = useContext(CalcContext);

  const clickSwitch = () => {
    switch (value) {
      case "DEL":
        dispatch({ type: ACTIONS.DELETE_DIGIT });
        break;
      case "RESET":
        dispatch({ type: ACTIONS.CLEAR });
        break;
      case "=":
        dispatch({ type: ACTIONS.EVALUATE });
        break;
      default:
        dispatch({
          type: ACTIONS.CHOOSE_OPERATION,
          payload: { operation: value },
        });
        break;
    }
  };

  return <Key styleType={styleType} value={value} onClick={clickSwitch} />;
};

export default KeyOperation;
