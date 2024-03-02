import { useState, useEffect, useContext } from "react";
import instance from "../../services/api";
import LaunchesList from "../launches/LaunchesList";
import Loading from "../loading/Loading";
import Error from "../error/Error";
import { LaunchesContext } from "../../context/LaunchesContext";

const LaunchesView = () => {
  const { state, dispatch } = useContext(LaunchesContext);
  const { launches, loading, error } = state;

  useEffect(() => {
    console.log("ovde je trigerovan fetch");
    dispatch({ type: "FETCH_LAUNCHES_REQUEST" });
    instance
      .get("/launches")
      .then((res) => {
        dispatch({
          type: "FETCH_LAUNCHES_SUCCESS",
          payload: res.data.slice(0, 10),
        });
      })
      .catch((error) => {
        dispatch({
          type: "FETCH_LAUNCHES_FAILURE",
          payload: error.response,
        });
      });
  }, []);

  // const [launches, setLaunches] = useState(null);
  // const [error, setError] = useState(false);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   instance
  //     .get("/launches")
  //     .then((res) => setLaunches(res.data.slice(0, 10)))
  //     .catch((error) => {
  //       setError(true);
  //     })
  //     .finally(() => {
  //       setLoading(false);
  //     });
  // }, []);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  return (
    <div>
      <h1>Launches View</h1>
      <LaunchesList launches={launches} />
    </div>
  );

  // return (
  //   <>
  //     <h1>LaunchesView</h1>
  //     {loading ? (
  //       <Loading />
  //     ) : error ? (
  //       <Error error={error} />
  //     ) : (
  //       <LaunchesList launches={launches} />
  //     )}
  //   </>
  // );
};

export default LaunchesView;
