import React from "react";
import { FadeComponent } from "./FadeComponent";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <FadeComponent>
      <h2 className="page-header">SERVICES</h2>
      <h3 className="page-subheader">
        Here's a list of services I offer.
        <br />
        If you're not sure which service you need or if it's not a service I can accommodate, please
        contact me anyways! I would love to connect you with another incredibly talented freelancer.
      </h3>
      <div className="services">
        <div className="services-section-title">Proofreading Novels</div>
        <div className="services-description">
          Will return all projects under 100,000 words within 10 days. $30/hour
        </div>
        <div className="services-section-title">Copyediting Novels</div>
        <div className="services-description">
          Will return all projects under 100,000 words within 15 days. $33/hour
        </div>
        <div className="services-section-title">Reviewing Graphic Novels</div>
        <div className="services-description">
          Cold reads, art checks, and proofreading. Will return all projects under 320 pages within
          10 days. $30/hour
        </div>
        <div className="services-section-title">Additional Consultation</div>
        <div className="services-description">
          Guidance on Management for all stages of the creative and career-building process $35/hour
        </div>

        <div
          style={{
            margin: "auto",
            textAlign: "center",
            marginTop: "1rem",
            fontSize: "calc(14px + 1vw)",
            color: "rgb(20,30,70)",
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
