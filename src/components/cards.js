import { Link } from "react-router-dom";

const Card = ({ musicData }) => {
  return (
    <Link to={`/detail/${musicData.id.attributes[`im:id`]}`}>
      <div>
        <img src={musicData[`im:image`][1].label} alt={""} />
        <div>{musicData.title.label}</div>
      </div>
    </Link>
  );
};

export default Card;
