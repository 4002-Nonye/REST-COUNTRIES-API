import React, { useState } from "react";
import styles from "./Filter.module.css";

const options = [
  "Filter by Region",
  "Africa",
  "America",
  "Asia",
  "Europe",
  "Oceania",
];

const Filter = ({region,setRegion}) => {
  
  const [isOpen, setIsOpen] = useState(false);

  // const handleChange = (e) => {
  //   setSelected(e.target.value);
  // };

  return (
    <div className={styles.container}>
      <div className={styles.select} onClick={() => setIsOpen((open) => !open)}>
        {region}{" "}
        <span>
          <img src="chevron-down-outline.svg" alt="" />
        </span>
      </div>

      {isOpen && (
        <ul className={styles.options}>
          {options.map((option, i) => (
            <li
              key={i}
              onClick={() => {
                setIsOpen(false);
                setRegion(option);
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Filter;
