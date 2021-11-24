import React, { createContext, useReducer } from "react";

export const CalcContext = createContext();

export const ACTIONS = {
  ADD_DIGIT: "add-digit",
  CHOOSE_OPERATION: "choose-operation",
  CLEAR: "clear",
  DELETE_DIGIT: "delete-digit",
  EVALUATE: "evaluate",
};

const initialState = {};

function reducer(state, { type, payload }) {
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      if (state.overwrite) {
        return {
          ...state,
          current: payload.digit,
          overwrite: false,
        };
      }
      if (payload.digit === "0" && state.current === "0") {
        return state;
      }
      if (payload.digit === ".") {
        if (!state.current)
          return {
            ...state,
            current: "0.",
          };
        else if (state.current.includes(".")) return state;
      }

      return {
        ...state,
        current: `${state.current || ""}${payload.digit}`,
      };
    case ACTIONS.CHOOSE_OPERATION:
      if (state.current == null && state.previous == null) {
        return state;
      }

      if (state.current == null) {
        return {
          ...state,
          operation: payload.operation,
        };
      }

      if (state.previous == null) {
        return {
          ...state,
          operation: payload.operation,
          previous: state.current,
          current: null,
        };
      }

      return {
        ...state,
        previous: evaluate(state),
        operation: payload.operation,
        current: null,
      };
    case ACTIONS.CLEAR:
      return {};
    case ACTIONS.DELETE_DIGIT:
      if (state.overwrite) {
        return {
          ...state,
          overwrite: false,
          current: null,
        };
      }
      if (state.current == null) return state;
      if (state.current.length === 1) {
        return { ...state, current: null };
      }
      return {
        ...state,
        current: state.current.slice(0, -1),
      };
    case ACTIONS.EVALUATE:
      if (
        state.operation == null ||
        state.current == null ||
        state.previous == null
      ) {
        return state;
      }

      return {
        ...state,
        overwrite: true,
        previous: null,
        operation: null,
        current: evaluate(state),
      };
    default:
      break;
  }
}

function evaluate({ current, previous, operation }) {
  const prev = parseFloat(previous);
  const curr = parseFloat(current);
  if (isNaN(prev) || isNaN(curr)) return "";
  let computation = "";
  switch (operation) {
    case "+":
      computation = prev + curr;
      break;
    case "-":
      computation = prev - curr;
      break;
    case "x":
      computation = prev * curr;
      break;
    case "÷":
      computation = prev / curr;
      break;
    default:
      break;
  }

  return computation.toString();
}

const INTEGER_FORMATTER = new Intl.NumberFormat("en-us", {
  maximumFractionDigits: 0,
});

export function formatOperand(operand) {
  if (operand == null) return;
  const [integer, decimal] = operand.split(".");
  if (decimal == null) return INTEGER_FORMATTER.format(integer);
  return `${INTEGER_FORMATTER.format(integer)}.${decimal}`;
}

export function CalcProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CalcContext.Provider value={{ state, dispatch }}>
      {children}
    </CalcContext.Provider>
  );
}
