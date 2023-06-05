import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Navbar } from "./components/index";
import Introduction from "./components/Introduction";
import WhatYouShouldAlreadyKnow from "./components/WhatYouShouldAlreadyKnow";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Home/>
    </BrowserRouter>
  );
}

export default App;
