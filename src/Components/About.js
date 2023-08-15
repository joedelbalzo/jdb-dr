import React from "react";
import { FadeComponent } from "./FadeComponent";
import wall from "./assets/wall.jpg";

const About = () => {
  return (
    <FadeComponent>
      <div className="about">
        <div className="about-image-container">
          <img className="about-image" src={wall} />
        </div>
        <div className="about-paragraph">
          <h2 style={{ textIndent: 0, margin: "4px" }}>About Dawn Ryan</h2>
          <p>
            A seasoned professional in the publishing industry, Dawn Ryan brings over a decade of
            experience to the table. With tenures at renowned publishing houses such as Penguin
            Random House, Simon & Schuster, and Macmillan, she has honed her skills in publishing
            and management.
          </p>
          <p>
            Currently a Senior Managing Editor at Macmillan, Dawn has overseen the publication of
            over fifty novels and picture books annually. She has spearheaded key initiatives like
            the creation of MCPG's house style guide and has run production meetings across
            departments. She's also a Freelance Copyeditor and Proofreader for Lonely Planet,
            working on projects like Lonely Planet Kids National Parks books.
          </p>
          <p>
            Beyond her publishing roles, Dawn is an advocate for diversity and inclusion, a skilled
            community service volunteer, and conversant in French and Spanish. She holds a Bachelor
            of Arts in Writing, Media, and Communications from the University of Rochester and is
            certified in Copyediting, Proofreading, and Fact-Checking by New York University.
          </p>
          <p>
            Dawn's unique blend of creativity, leadership, and hands-on experience makes her an
            exceptional choice for all your publishing needs.
          </p>
        </div>
      </div>
    </FadeComponent>
  );
};

export default About;
