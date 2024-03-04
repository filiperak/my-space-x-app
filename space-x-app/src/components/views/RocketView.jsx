import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate, Navigate } from "react-router-dom";
import instance from "../../services/api";
import { RocketContext } from "../../context/RocketContext";
import { ROCKETS } from "../../constants/routes";
import Loading from "../loading/Loading";
import Error from "../error/Error";


const RocketView = () => {
  const [rocket, setRocket] = useState(null);
  const navigate = useNavigate();
  const { rocketId } = useParams();

  const backBtn = () => {
    navigate(-1);
  };

  useEffect(() => {
    instance.get(`/rockets/${rocketId}`).then((res) => setRocket(res.data));
  }, []);

  return (
    <div>
      {rocket ? (
        <>
          <p>{rocket.name}</p>
          <img src={rocket.flickr_images} alt={rocket.name} />
          <p>{rocket.description}</p>
        </>
      ) : (
        <Loading/>
      )}
      <button onClick={backBtn} className="back-btn">back to rockets</button>
    </div>
  );
};

export default RocketView;
