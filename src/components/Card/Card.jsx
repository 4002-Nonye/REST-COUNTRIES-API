import React, { useState } from "react";
import styles from "./Card.module.css";
import CardItem from "../CardItem/CardItem";
import Spinner from "../Spinner/Spinner";
import Error from "../Error/Error";
import { Link } from "react-router-dom";

const Card = ({ countries, isLoading, region, query, setSelectedCountry }) => {
  const [showError, setShowError] = useState(true);
  // HANDLE FILTER
  const filterByRegion = countries.filter((country) => {
    if (region === "Filter by Region") {
      return country;
    } else return country.region.includes(region);
  });

  // HANDLE SEARCH
  const filterByName = filterByRegion.filter((term) =>
    term.name.common.toLowerCase().includes(query.toLowerCase())
  );

  if (!countries) return;
  return (
    <>
      <div>
        {filterByName.length === 0 && !isLoading ? (
          <Error message="💥 Country not found!" />
        ) : (
          ""
        )}

        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <ul className={styles.card}>
              {filterByName.map((country, index) => (
              
                   <CardItem
                    country={country}
                    key={index}
                    isLoading={isLoading}
                    setSelectedCountry={setSelectedCountry}
                  />
           
                  
             
              ))}
            </ul>
          </>
        )}
      </div>
    </>
  );
};

export default Card;
