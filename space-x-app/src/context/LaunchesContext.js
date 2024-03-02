import { createContext, useEffect, useReducer } from "react";
import { launchesReducer, initialState } from "../reducer/launchesReducer";
import instance from "../services/api";
export const LaunchesContext = createContext();

const LaunchesContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(launchesReducer, initialState);

  // useEffect(() => {
  //   dispatch({ type: "FETCH_LAUNCHES_REQUEST" });
  //   instance
  //     .get("/launches")
  //     .then((res) => {
  //       dispatch({
  //         type: "FETCH_LAUNCHES_SUCCESS",
  //         payload: res.data.slice(0, 10),
  //       });
  //     })
  //     .catch((error) => {
  //       dispatch({
  //         type: "FETCH_LAUNCHES_FAILURE",
  //         payload: error.response,
  //       });
  //     });
  // }, []);

  return (
    <LaunchesContext.Provider value={{ state, dispatch }}>
      {children}
    </LaunchesContext.Provider>
  );
};

export default LaunchesContextProvider;
