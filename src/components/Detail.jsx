import React, { useState, useEffect } from "react";
import style from "./Detail.module.css";
import { useParams } from "react-router-dom";

export default function Detail() {
  const { detailId } = useParams();
  const [setCharacter] = useState({});

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return () => {
      setCharacter({});
    };
  }, [detailId]);

  return (
    <div className={style.detail}>
      {/* Aquí va el código JSX para mostrar la información del personaje */}
    </div>
  );
}
