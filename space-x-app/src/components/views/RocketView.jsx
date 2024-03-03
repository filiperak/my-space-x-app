import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate, Navigate } from "react-router-dom";
import instance from "../../services/api";
import { RocketContext } from "../../context/RocketContext";

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
      <button onClick={backBtn}>back to rockets</button>
      rocketView single
      {/* {launch.name} */}
    </div>
  );
};

export default RocketView;
