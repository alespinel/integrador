import Card from "./Card";
import styles from "./Cards.module.css";

export default function Cards(props) {
  const { characters } = props;
  return (
    <div className={styles.container}>
      {characters.map((c, index) => {
        return (
          <Card
            id={c.id}
            name={c.name}
            species={c.species}
            gender={c.gender}
            image={c.image}
            onClose={() => props.onClose(c.id)}
          />
        );
      })}
      <div>
        <h1 className={`${styles["home-title"]} my-4`}> Bienvenido </h1>
      </div>
    </div>
  );
}
