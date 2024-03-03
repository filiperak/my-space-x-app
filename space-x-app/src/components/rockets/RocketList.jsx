import RocketListItem from "./RockedListItem";

const RocketList = ({ rockets }) => {
  return (
    <div>
      {rockets.map((rocket) => (
        <RocketListItem key={rocket.id} rocket={rocket} />
      ))}
    </div>
  );
};

export default RocketList;
