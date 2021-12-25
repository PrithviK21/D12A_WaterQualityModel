import React from "react";
import Hero from "../components/Hero";
import { Container, Row, Col } from "react-bootstrap";

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
              <button className="blu-btn">Try it out!</button>
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
              <button className="blu-btn">Learn More!</button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Homepage;
