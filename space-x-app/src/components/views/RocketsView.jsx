import { useState, useEffect, useContext } from "react";
import instance from "../../services/api";
import Loading from "../loading/Loading";
import Error from "../error/Error";
import { RocketContext } from "../../context/RocketContext";
import RocketList from "../rockets/RocketList";

const RocketsView = () => {
  const { state, dispatch } = useContext(RocketContext);
  const { rockets, loading, error } = state;

  useEffect(() => {
    console.log("ovde je trigerovan fetch");
    dispatch({ type: "FETCH_ROCKETS_REQUEST" });
    instance
      .get("/rockets")
      .then((res) => {
        console.log(res);
        dispatch({
          type: "FETCH_ROCKETS_SUCCESS",
          payload: res.data.slice(0, 10),
        });
      })
      .catch((error) => {
        dispatch({
          type: "FETCH_ROCKETS_FAILURE",
          payload: error.response,
        });
      });
  }, []);



  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  return (
    <div>
      <h1>Launches View</h1>
      <RocketList rockets={rockets} />
    </div>
  );


};

export default RocketsView;
