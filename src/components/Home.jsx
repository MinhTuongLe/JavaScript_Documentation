import React from "react";
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
      <div id="Introduction">
        <Introduction />
      </div>
      <div id="What_you_should_already_know">
        <WhatYouShouldAlreadyKnow />
      </div>
      <div id="JavaScript_and_Java">
        <JavaScriptAndJava />
      </div>
      <div id="Hello_world">
        <HelloWorld />
      </div>
      <div id="Variables">
        <Variables />
      </div>
      <div id="Declaring_variables">
        <DeclaringVariables />
      </div>
      <div id="Variable_scope">
        <VariableScope />
      </div>
      <div id="Global_variables">
        <GlobalVariables />
      </div>
      <div id="Constants">
        <Constants />
      </div>
      <div id="Data_types">
        <DataTypes />
      </div>
      <div id="if...else_statement">
        <ConditionalStatements />
      </div>
      <div id="while_statement">
        <WhileStatement />
      </div>
      <div id="Function_declarations">
        <FunctionDeclarations />
      </div>
      <div id="Reference">
        <Reference />
      </div>
    </div>
  );
};

export default Home;
