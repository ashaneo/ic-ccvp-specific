import React from "react";
import "../styles/Footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Footer() {
  return (
    <div>
      <div className="footer">
        {/* <div className="socialMedia">
          <a
            href="https://www.instagram.com/_subo.dha_/"
            target="_blank"
            rel="noreferrer"
          >
            <InstagramIcon />
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            <FacebookIcon />
          </a>

          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <TwitterIcon />
          </a>

          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
            <LinkedInIcon />
          </a>
        </div> */}
        <p>IC 2025 | Sri Lanka</p>
      </div>
    </div>
  );
}

export default Footer;
