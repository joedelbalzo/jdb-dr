import React from "react";
import { FadeComponent } from "./FadeComponent";

const About = () => {
  return (
    <FadeComponent>
      <div className="about">
        <div className="about-image">maybe an image here?</div>
        <div className="about-paragraph">
          {"\t"} With a rich history in publishing, from to Marketing Coordinator at Simon &
          Schuster to Executive Managing Editor at Macmillan, I've honed my skills in editing,
          proofreading, and publishing. My career has given me the chance to work with bestselling
          authors, celebrity tie-ins, and the latest digital systems for project management. I bring
          a decade of industry experience to your manuscript, ensuring your words shine. Certified
          in Copyediting, Proofreading, and Fact-Checking by New York University, I'm ready to make
          your writing stand out!
        </div>
      </div>
    </FadeComponent>
  );
};

export default About;
