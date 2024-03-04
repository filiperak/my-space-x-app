import { Card } from "../../styledComponents/GlobalStyles";
import { Link } from "react-router-dom";
const ShipListItem = ({ ship }) => {
  return (
    <Link to={`/ships/${ship.id}`}>
      <Card>
        <h3>{ship.name}</h3>
        <img src={ship.image} alt={ship.name} />
        <p>{ship.home_port}</p>
      </Card>
    </Link>
  );
};

export default ShipListItem;
