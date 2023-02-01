import React, { useContext } from "react";
import items from "../data";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  return (
    <AppContext.Provider value={{ items }}>{children}</AppContext.Provider>
  );
};

export const useGlobaleContext = () => {
  return useContext(AppContext);
};

export { AppProvider };
