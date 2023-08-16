import React from "react";
import Button from "../Button/Button";
import styles from './PageNotFound.module.css'
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
    const navigate=useNavigate()
  return (
    <div className={styles.wrapper}>
      oops! Page Not Found
      <Button className={styles.btn} onClick={()=>navigate('/')}>Go back to homepage</Button>
    </div>
  );
};

export default PageNotFound;
