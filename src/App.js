import React from "react";
import About from "./components/About";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
