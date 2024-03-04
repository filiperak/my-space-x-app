import { createContext, useEffect, useReducer } from "react";
import { shipsReducer,initialState } from "../reducer/shipsReducer";
import instance from "../services/api";
export const ShipsContext = createContext();

const ShipsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(shipsReducer, initialState);


  return (
    <ShipsContext.Provider value={{ state, dispatch }}>
      {children}
    </ShipsContext.Provider>
  );
};

export default ShipsContextProvider;
