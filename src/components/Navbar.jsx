import React, { useState } from "react";
import styles from "./styles.module.scss";
import { NavLink } from "react-router-dom";
import "../App.css";

const Navbar = () => {
  const [activeNavLink, setActiveNavLink] = useState("Introduction");

  const handleNavLinkClick = (navLink) => {
    setActiveNavLink(navLink);
    if (navLink === "Introduction") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    else  if (navLink === "What_you_should_already_know") {
      window.scrollTo({
        top: 475,
        behavior: "smooth",
      });
    }
    else  if (navLink === "JavaScript_and_Java") {
      window.scrollTo({
        top: 730,
        behavior: "smooth",
      });
    }
    else  if (navLink === "Hello_world") {
      window.scrollTo({
        top: 1170,
        behavior: "smooth",
      });
    }
    else  if (navLink === "Variables") {
      window.scrollTo({
        top: 1440,
        behavior: "smooth",
      });
    }
    else  if (navLink === "Declaring_variables") {
      window.scrollTo({
        top: 1710,
        behavior: "smooth",
      });
    }
    else  if (navLink === "Variable_scope") {
      window.scrollTo({
        top: 2340,
        behavior: "smooth",
      });
    }
    else  if (navLink === "Global_variables") {
      window.scrollTo({
        top: 2820,
        behavior: "smooth",
      });
    }
    else  if (navLink === "Constants") {
      window.scrollTo({
        top: 3070,
        behavior: "smooth",
      });
    }
    else  if (navLink === "Data_types") {
      window.scrollTo({
        top: 3740,
        behavior: "smooth",
      });
    }
    else  if (navLink === "if...else_statement") {
      window.scrollTo({
        top: 4350,
        behavior: "smooth",
      });
    }
    else  if (navLink === "while_statement") {
      window.scrollTo({
        top: 5420,
        behavior: "smooth",
      });
    }
    else{
      window.scrollTo({
        top: 7000,
        behavior: "smooth",
      });
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
          to="/what_you_should_already_know"
          onClick={() => handleNavLinkClick("What_you_should_already_know")}
        >
          What you should already know
        </NavLink>
        <NavLink
          className={`${styles.navbar_content} ${
            activeNavLink === "JavaScript_and_Java" ? `${styles.active}` : ""
          }`}
          to="/javaScript_and_Java"
          onClick={() => handleNavLinkClick("JavaScript_and_Java")}
        >
          JavaScript and Java
        </NavLink>
        <NavLink
          className={`${styles.navbar_content} ${
            activeNavLink === "Hello_world" ? `${styles.active}` : ""
          }`}
          to="/hello_world"
          onClick={() => handleNavLinkClick("Hello_world")}
        >
          Hello world
        </NavLink>
        <NavLink
          className={`${styles.navbar_content} ${
            activeNavLink === "Variables" ? `${styles.active}` : ""
          }`}
          to="/variables"
          onClick={() => handleNavLinkClick("Variables")}
        >
          Variables
        </NavLink>
        <NavLink
          className={`${styles.navbar_content} ${
            activeNavLink === "Declaring_variables" ? `${styles.active}` : ""
          }`}
          to="/declaring_variables"
          onClick={() => handleNavLinkClick("Declaring_variables")}
        >
          Declaring variables
        </NavLink>
        <NavLink
          className={`${styles.navbar_content} ${
            activeNavLink === "Variable_scope" ? `${styles.active}` : ""
          }`}
          to="/variable_scope"
          onClick={() => handleNavLinkClick("Variable_scope")}
        >
          Variable scope
        </NavLink>
        <NavLink
          className={`${styles.navbar_content} ${
            activeNavLink === "Global_variables" ? `${styles.active}` : ""
          }`}
          to="/global_variables"
          onClick={() => handleNavLinkClick("Global_variables")}
        >
          Global variables
        </NavLink>
        <NavLink
          className={`${styles.navbar_content} ${
            activeNavLink === "Constants" ? `${styles.active}` : ""
          }`}
          to="/constants"
          onClick={() => handleNavLinkClick("Constants")}
        >
          Constants
        </NavLink>
        <NavLink
          className={`${styles.navbar_content} ${
            activeNavLink === "Data_types" ? `${styles.active}` : ""
          }`}
          to="/data_types"
          onClick={() => handleNavLinkClick("Data_types")}
        >
          Data types
        </NavLink>
        <NavLink
          className={`${styles.navbar_content} ${
            activeNavLink === "if...else_statement" ? `${styles.active}` : ""
          }`}
          to="/if...else_statement"
          onClick={() => handleNavLinkClick("if...else_statement")}
        >
          if...else statement
        </NavLink>
        <NavLink
          className={`${styles.navbar_content} ${
            activeNavLink === "while_statement" ? `${styles.active}` : ""
          }`}
          to="/while_statement"
          onClick={() => handleNavLinkClick("while_statement")}
        >
          while statement
        </NavLink>
        <NavLink
          className={`${styles.navbar_content} ${
            activeNavLink === "Function_declarations" ? `${styles.active}` : ""
          }`}
          to="/function_declarations"
          onClick={() => handleNavLinkClick("Function_declarations")}
        >
          Function declarations
        </NavLink>
        <NavLink
          className={`${styles.navbar_content} ${
            activeNavLink === "Reference" ? `${styles.active}` : ""
          }`}
          to="/reference"
          onClick={() => handleNavLinkClick("Reference")}
        >
          Reference
        </NavLink>
      </ul>
    </>
  );
};

export default Navbar;
