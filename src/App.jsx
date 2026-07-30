import React, {useState} from "react";
import Header from "./component/Header";
import Home from "./component/Home";
import About from "./component/About";




function App() {


  return (
    <>
      {/* Navbar */}
      <Header />

        {/* Home */}

     <Home/>
 <About/>
    </>
  );
};

export default App;
