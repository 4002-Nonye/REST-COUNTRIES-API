import React from "react";
import Header from "../../components/Header/Header";
import CountryDetails from "../../components/CountryDetails/CountryDetails";
import Button from "../../components/Button/Button";
import styles from "./Details.module.css";


const Details = ({ selectedCountry }) => {

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Button className={styles.btn}>
          {/* <span>  <img src="arrow-back-outline.svg" alt="back-btn" /> </span> */}
          Back
        </Button>
        <CountryDetails selectedCountry={selectedCountry} />
      </div>
    </>
  );
};

export default Details;
