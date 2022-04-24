import { Container, Row, Col } from "react-bootstrap";
function AboutUs() {
  return (
    <div className="aboutus-container">
      <Container>
        <h2 className="about-title">Jalrakshan</h2>
        <Row>
          <div className="about-text-container">
            <p>
              {`Jalrakshan is a website that uses Machine Learning algorithms to
              predict and analyse the current water quality trends in India. 
              It has been created as part of a Third year project for Computer
              Engineering`}
            </p>
          </div>
        </Row>
        <h2 className="about-title">Who are we?</h2>
        <Row xs="1" md="2" lg="4" className="about-dev-description">
          <Col>
            <div>
              <a
                href="https://github.com/PrithviK21"
                target={"_blank"}
                rel={"noreferrer"}
              >
                <h4>Prithvi K</h4>
              </a>
              <h6>D12A 40</h6>
              <ul className="dev-skills-list">
                <li>Frontend</li>
                <li>Data Collection</li> <li>Website Design</li>
                <li>Machine Learning </li>
              </ul>
            </div>
          </Col>
          <Col>
            <div>
              <a
                href="https://github.com/Ashwin091"
                target={"_blank"}
                rel={"noreferrer"}
              >
                <h4>Ashwin K</h4>
              </a>
              <h6>D12A 41</h6>
              <ul className="dev-skills-list">
                <li>Frontend</li>
                <li>Data Collection</li>
                <li>Website Design</li>
                <li>Content</li>
              </ul>
            </div>
          </Col>
          <Col>
            <div>
              <a
                href="https://github.com/Anurag-Saraswat-01"
                target={"_blank"}
                rel={"noreferrer"}
              >
                <h4>Anurag S</h4>
              </a>
              <h6>D12A 63</h6>
              <ul className="dev-skills-list">
                <li>Backend</li>
                <li>Data Collection</li>
                <li>Website Design</li>
                <li>Machine Learning</li>
              </ul>
            </div>
          </Col>
          <Col>
            <div>
              <a
                href="https://github.com/Shubham-Zope"
                target={"_blank"}
                rel={"noreferrer"}
              >
                <h4>Shubham Z</h4>
              </a>
              <h6>D12A 72</h6>
              <ul className="dev-skills-list">
                <li>Backend</li>
                <li>Data Collection</li>
                <li>Website Design</li>
                <li>Machine Learning</li>
              </ul>
            </div>
          </Col>
        </Row>
        <h2 className="about-title">Acknowledgements</h2>
        <Row>
          <div className="about-text-container">
            <p>
              We would like to thank our Project Mentor Mrs.Priya R.L for
              thoroughly guiding us through the nooks and intricacies of the
              project. We would also like to thank the CMPN department of VESIT,
              for allowing us the oppurtunity to brainstorm and create new
              websites that help the community around us.
            </p>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default AboutUs;
