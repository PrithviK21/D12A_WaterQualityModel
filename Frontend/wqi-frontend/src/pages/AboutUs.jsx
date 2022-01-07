import { Container, Row, Col } from "react-bootstrap";
function AboutUs() {
  return (
    <div className="aboutus-container">
      <Container>
        <h2>What is this?</h2>
        <Row>
          <p>What is this?</p>
        </Row>
        <h2>Who are we?</h2>
        <Row xs="1" md="2" lg="4">
          <Col>
            <div>
              <h4>Prithvi K</h4>
              <h6>D12A 40</h6>
              <p>Did some things</p>
            </div>
          </Col>
          <Col>
            <div>
              <h4>Ashwin K</h4>
              <h6>D12A 41</h6>
              <p>Did some things</p>
            </div>
          </Col>
          <Col>
            <div>
              <h4>Anurag S</h4>
              <h6>D12A 63</h6>
              <p>Did some things</p>
            </div>
          </Col>
          <Col>
            <div>
              <h4>Shubham Z</h4>
              <h6>D12A 72</h6>
              <p>Did some things</p>
            </div>
          </Col>
        </Row>
        <h3>Acknowledgements</h3>
        <Row>
          <p>We would like to thank...</p>
        </Row>
      </Container>
    </div>
  );
}

export default AboutUs;
