import React from "react";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      style={{
        textAlign: "center",
        padding: "20px",
        fontSize: "calc(4px + 1vw)",
        color: "rgb(220, 240, 255)",
      }}
    >
      © Copyright 2023 Dawn Ryan. Website designed by{" "}
      <a
        href="http://www.joedelbalzo.com"
        style={{ color: "inherit", textDecoration: "none" }}
        target="_blank"
        rel="noopener noreferrer"
      >
        Joe Del Balzo
      </a>
    </footer>
  );
};

export default Footer;
