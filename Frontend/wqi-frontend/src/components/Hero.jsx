import React from "react";

function Hero(props) {
  return (
    <div
      className={`hero-container ${props.home ? "" : "clean-hero-container"}`}
    >
      <h1 className="hero-text">
        {props.home ? "Pollution, an epidemic" : "What can we do?"}
      </h1>
    </div>
  );
}

export default Hero;
