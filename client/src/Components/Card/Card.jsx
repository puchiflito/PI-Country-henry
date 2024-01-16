import { Link } from "react-router-dom";
import style from "../CSS/Card.module.css";
const Card = (props) => {
  return (
    <div className={style.card}>
      <Link to={`/detail/${props.id}`}>
        <img src={props.image} alt="imagen de la bandera del pais" />
        <h2>{props.name}</h2>
        <h2>{props.continents}</h2>
      </Link>
    </div>
  );
};

export default Card;
