import { Container, Row, Col } from "react-bootstrap";
function AboutUs() {
  return (
    <div className="aboutus-container">
      <Container>
        <h2>Jalrakshan</h2>
        <Row>
          <p>Jalrakshan is a website that using ML algos to predict and nalyse the current water quality trends in India. It has been created as part of a Third year project for Computer Engineering</p>
        </Row>
        <h2>Who are we?</h2>
        <Row xs="1" md="2" lg="4">
          <Col>
            <div>
              <h4>Prithvi K</h4>
              <h6>D12A 40</h6>
              <p>Frontend,Data Collection, Website Design,ML </p>
            </div>
          </Col>
          <Col>
            <div>
              <h4>Ashwin K</h4>
              <h6>D12A 41</h6>
              <p>Frontend,Data Collection,Content,Website Design</p>
            </div>
          </Col>
          <Col>
            <div>
              <h4>Anurag S</h4>
              <h6>D12A 63</h6>
              <p>Backend,Data Collection,Website Design,ML</p>
            </div>
          </Col>
          <Col>
            <div>
              <h4>Shubham Z</h4>
              <h6>D12A 72</h6>
              <p>Backend,Data Collection,Website Design,ML</p>
            </div>
          </Col>
        </Row>
        <h3>Acknowledgements</h3>
        <Row>
          <p>We would like to thank our Project Mentor Mrs.PRIYA R.L Ma'am for thoroughly guiding us through the nooks and intricacies of the project.
            We would also like to thank the CMPN department of VESIT, for allowing us the oppurtunity to brainstorm and create new websites that help the community around us.</p>
        </Row>
      </Container>
    </div>
  );
}

export default AboutUs;
