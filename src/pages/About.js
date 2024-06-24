import React from "react";
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import "../styles/About.css";

function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1>ABOUT US</h1>
        <p>
          Indulge in a slice of pizza perfection at Pedro's Pizzeria. Our menu
          boasts a tempting array of signature pizzas, customizable options,
          savory pasta dishes, crisp salads, and delectable desserts. Whether
          you dine in, take out, or opt for swift delivery, you'll enjoy our
          commitment to quality ingredients and friendly service. Join us today
          and experience the ultimate pizza delight.
        </p>
      </div>
    </div>
  );
}

export default About;
