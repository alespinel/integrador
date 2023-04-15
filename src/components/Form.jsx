import React from "react";
import { Link } from "react-router-dom";
import styles from "./Form.module.css";

export default function Form() {
  function handleInputChange(e) {}
  return (
    <div>
      <form>
        <div className={styles.container}>
          <label>Username</label>
          <input
            type="text"
            name="username"
            pacerholder="Enter usename"
            onChange={(e) => handleInputChange(e)}
          ></input>
          <button type="submite">Login</button>
        </div>
      </form>

      <Link to="/home">
        <button>To Home</button>
      </Link>
    </div>
  );
}
