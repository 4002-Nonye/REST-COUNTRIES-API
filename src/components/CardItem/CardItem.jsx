import React from "react";
import styles from "./CardItem.module.css";

const CardItem = ({ country }) => {
  console.log(country);
  //   const { svg } = country.flags;
  return (
    <li className={styles.div} onClick={() => console.log("ll")}>
      <div className={styles.imgHolder}>
        <img src={country.flags.svg} alt={country.flags.alt} />
      </div>

      <div className={styles.info}>
        <h2>{country.name.common}</h2>
        <p>
          Population: <span>{country.population.toLocaleString()}</span>{" "}
        </p>
        <p>
          Region: <span>{country.region}</span>
        </p>
        <p>
          Capital: <span>{country.capital}</span>{" "}
        </p>
      </div>
    </li>
  );
};

export default CardItem;
