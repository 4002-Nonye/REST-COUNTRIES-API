import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";

const Header = () => {
  const [isDark, setIsDark] = useState(false);

  const handleThemeChange = () => {
    setIsDark((dark)=>!dark);
   
  };

  useEffect(()=>{
    document.body.classList.toggle("darkTheme");
  },[isDark])
  return (
    <header className={styles.header}>
      <div className={styles.headerDiv}>
        <h1>Where in the world? </h1>
        <div className={styles.theme} onClick={handleThemeChange}>
          {" "}
          <img src={isDark ? "moon.svg" : "moon-outline.svg"} alt="theme_img" />
          <span >
            {isDark ? "Light Mode" : "Dark Mode"}
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
