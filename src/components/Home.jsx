import React from "react";
import styles from "./styles.module.scss";
import Navbar from "./Navbar";
import Introduction from "./Introduction";
import WhatYouShouldAlreadyKnow from "./WhatYouShouldAlreadyKnow";
import JavaScriptAndJava from "./JavaScriptAndJava";
import HelloWorld from "./HelloWorld";
import Variables from "./Variables";
import DeclaringVariables from "./DeclaringVariables";
import VariableScope from "./VariableScope";
import GlobalVariables from "./GlobalVariables";
import Constants from "./Constants";
import DataTypes from "./DataTypes";
import ConditionalStatements from "./ConditionalStatements";
import WhileStatement from "./WhileStatement";
import FunctionDeclarations from "./FunctionDeclarations";
import Reference from "./Reference";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Introduction />
      <WhatYouShouldAlreadyKnow />
      <JavaScriptAndJava />
      <HelloWorld />
      <Variables />
      <DeclaringVariables />
      <VariableScope />
      <GlobalVariables />
      <Constants />
      <DataTypes />
      <ConditionalStatements />
      <WhileStatement />
      <FunctionDeclarations />
      <Reference />
    </div>
  );
};

export default Home;
