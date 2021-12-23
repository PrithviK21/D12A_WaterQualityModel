import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Hero from "../components/Hero";
function Prevention() {
  return (
    <div>
      <Hero text="What can we do?" />
      <Container>
        <Row xs={1} md={2} className="bruhRow-half">
          <Col>
            <h1 className="prevent-title">Dont Do This</h1>
          </Col>
          <Col>
            <p className="prevent-text">This is not worth doing</p>
          </Col>
        </Row>
        <Row xs={1} md={2} className="bruhRow-half">
          <Col>
            <p className="prevent-text">This is not worth doing</p>
          </Col>
          <Col>
            <h1 className="prevent-title">Dont Do This</h1>
          </Col>
        </Row>
        <Row xs={1} md={2} className="bruhRow-half">
          <Col>
            <h1 className="prevent-title">Dont Do This</h1>
          </Col>
          <Col>
            <p className="prevent-text">This is not worth doing</p>
          </Col>
        </Row>
        <Row xs={1} md={2} className="bruhRow-half">
          <Col>
            <p className="prevent-text">This is not worth doing</p>
          </Col>
          <Col>
            <h1 className="prevent-title">Dont Do This</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Prevention;
