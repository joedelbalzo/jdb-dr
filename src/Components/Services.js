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
        <h1>Services</h1>
      </div>
    </FadeComponent>
  );
};

export default Services;
