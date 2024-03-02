import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate, Navigate } from "react-router-dom";
import instance from "../../services/api";
import { LaunchesContext } from "../../context/LaunchesContext";

const LaunchView = () => {
  const [launch, setLaunch] = useState(null);
  //   const { state } = useContext(LaunchesContext);

  const navigate = useNavigate();

  const { launchId } = useParams();
  console.log(launchId);

  const backBtn = () => {
    navigate(-1);
  };

  useEffect(() => {
    // const myLaunch = state.launches.filter(
    //   (launch) => launch.id === launchId
    // )[0];
    // console.log("mylaunch", myLaunch);
    // setLaunch(myLaunch);
    instance.get(`/launches/${launchId}`).then((res) => setLaunch(res.data));
  }, []);

  return (
    <div>
      <button onClick={backBtn}>back to launches</button>
      LaunchView single
      {/* {launch.name} */}
    </div>
  );
};

export default LaunchView;
