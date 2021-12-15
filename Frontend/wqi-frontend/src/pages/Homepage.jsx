import React from "react";
import Hero from "../components/Hero";
function Homepage() {
  return (
    <div>
      <Hero />
      <div className="content-container">
        <div className="row">
          <div className="img-container">
            <img src="" alt="image here" />
          </div>
          <div className="text-container">
            <h1>Visualisation</h1>
            <p>
              Get a clear view of future statistics and graphs of rivers in
              India.
            </p>
            <button>Try it out!</button>
          </div>
        </div>
        <div className="row">
          <div className="img-container">
            <img src="" alt="image here" />
          </div>
          <div className="text-container">
            <h1>
              How can <br /> <span className="big-text">YOU</span> <br />
              prevent pollution?
            </h1>{" "}
            <p>Some random steps idk, read the article from the link below</p>
            <button>Learn More!</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
