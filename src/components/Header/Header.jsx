import React from "react";
import "./header.scss";
import { useState } from "react";

const Header = () => {
  const [isActive, setActive] = useState(false);

  const changeBG = () => {
    setActive(!isActive);

    //alternative um Styling an einem Element direkt über die onClick Funktion zu verändern:
    // e.target.style.backgroundColor = "blue",
    // e.target.style.fontSize = "2rem",
    // e.target.style.cursor = "pointer",
  };

  return (
    <header id="header">
      header
      <button className={isActive ? "active" : null} onClick={changeBG}>
        Change BG
      </button>
    </header>
  );
};

export default Header;
