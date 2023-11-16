import { useContext } from "react";
import { MonsterprepContext } from "../context/MonsterprepContext";

export const useMonsterprepContext = () => {
  const context = useContext(MonsterprepContext);

  if (!context) {
    throw Error(
      "useMonsterprepContext must be inside of a MonsterprepProvider"
    );
  }

  return context;
};
