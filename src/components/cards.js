import { Link } from "react-router-dom";

const Card = ({ musicData }) => {
  return (
    <Link to={`/detail/${musicData.id.attributes[`im:id`]}`}>
      <span className="card">
        <img src={musicData[`im:image`][1].label} alt={""} />
        <span>{musicData.title.label}</span>
      </span>
    </Link>
  );
};

export default Card;
