import React from "react";
import "../styles/Home.css";
import { Link } from "react-router-dom";
import BannerImage from "../assets/international-congress.png";

function Home() {
  return (
    <div>
      <div
        className="home"
        style={{
          backgroundImage: `url(${BannerImage})`,
          backgroundSize: "1900px 700px",
        }}
      ></div>
    </div>
  );
}

export default Home;
