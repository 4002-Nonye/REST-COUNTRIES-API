import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import CountryDetails from "../../components/CountryDetails/CountryDetails";
import Button from "../../components/Button/Button";
import styles from "./Details.module.css";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

const Details = ({ selectedCountry }) => {
  const navigate = useNavigate();
  const [countryDetails, setCountryDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { name } = useParams();
  const [searchParams, setSearchParams] = useSearchParams()
  

  useEffect(() => {
    const getCountryDetails = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://restcountries.com/v3.1/alpha/${name}`
        );

        if (!response.ok) throw new Error("💥 Failed to fetch");

        const data = await response.json();
        console.log(data[0])

        setCountryDetails(data[0]);
      } catch (error) {
        console.error(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getCountryDetails();
  }, [name]);

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Button className={styles.btn} onClick={() => navigate(-1)}>
          <span>
            {" "}
            <img src="arrow-back-outline.svg" alt="back-btn" />{" "}
          </span>
          Back
        </Button>
        <CountryDetails countryDetails={countryDetails} isLoading={isLoading} />
      </div>
    </>
  );
};

export default Details;
