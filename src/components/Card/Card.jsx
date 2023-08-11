import React from "react";
import styles from "./Card.module.css";
import CardItem from "../CardItem/CardItem";

const Card = ({countries}) => {
 
  return (
    <ul className={styles.card}>
      {
        countries.map((country,index)=>   <CardItem country={country} key={index}/>)
      }
  
    </ul>
  );
};

export default Card;
