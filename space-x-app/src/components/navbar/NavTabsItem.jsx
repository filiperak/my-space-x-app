import { Link } from "react-router-dom";

const NavTabsItem = ({ value }) => {
  return <Link to={value.toLowerCase()}>{value}</Link>;
};

export default NavTabsItem;
