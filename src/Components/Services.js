import React from "react";
import { FadeComponent } from "./FadeComponent";

const Services = () => {
  return (
    <FadeComponent>
      <div
        style={{
          margin: "auto",
          width: "300px",
          height: "300px",
          border: "10px solid red",
          textAlign: "center",
        }}
      >
        Copy Editing: Comprehensive editing for grammar, style, consistency, and clarity.
        Proofreading: Attention to detail that catches those last-minute errors and typos.
        Fact-Checking: Ensuring the accuracy of your content. Digital Publishing Consulting: Advice
        and guidance on publishing ebooks and utilizing tools like InDesign and Photoshop. Social
        Media Marketing Support: Assistance in marketing your content through various social media
        channels.{" "}
      </div>
    </FadeComponent>
  );
};

export default Services;
