import styles from "./Card.module.css";
import { Link } from "react-router-dom";

export default function Card(props) {
  return (
    <div className={styles.container}>
      <div>
        <button className={styles.divBoton} onClick={props.onClose}>
          X
        </button>
      </div>
      <div className={styles.img}>
        <Link to={`/detail/${props.id}`}>
          <h2>{props.name}</h2>
          <h2>{props.species}</h2>
          <h2>{props.gender}</h2>
          <img src={props.image} alt="img" />
          {"char "}
        </Link>
      </div>
    </div>
  );
}
