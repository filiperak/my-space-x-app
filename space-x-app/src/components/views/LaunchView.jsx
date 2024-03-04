import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate, Navigate } from "react-router-dom";
import instance from "../../services/api";
import { LaunchesContext } from "../../context/LaunchesContext";
import Loading from "../loading/Loading";

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
      {launch? (
        <>
        <h3>{launch.name}</h3>
        <img src={launch.links.patch.small} alt={launch.name} />
        <p>{launch.details}</p>
        </>
      ) : (
        <Loading/>
      )}
      <button onClick={backBtn} className="back-btn">back to launches</button>
    </div>
  );
};

export default LaunchView;
