import React from "react";
import { Carousel } from "react-bootstrap";
function Hero(props) {
  // return (
  //   <div
  //     className={`hero-container ${props.home ? "" : "clean-hero-container"}`}
  //   >
  //     <h1 className="hero-text">
  //       {props.home ? "Pollution, an epidemic" : "What can we do?"}
  //     </h1>
  //   </div>
  // );
  return props.home ? (
    <div>
      <Carousel fade interval={5000} indicators={false}>
        <Carousel.Item>
          <div className={`hero-container`}>
            <h1 className="hero-text">{"The Rivers of India"}</h1>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className={`hero-container dirty-hero-container`}>
            <h1 className="hero-text">{"Facing Pollution"}</h1>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  ) : (
    <div className={`hero-container clean-hero-container`}>
      <h1 className="hero-text">{"What can we do?"}</h1>
    </div>
  );
}

export default Hero;
