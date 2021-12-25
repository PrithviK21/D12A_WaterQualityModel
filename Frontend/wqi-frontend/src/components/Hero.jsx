import React from "react";
function Hero(props) {
  return (
    <div className="hero-container">
      <h1 className="hero-text">{props.text}</h1>
    </div>
  );
}

export default Hero;
