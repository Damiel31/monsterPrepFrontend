/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";

export const MonsterprepContext = createContext();

const MonsterprepReducer = (state, action) => {
  switch (action.type) {
    case "SET_MONSTERLISTS":
      return {
        monsterLists: action.payload,
      };
    case "CHANGE_FORM":
      return {
        prepForm: action.payload,
      };
    default:
      return state;
  }
};

export const MonsterprepContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(MonsterprepReducer, {
    monsterLists: null,
    prepForm: false,
  });
  return (
    <MonsterprepContext.Provider value={{ ...state, dispatch }}>
      {children}
    </MonsterprepContext.Provider>
  );
};
