import React from "react";
import styles from "./CardItem.module.css";
import { Link } from "react-router-dom";

const CardItem = ({ country }) => {
  return (
    <>
      <li className={styles.div}>
        <Link
          to={`${country.cca2}`}
          className={styles.link}
        >
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
        </Link>
      </li>
    </>
  );
};

export default CardItem;
