import React from "react";
import Hero from "../components/Hero";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div>
      <Hero text="Pollution, an epidemic" />

      <Container>
        <Row className="bruhRow" xs={1} md={2}>
          <Col>
            <img src="" alt="image here" />
          </Col>
          <Col>
            {" "}
            <div className="text-container">
              <h1>Visualisation</h1>
              <p>
                Get a clear view of future statistics and graphs of rivers in
                India.
              </p>
              <Link to="/vis">
                <button className="blu-btn">Try it out!</button>
              </Link>
            </div>
          </Col>
        </Row>
        <Row className="bruhRow" xs={1} md={2}>
          <Col>
            <img src="" alt="image here" />
          </Col>
          <Col>
            <div className="text-container">
              <h1>
                How can <br /> <span className="big-text">YOU</span> <br />
                prevent pollution?
              </h1>{" "}
              <p>Some random steps idk, read the article from the link below</p>
              <Link to="/prevention">
                <button className="blu-btn">Learn More!</button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Homepage;
