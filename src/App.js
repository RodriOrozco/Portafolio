import React from "react";
import About from "./components/About";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Work from "./components/Work";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
