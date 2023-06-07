import "./App.css";
import { BrowserRouter } from "react-router-dom";
import {
  Navbar,
  Introduction,
  WhatYouShouldAlreadyKnow,
  JavaScriptAndJava,
  HelloWorld,
  Variables,
  DeclaringVariables,
  VariableScope,
  GlobalVariables,
  Constants,
  DataTypes,
  ConditionalStatements,
  WhileStatement,
  FunctionDeclarations,
  Reference,
} from "./components/index";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <Container fluid>
        <Row>
          <Col xxl={2} xl={3} lg={4} style={{padding:"0"}}>
            <Navbar/>
          </Col>
          <Col style={{padding:"0"}}>
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
          </Col>
        </Row>
      </Container>
    </BrowserRouter>
  );
}

export default App;
