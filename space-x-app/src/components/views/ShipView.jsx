import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate, Navigate } from "react-router-dom";
import instance from "../../services/api";
import { LaunchesContext } from "../../context/LaunchesContext";
import Loading from "../loading/Loading";

const LaunchView = () => {
  const [ship, setShip] = useState(null);
  const navigate = useNavigate();

  const { shipId } = useParams();
  const backBtn = () => {
    navigate(-1);
  };

  useEffect(() => {

    instance.get(`/ships/${shipId}`).then((res) => setShip(res.data));
  }, []);

  return (
    <div>
      {ship? (
        <>
        <h3>{ship.name}</h3>
        <img src={ship.links.patch.small} alt={ship.name} />
        <p>{ship.details}</p>
        </>
      ) : (
        <Loading/>
      )}
      <button onClick={backBtn} className="back-btn">back to ships</button>
    </div>
  );
};

export default LaunchView;
