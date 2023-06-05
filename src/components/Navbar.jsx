import React, { useState, useRef } from "react";
import styles from "./styles.module.scss";
import { NavLink } from "react-router-dom";
import "../App.css";

const Navbar = () => {
  const [activeNavLink, setActiveNavLink] = useState("Introduction");
  // const rootRef = useRef(null);

  const handleNavLinkClick = (navLink) => {
    setActiveNavLink(navLink);
    if (navLink === "Introduction") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      // rootRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    else  if (navLink === "What_you_should_already_know") {
      window.scrollTo({
        top: 1000,
        behavior: "smooth",
      });
      // rootRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <ul className={styles.navbar}>
        <span className={styles.navbar_content}>JS Documentation</span>
        <NavLink
          className={`${styles.navbar_content} ${
            activeNavLink === "Introduction" ? `${styles.active}` : ""
          }`}
          to="/introduction"
          onClick={() => handleNavLinkClick("Introduction")}
        >
          Introduction
        </NavLink>
        <NavLink
          className={`${styles.navbar_content} ${
            activeNavLink === "What_you_should_already_know"
              ? `${styles.active}`
              : ""
          }`}
          to="What_you_should_already_know"
          onClick={() => handleNavLinkClick("What_you_should_already_know")}
        >
          What you should already know
        </NavLink>
        <NavLink
          className={`${styles.navbar_content} ${
            activeNavLink === "JavaScript_and_Java" ? `${styles.active}` : ""
          }`}
          to="JavaScript_and_Java"
          onClick={() => handleNavLinkClick("JavaScript_and_Java")}
        >
          JavaScript and Java
        </NavLink>
        <NavLink
          className={`${styles.navbar_content} ${
            activeNavLink === "Hello_world" ? `${styles.active}` : ""
          }`}
          to="Hello_world"
          onClick={() => handleNavLinkClick("Hello_world")}
        >
          Hello world
        </NavLink>
        <NavLink
          className={`${styles.navbar_content} ${
            activeNavLink === "Variables" ? `${styles.active}` : ""
          }`}
          to="Variables"
          onClick={() => handleNavLinkClick("Variables")}
        >
          Variables
        </NavLink>
        <NavLink
          className={`${styles.navbar_content} ${
            activeNavLink === "Declaring_variables" ? `${styles.active}` : ""
          }`}
          to="Declaring_variables"
          onClick={() => handleNavLinkClick("Declaring_variables")}
        >
          Declaring variables
        </NavLink>
        <NavLink
          className={`${styles.navbar_content} ${
            activeNavLink === "Variable_scope" ? `${styles.active}` : ""
          }`}
          to="Variable_scope"
          onClick={() => handleNavLinkClick("Variable_scope")}
        >
          Variable scope
        </NavLink>
        <NavLink
          className={`${styles.navbar_content} ${
            activeNavLink === "Global_variables" ? `${styles.active}` : ""
          }`}
          to="Global_variables"
          onClick={() => handleNavLinkClick("Global_variables")}
        >
          Global variables
        </NavLink>
        <NavLink
          className={`${styles.navbar_content} ${
            activeNavLink === "Constants" ? `${styles.active}` : ""
          }`}
          to="Constants"
          onClick={() => handleNavLinkClick("Constants")}
        >
          Constants
        </NavLink>
        <NavLink
          className={`${styles.navbar_content} ${
            activeNavLink === "Data_types" ? `${styles.active}` : ""
          }`}
          to="Data_types"
          onClick={() => handleNavLinkClick("Data_types")}
        >
          Data types
        </NavLink>
        <NavLink
          className={`${styles.navbar_content} ${
            activeNavLink === "if...else_statement" ? `${styles.active}` : ""
          }`}
          to="if...else_statement"
          onClick={() => handleNavLinkClick("if...else_statement")}
        >
          if...else statement
        </NavLink>
        <NavLink
          className={`${styles.navbar_content} ${
            activeNavLink === "while_statement" ? `${styles.active}` : ""
          }`}
          to="while_statement"
          onClick={() => handleNavLinkClick("while_statement")}
        >
          while statement
        </NavLink>
        <NavLink
          className={`${styles.navbar_content} ${
            activeNavLink === "Function_declarations" ? `${styles.active}` : ""
          }`}
          to="Function_declarations"
          onClick={() => handleNavLinkClick("Function_declarations")}
        >
          Function declarations
        </NavLink>
        <NavLink
          className={`${styles.navbar_content} ${
            activeNavLink === "Reference" ? `${styles.active}` : ""
          }`}
          to="Introduction"
          onClick={() => handleNavLinkClick("Reference")}
        >
          Reference
        </NavLink>
      </ul>
    </>
  );
};

export default Navbar;
