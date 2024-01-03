import { MainContext, _MainContext } from "../context/MainContext";
import { useContext } from "react";

export const useMainContext = () => {
  const context = useContext(MainContext);
  if (!context) {
    throw new Error("No context");
  }
  return context;
};
