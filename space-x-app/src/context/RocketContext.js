import { createContext, useEffect, useReducer } from "react";
import { rocketReducer,initialState } from "../reducer/rocketReducer";
import instance from "../services/api";
export const RocketContext = createContext();

const RocketContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(rocketReducer, initialState);


  return (
    <RocketContext.Provider value={{ state, dispatch }}>
      {children}
    </RocketContext.Provider>
  );
};

export default RocketContextProvider;
