import React from "react";
import { FadeComponent } from "./FadeComponent";
import Contact from "./Contact";

const Home = () => {
  return (
    <FadeComponent>
      <div className="home-intro-paragraph" style={{ marginBottom: "5rem" }}>
        <h1 className="home-intro-paragraph" style={{ display: "inline" }}>
          Hi, I’m Dawn, a professional proofreader and copyeditor with fifteen years of publishing
          experience
        </h1>
        , from Middle Grade and YA novels, to Graphic Novels, and more.
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
