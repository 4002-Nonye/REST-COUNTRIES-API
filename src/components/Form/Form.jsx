import React, { useEffect, useState } from "react";
import styles from "./Form.module.css";
import Filter from "../Filter/Filter";

const Form = ({ region,setRegion ,query,setQuery}) => {


  return (
    <div className={styles.formContainer}>
      <div className={styles.row}>
        <form action="" className={styles.form} onSubmit={(e)=>e.preventDefault()}>
          <img src="search-sharp.svg" alt="search-icon" />
          <input
            type="text"
            placeholder="Search for a country"
            onChange={(e) => setQuery(e.target.value)}
            value={query}
          />
        </form>

        <Filter region={region} setRegion={setRegion} />
      </div>
    </div>
  );
};

export default Form;
