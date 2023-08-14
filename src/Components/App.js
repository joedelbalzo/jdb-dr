import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./Home";
import Services from "./Services";
import About from "./About";
import Contact from "./Contact";
import Icons from "./Icons";
import NavBar from "./NavBar";
import Footer from "./Footer";

const App = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <NavBar />
      <div style={{ flexGrow: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Icons />
      </div>
      <Footer />
    </div>
  );
};

export default App;
