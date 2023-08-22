import React from "react";
import { FadeComponent } from "./FadeComponent";
import { Link } from "react-router-dom";
import Form from "./Form";

const Services = () => {
  return (
    <FadeComponent>
      <h1 className="page-header" style={{ marginBottom: "1rem" }}>
        SERVICES
      </h1>
      {/* <h3 className="page-subheader">Here's a list of services I offer.</h3> */}
      <div className="services">
        <span style={{ fontWeight: 350 }}>
          I follow the campsite rule with every project I take on:{" "}
          <span style={{ fontWeight: 400 }}>Leave it better than you found it!</span>{" "}
        </span>
        <br />
        <br />
        <div style={{ textAlign: "center" }}>
          Using your guidance, I pay attention to everything you’d like me to focus on, and phrase
          all queries and comments with courtesy and professionalism. Reviewing a copyedit or
          proofread should be a painless and clear process, and that’s what I deliver. If you're not
          sure which service you need or if it's not a service I can accommodate, please contact me
          anyway! I would love to hear more about your project to see what I can do, or connect you
          with another incredibly talented freelancer.
        </div>

        <div className="services-section-title">Proofreading Novels</div>
        <br />
        <ul>
          <li className="services-list">
            Working with PDFs using comments, and stamps, or on occasion, physical proof page.
          </li>
          <li className="services-list">
            Reviewing text against the original manuscript or previous pass, making sure all
            corrections were made properly.
          </li>
          <li className="services-list">
            Cold reading text and fixing any grammar or spelling issues, and querying anything that
            might need polishing.
          </li>
          <li className="services-list">
            Double-checking style and layout consistency, facts, and timelines.
          </li>
          <li className="services-list">
            Will return all projects under 100,000 words within 10 days.
          </li>
        </ul>
        <div className="services-section-title">Copyediting Novels</div>
        <br />
        <ul>
          <li className="services-list">
            Working with Word documents using track changes and comments.
          </li>

          <li className="services-list">Reading text and fixing grammar and spelling issues.</li>
          <li className="services-list">Confirming timelines and facts.</li>
          <li className="services-list">
            Phrasing queries professionally for content that goes to Authors.
          </li>
          <li className="services-list">Styling manuscripts in Word for InDesign layouts.</li>
          <li className="services-list">
            Will return all projects under 100,000 words within 15 days.
          </li>
        </ul>

        <div className="services-section-title">Reviewing Graphic Novels.</div>
        <br />
        <ul>
          <li className="services-list">
            Reviewing text and art in layouts during any stage of the process.
          </li>
          <li className="services-list">Cold reading, proofreading, checking art and facts.</li>
          <li className="services-list">
            Advising on how to streamline projects (since graphic novels are complex!).
          </li>
          <li className="services-list">
            Will return all projects under 320 pages within 10 days.
          </li>
        </ul>
        {/* <div className="services-section-title">Additional Consultation</div>
        <div className="services-description">
          Guidance on Management for all stages of the creative and career-building process.
        </div> */}
        <div
          style={{
            textAlign: "center",
            margin: "3rem auto",
            fontSize: "calc(14px + 1vw)",
            color: "rgb(20,30,70)",
          }}
        >
          Please feel free to contact me to discuss how I can contribute to your project's success!
        </div>
        <Form />
      </div>
    </FadeComponent>
  );
};

export default Services;
