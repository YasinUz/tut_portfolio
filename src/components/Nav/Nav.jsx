import React from "react";
import "./nav.scss";
// import { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineContacts } from "react-icons/ai";
import { MdOutlineContactPage } from "react-icons/md";
import { AiOutlineProfile } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const Nav = () => {
  // old variant / alte Variante
  // const [activeNav, setActiveNav] = useState("#");

  const activeStatus = ({ isActive }) => (isActive ? "color: blue" : "");

  return (
    <nav>
      <NavLink to="/header" className={activeStatus}>
        <AiOutlineHome />
      </NavLink>
      <NavLink to="/about">
        <AiOutlineContacts />
      </NavLink>
      <NavLink to="/projects">
        <MdOutlineContactPage />
      </NavLink>
      <NavLink to="/contact">
        <AiOutlineProfile />
      </NavLink>
    </nav>
  );
};

export default Nav;

// old variant / alte Variante
{
  /* <nav>
      <a
        href="#header"
        onClick={() => setActiveNav("#header")}
        className={activeNav === "#header" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <AiOutlineContacts />
      </a>
      <a
        href="#projects"
        onClick={() => setActiveNav("#projects")}
        className={activeNav === "#projects" ? "active" : ""}
      >
        <MdOutlineContactPage />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <AiOutlineProfile />
      </a>
    </nav> */
}
