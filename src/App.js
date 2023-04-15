import { useState } from "react";
import styles from "./App.module.css";
import Cards from "./components/Cards.jsx";
import NavBar from "./components/NavBar.jsx";
import { Routes, Route, useLocation } from "react-router-dom";
import Detail from "./components/Detail.jsx";
import Form from "./components/Form.jsx";
import About from "./components/About.jsx";

function App() {
  const location = useLocation();
  const [characters, setCharacters] = useState([]);

  function onSearch(id) {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          let exist = characters.find((e) => e.id === data.id);
          if (exist) {
            alert("el personaje existe");
          } else {
            setCharacters((oldChars) => [...oldChars, data]);
          }
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((error) => {
        console.log("Error al buscar el personaje: ", error);
        window.alert("Ocurrió un error al buscar el personaje");
      });
  }
  const onClose = (characterId) => {
    setCharacters((chars) => {
      return chars.filter((char) => char.id !== characterId);
    });
  };
  return (
    <div className={styles.App}>
      <div>
        {location.pathname === "/" ? null : <NavBar onSearch={onSearch} />}
      </div>
      <Routes>
        <Route path="/" element={<Form />}></Route>
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        ></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/detail/:detailId" element={<Detail />}></Route>
      </Routes>
    </div>
  );
}

export default App;
