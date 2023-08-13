import React from "react";
import styles from "./CountryDetails.module.css";

const CountryDetails = ({ selectedCountry }) => {
  return <div className={styles.container}>{selectedCountry.name.common}</div>;
};

export default CountryDetails;
