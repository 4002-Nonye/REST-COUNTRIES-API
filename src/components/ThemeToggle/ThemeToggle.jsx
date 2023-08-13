import React from "react";
import styles from "./ThemeToggle.module.css";
import { useState } from "react";
import { useEffect } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(getInitialTheme());

  function getInitialTheme() {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme : "light";
  }

  useEffect(() => {
    localStorage.setItem("theme", theme);

    if (theme === "dark") {
      document.body.classList.add("darkTheme");
    } else document.body.classList.remove("darkTheme");
  }, [theme]);

  const handleThemeChange = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className={styles.theme} onClick={handleThemeChange}>
      {" "}
      <img
        src={`${theme === "light" ? "moon-outline.svg" : "moon.svg"}`}
        alt="theme_img"
      />
      <span>{`${theme === "light" ? "Dark Mode" : "Light Mode"}`}</span>
    </div>
  );
};

export default ThemeToggle;
