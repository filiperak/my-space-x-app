// import { useState, useEffect, useContext } from "react";
// import instance from "../../services/api";

// import Loading from "../loading/Loading";
// import Error from "../error/Error";
// import ShipList from "../ships/ShipList";

// const ShipView = () => {


//   const [ships, setShips] = useState(null);
//   const [error, setError] = useState(false);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     instance
//       .get("/ships")
//       .then((res) => {
//         console.log(res); 
//         setShips(res.data.slice(0, 10));
//       })

//       .catch((error) => {
//         console.log(error);
//         setError(true);
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   }, []);



//   return (
//     <>
//       <h1>Ships View</h1>
//       {loading ? (
//         <Loading />
//       ) : error ? (
//         <Error error={error} />
//       ) : (
//         <ShipList ships={ships} />
//       )}
//     </>
//   );
// };

// export default ShipView;

import { useState, useEffect, useContext } from "react";
import instance from "../../services/api";

import Loading from "../loading/Loading";
import Error from "../error/Error";
import { ShipsContext } from "../../context/ShipsContext";
import ShipList from "../ships/ShipList";

const ShipsView = () => {
  const { state, dispatch } = useContext(ShipsContext);
  const { ships, loading, error } = state;

  useEffect(() => {
    console.log("ovde je trigerovan fetch");
    dispatch({ type: "FETCH_SHIPS_REQUEST" });
    instance
      .get("/ships")
      .then((res) => {
        console.log(res);
        dispatch({
          type: "FETCH_SHIPS_SUCCESS",
          payload: res.data.slice(0, 10),
        });
      })
      .catch((error) => {
        dispatch({
          type: "FETCH_SHIPS_FAILURE",
          payload: error.response,
        });
      });
  }, []);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  return (
    <div>
      <h1>Ships View</h1>
      <ShipList ships={ships} />
    </div>
  );

};

export default ShipsView;
