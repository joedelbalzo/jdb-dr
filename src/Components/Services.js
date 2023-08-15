import React from "react";
import { FadeComponent } from "./FadeComponent";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <FadeComponent>
      <div className="services">
        <ul>
          <li>
            Copyediting, Proofreading, and Fact-Checking:
            <li className="nested-list">
              From children's books to travel guides, my meticulous attention to detail ensures your
              content is flawless. Past clients include Macmillan, Lonely Planet, and Fodor's.
            </li>
          </li>
          <li>
            Freelance Editorial Services:
            <li className="nested-list">
              Need help with your editorial workflow? I've created house style guides and
              streamlined processes at Macmillan, overseeing publications from authors like Leigh
              Bardugo to Sesame Street.
            </li>
          </li>
          <li>
            Publishing & Management Consulting:
            <li className="nested-list">
              Leverage my extensive experience at industry giants like Penguin Random House, Simon &
              Schuster, and Macmillan to enhance your publishing and management processes.
            </li>
          </li>
          <li>
            Advertising & Social Media Management:
            <li className="nested-list">
              With experience running social media and managing campaigns for academic, middle
              grade, and YA audiences, I can help your brand connect with its target audience.
            </li>
          </li>
          <li>
            Custom Services:
            <li className="nested-list">
              Every project is unique. I offer services tailored to your needs, from managing
              large-scale book publications to specialized consulting in children’s publishing
              programs.
            </li>
          </li>
        </ul>
        <div
          style={{
            margin: "auto",
            textAlign: "center",
            marginTop: "1rem",
            fontSize: "calc(14px + 1vw)",
          }}
        >
          Please feel free to{" "}
          <Link id="links" style={{ textDecoration: "underline" }} to="/contact">
            contact me
          </Link>{" "}
          to discuss how I can contribute to your project's success!
        </div>
      </div>
    </FadeComponent>
  );
};

export default Services;
