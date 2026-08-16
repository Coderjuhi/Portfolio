import React, {useState} from "react";
import Header from "./component/Header";
import Home from "./component/Home";
import About from "./component/About";
import Education from "./component/Education";
import Skills from "./component/Skills";
import Services from "./component/Services";
import Project from "./component/Project";
import Workflows from "./component/Workflows";
import Contact from "./component/Contact";

function App() {
  return (
    <>
      {/* Navbar */}
      <Header />
        {/* Home */}
     <Home/>
 <About/>
 <Education/>
 <Skills/>
 <Services/>
 <Project/>
 <Workflows/>
 <Contact/>
    </>
  );
};

export default App;
