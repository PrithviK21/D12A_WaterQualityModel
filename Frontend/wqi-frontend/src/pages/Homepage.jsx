import React from "react";
import Hero from "../components/Hero";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div>
      <Hero home={true} />

      <Container>
        <Row className="bruhRow" xs={1} md={2}>
          <Col>
            <img
              src="https://www.mackmanresearch.co.uk/wp-content/uploads/2021/10/IMG_0902.jpg"
              class="w3-round"
              alt="DataVisualize"
            />
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
            <img
              src="https://business.cornell.edu/wp-content/uploads/sites/2/2019/03/world-water-day-featured-1.jpg"
              class="w3-round"
              alt="Alps"
            />
          </Col>
          <Col>
            <div className="text-container">
              <h1>
                How can <br /> <span className="big-text">YOU</span> <br />
                prevent pollution?
              </h1>{" "}
              <p>
                Learn some rudimentary steps to prevent water pollution in your
                daily lives.
              </p>
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
