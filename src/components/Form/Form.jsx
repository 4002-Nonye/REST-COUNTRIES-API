import React from "react";
import styles from "./Form.module.css";
import Filter from "../Filter/Filter";

const Input = () => {
  return (
    <div className={styles.formContainer}>
      <div className={styles.row}>
        <form action="" className={styles.form}>
          <img src="search-sharp.svg" alt="search-icon" />
          <input type="text" placeholder="Search for a country" />
        </form>

        <Filter />
      </div>
    </div>
  );
};

export default Input;
