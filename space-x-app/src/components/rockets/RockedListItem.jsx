import { Card } from "../../styledComponents/GlobalStyles";
import { Link } from "react-router-dom";
const RocketListItem = ({ rocket }) => {
  return (
    <Link to={`/rockets/${rocket.id}`}>
      <Card>
        <h3>{rocket.name}</h3>
        <img src={rocket.flickr_images} alt={rocket.name} />
        <p>{rocket.description}</p>
      </Card>
    </Link>
  );
};

export default RocketListItem;
