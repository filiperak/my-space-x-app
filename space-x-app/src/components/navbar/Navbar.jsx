// import logoSvg from "../../assets/SpaceX-Logo.svg";
import { NavTabs } from ".";
import { ReactComponent as Logo } from "../../assets/SpaceX-Logo.svg";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <Logo
        fill="white"
        onClick={() => navigate("/")}
        style={{ cursor: "pointer" }}
      />
      <NavTabs />
    </div>
  );
};

export default Navbar;
