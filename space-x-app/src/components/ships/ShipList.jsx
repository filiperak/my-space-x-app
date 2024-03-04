import ShipListItem from "./ShipListItem";


const ShipList = ({ ships }) => {
  return (
    <div>
      {ships.map((ship) => (
        <ShipListItem key={ship.id} ship={ship} />
      ))}
    </div>
  );
};

export default ShipList;
