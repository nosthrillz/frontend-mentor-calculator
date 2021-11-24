import { useContext } from "react";
import { ACTIONS, CalcContext } from "../../features/CalcContext";
import Key from "../ui/Key";

const KeyDigit = ({ value }) => {
  const { dispatch } = useContext(CalcContext);

  return (
    <Key
      value={value}
      onClick={() =>
        dispatch({
          type: ACTIONS.ADD_DIGIT,
          payload: { digit: value },
        })
      }
    />
  );
};

export default KeyDigit;
