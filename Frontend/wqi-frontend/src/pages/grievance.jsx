import React from "react";
import { Card, Button, Row, Col, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
function Grievance() {
  return (
    <Container className="grievance">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Row xs={2}>
        <Col>
          <Form.Label className="detgrie">Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Your name" />
        </Col>
        <Col>
          <Form.Label className="detgrie">Email</Form.Label>
          <Form.Control type="email" placeholder="Enter Your email" />
        </Col>
        </Row>
          <Form.Label className="detgrie">Grievance/Suggestion</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Provide details" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default Grievance;
