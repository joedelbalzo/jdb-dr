import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

const Icons = () => {
  const handleFacebookClick = (e) => {
    e.preventDefault();
    // const appUrl = "fb://dawn.ryan.908/3704996";
    // window.open(appUrl, "_blank");
    setTimeout(() => {
      window.open("https://www.facebook.com/dawn.ryan.908", "_blank");
    }, 500);
  };

  return (
    <div className="social-media-icons">
      <a
        onClick={handleFacebookClick}
        rel="noopener noreferrer"
        alt="Facebook Icon"
        aria-label="Link for Dawn Ryan on Facebook"
      >
        <FacebookIcon style={{ fontSize: 60 }} />
      </a>
      <a
        href="https://www.linkedin.com/in/dawn-ryan-7357a81b/"
        target="_blank"
        rel="noopener noreferrer"
        alt="LinkedIn Icon"
        aria-label="Link for Dawn Ryan on Linked In"
      >
        <LinkedInIcon style={{ fontSize: 60 }} />
      </a>
      <a
        href="mailto:dawn.g.ryan@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        alt="Email Icon"
        aria-label="Link to email Dawn Ryan"
      >
        <EmailIcon style={{ fontSize: 60 }} />
      </a>
    </div>
  );
};

export default Icons;
