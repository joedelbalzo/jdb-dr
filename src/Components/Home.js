import React from "react";
import { Route, Routes } from "react-router-dom";
import { FadeComponent } from "./FadeComponent";

import Services from "./Services";
import About from "./About";
import Contact from "./Contact";

const Home = () => {
  return (
    <FadeComponent>
      <div className="home-intro-paragraph" style={{ marginBottom: "5rem" }}>
        Hi, I’m Dawn, a professional proofreader and copyeditor with fifteen years of publishing
        experience, from Middle Grade and YA novels, to Graphic Novels, and more.
        <br />
        <div style={{ margin: "auto", textAlign: "center", paddingTop: "1rem" }}>
          Let's make your words shine!
        </div>
      </div>

      <Contact />
    </FadeComponent>
  );
};

export default Home;
