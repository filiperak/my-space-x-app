import { useContext, useEffect } from "react";
import { LaunchesContext } from "../../context/LaunchesContext";

const ShipsView = () => {
  const { state, dispatch } = useContext(LaunchesContext);
  const { loading, error, launches } = state;

  const fetchLaunches = () => {
    // ...
  };

  useEffect(() => {
    if (launches.length === 0) {
      fetchLaunches();
    }
  }, []);

  return (
    <>
      <h1>ShipsView</h1>
    </>
  );
};

export default ShipsView;
