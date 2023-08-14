import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import { Link } from "react-router-dom";

const Icons = () => {
  return (
    <div className="social-media-icons">
      <a href="https://www.facebook.com/dawn.ryan.908" target="_blank" rel="noopener noreferrer">
        <FacebookIcon fontSize="large" />
      </a>
      {/* <a
        href="https://www.instagram.com/missdawn_/?hl=en"
        target="_blank"
        rel="noopener noreferrer"
      >
        <InstagramIcon fontSize="large" />
      </a> */}
      <a
        href="https://www.linkedin.com/in/dawn-ryan-7357a81b/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkedInIcon fontSize="large" />
      </a>
      <a href="mailto:dawn.g.ryan@gmail.com" target="_blank" rel="noopener noreferrer">
        <EmailIcon fontSize="large" />
      </a>
    </div>
  );
};

export default Icons;
