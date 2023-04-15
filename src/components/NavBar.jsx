import React from "react";
import SearchBar from "./SearchBar";
import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";

export default function NavBar(props) {
  return (
    <div className={styles.nav}>
      <Link to="/Home">
        <div>
          <button>Home</button>
        </div>
      </Link>
      <Link to="/About">
        <div>
          <button>About</button>
        </div>
      </Link>

      <div>
        <SearchBar onSearch={props.onSearch} />
      </div>
    </div>
  );
}
