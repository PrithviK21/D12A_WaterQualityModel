import React from "react";
import { Card, Button, Row, Col, Container } from "react-bootstrap";
import map from "../assets/indiamap.jpg";
import lineimg from "../assets/line.png";
import barimg from "../assets/barchart.jpg";
import { Link } from "react-router-dom";
function VisMenu() {
  return (
    <div>
      <Container className="bruhcont">
        <Row xs={1} sm={1} md={3}>
          <Col className="card-container">
            <Card text="white">
              <Card.Img alt="Card image cap" src={map} top width="100%" />
              <Card.Body>
                <Card.Title tag="h5">Heatmap</Card.Title>
                <Card.Subtitle className="mb-2" tag="h6">
                  A heatmap of India, showing WQIs per state
                </Card.Subtitle>
                <Link to="/heatmap">
                  <Button>Go!</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col className="card-container">
            <Card text="white">
              <Card.Img alt="Card image cap" src={lineimg} top width="100%" />
              <Card.Body>
                <Card.Title tag="h5">Line Graph</Card.Title>
                <Card.Subtitle className="mb-2 text-muted" tag="h6">
                  Visualise the trends in WQI for one or more rivers
                </Card.Subtitle>
                <Link to="/line">
                  <Button>Go!</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col className="card-container">
            <Card text="white">
              <Card.Img alt="Card image cap" src={barimg} top width="100%" />
              <Card.Body>
                <Card.Title tag="h5">Bar Graph</Card.Title>
                <Card.Subtitle className="mb-2 text-muted" tag="h6">
                  Visualise miscellaneous data in a bar format
                </Card.Subtitle>
                <Link to="/bar">
                  <Button>Go!</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
    // <div>
    //   {/* <div className="menu-container"> */}
    //   <Row>
    //     <div className="menu-item">
    //       <Card text='white'>
    //         <Card.Img alt="Card image cap" src={map} top width="100%" />
    //         <Card.Body>
    //           <Card.Title tag="h5">Heatmap</Card.Title>
    //           <Card.Subtitle className="mb-2 text-muted" tag="h6">
    //             A heatmap of India, showing WQIs per state
    //           </Card.Subtitle>
    //           <Button>Go</Button>
    //         </Card.Body>
    //       </Card>
    //     </div>

    //     <div className="menu-item">
    //       <Card text='white'>
    //         <Card.Img alt="Card image cap" src={lineimg} top width="100%" />
    //         <Card.Body>
    //           <Card.Title tag="h5">Card title</Card.Title>
    //           <Card.Subtitle className="mb-2 text-muted" tag="h6">
    //             Card subtitle
    //           </Card.Subtitle>
    //           <Button>Button</Button>
    //         </Card.Body>
    //       </Card>
    //     </div>
    //     <div className="menu-item">
    //       <Card text='white'>
    //         <Card.Img alt="Card image cap" src={barimg} top width="100%" />
    //         <Card.Body>
    //           <Card.Title tag="h5">Card title</Card.Title>
    //           <Card.Subtitle className="mb-2 text-muted" tag="h6">
    //             Card subtitle
    //           </Card.Subtitle>
    //           <Button>Button</Button>
    //         </Card.Body>
    //       </Card>
    //     </div>
    //     {/* </div> */}
    //   </Row>
    // </div>
  );
}

export default VisMenu;
