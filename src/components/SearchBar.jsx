import { useState } from "react";

export default function SearchBar(props) {
  const [character, setCharacters] = useState("");

  function handleInput(event) {
    setCharacters(event.target.value);
  }

  return (
    <div>
      <input
        type="text"
        name="search"
        placeholder="ingresa el Id"
        onChange={handleInput}
        value={character}
      />
      <button onClick={() => props.onSearch(character)}>Agregar</button>
    </div>
  );
}
