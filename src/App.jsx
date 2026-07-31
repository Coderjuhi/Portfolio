import React, {useState} from "react";
import Header from "./component/Header";
import Home from "./component/Home";
import About from "./component/About";
import Education from "./component/Education";

function App() {


  return (
    <>
      {/* Navbar */}
      <Header />

        {/* Home */}

     <Home/>
 <About/>
 <Education/>
    </>
  );
};

export default App;
