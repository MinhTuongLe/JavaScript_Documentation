import React, { useState } from "react";
import styles from "./styles.module.scss";
import { NavLink } from "react-router-dom";
import "../App.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const [activeNavLink, setActiveNavLink] = useState("Introduction");

  const [showNavbar, setShowNavbar] = useState(false);

  const handleMenuIconClick = () => {
    setShowNavbar(!showNavbar);
  };

  const handleNavLinkClick = (navLink) => {
    setActiveNavLink(navLink);
    setShowNavbar(false);

    setTimeout(() => {
      const element = document.getElementById(navLink);
      const deviceWidth = window.innerWidth;
      let temp = element.offsetTop;
      if (deviceWidth <= 1023) {
        temp -= 80;
      }
      if (element) {
        window.scrollTo({
          top: temp,
          behavior: "smooth",
        });
      }
    }, 0);
  };

  return (
    <>
      <div
        className={`${styles.gradient} ${showNavbar ? styles.display : ""}`}
        onClick={() => setShowNavbar(false)}
      ></div>
      <div className={styles.banner}>
        <div className={styles.menu_icon}>
          <MenuIcon onClick={handleMenuIconClick} />
        </div>
        <span>JS Documentation</span>
      </div>

      <ul className={`${styles.navbar} ${showNavbar ? styles.show : ""}`}>
        <span className={styles.navbar_content}>
          JS Documentation
          <div className={styles.close_icon}>
            <CloseIcon
              style={{ fontSize: "2rem" }}
              onClick={handleMenuIconClick}
            />
          </div>
        </span>
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
