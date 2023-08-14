import React from "react";
import { Route, Routes } from "react-router-dom";
import { FadeComponent } from "./FadeComponent";

import Services from "./Services";
import About from "./About";
import Contact from "./Contact";

const Home = () => {
  return (
    <FadeComponent>
      <div className="home-intro-paragraph">
        Hi, I'm Dawn Ryan. In 15 years as a book professional and copy editor, I've worked with some
        of the biggest names in publishing from bestsellers to celebrity projects.
        <br />
        <div style={{ margin: "auto", textAlign: "center", paddingTop: "1rem" }}>
          Let's make your words shine!
        </div>
      </div>
    </FadeComponent>
  );
};

export default Home;
