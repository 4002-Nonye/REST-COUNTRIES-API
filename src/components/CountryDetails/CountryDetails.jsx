import React from "react";
import styles from "./CountryDetails.module.css";
import Spinner from "../Spinner/Spinner";
import Error from "../Error/Error";
import { Link } from "react-router-dom";

const CountryDetails = ({ countryDetails, isLoading }) => {
  if (!countryDetails) return <Error message="💥 Country not found!" />;
  if (isLoading) return <Spinner />;

  const {
    continents,
    name,
    flags,
    population,
    tld,
    region,
    subregion,
    capital,
    currencies,
    languages,
    borders,
  } = countryDetails;

  return (
    <>
      {" "}
      <div className={styles.container}>
        <img src={flags.svg} alt="flag" className={styles.image} />

        <div className={styles.infoContainer}>
          <h2 className={styles.name}>{name.common}</h2>

          <div className={styles.info}>
            <div className={styles.title}>
              <p>
                Native Name:{" "}
                <span>{Object.values(name.nativeName)[0].common}</span>{" "}
              </p>
              <p>
                Population: <span>{population.toLocaleString()}</span>
              </p>
              <p>
                Region: <span>{region}</span>{" "}
              </p>
              <p>
                Sub Region: <span>{subregion}</span>
              </p>
              <p>
                Capital: <span>{capital}</span>
              </p>
            </div>
            <div className={styles.title}>
              <p>
                Top Level Domain: <span>{tld[0]}</span>{" "}
              </p>
              <p>
                Currencies: <span>{Object.values(currencies)[0].name}</span>
              </p>
              <p>
                Languages: <span>{Object.values(languages).join(", ")}</span>{" "}
              </p>
            </div>{" "}
          </div>

          <div className={styles.border}>
            <p>Border Countries:</p>
            {borders && borders.length > 0 ? (
              <div className={styles.borderContainer}>
                {" "}
                {borders.map((border, index) => (
                  <span className={styles.bord} key={index}>
                    <Link to={`/${border}`} className={styles.link}>
                      {border}
                    </Link>
                  </span>
                ))}
              </div>
            ) : (
              <span className={styles.noBord}>no borders found</span>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CountryDetails;
