import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

const Header = () => {
 
  return (
    <header className={styles.header}>
      <div className={styles.headerDiv}>
        <h1>Where in the world? </h1>
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;
