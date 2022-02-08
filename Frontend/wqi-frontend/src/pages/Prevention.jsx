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
            <h1 className="prevent-title">Turn off the tap!</h1>
          </Col>
          <Col>
            <p className="prevent-text">
              Conserve water by turning off the tap when running water is not
              necessary. This helps prevent water shortages and reduces the
              amount of contaminated water that needs treatment.
            </p>
          </Col>
        </Row>
        <Row xs={1} md={2} className="bruhRow-half">
          <Col>
            <h1 className="prevent-title">Dont throw stuff down the toilet!</h1>
          </Col>
          <Col>
            <p className="prevent-text">
              Be careful about what you throw down your sink or toilet. Don’t
              throw paints, oils or other forms of litter down the drain. Use
              environmentally household products, such as washing powder,
              household cleaning agents and toiletries.
            </p>
          </Col>
        </Row>
        <Row xs={1} md={2} className="bruhRow-half">
          <Col>
            <h1 className="prevent-title">Botany Plants Lately?</h1>
          </Col>
          <Col>
            <p className="prevent-text">
              By having more plants in your garden you are preventing
              fertiliser, pesticides and contaminated water from running off
              into nearby water sources.
            </p>
          </Col>
        </Row>
        <Row xs={1} md={2} className="bruhRow-half">
          <Col>
            <h1 className="prevent-title">Bin there, done that!</h1>
          </Col>
          <Col>
            <p className="prevent-text">
              Don’t throw litter into rivers, lakes or oceans. Help clean up any
              litter you see on beaches or in rivers and lakes, make sure it is
              safe to collect the litter and put it in a nearby dustbin.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Prevention;
