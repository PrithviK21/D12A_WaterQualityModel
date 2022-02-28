import React from "react";
import { useState } from "react";
import { Button, Row, Col, Container, Form } from "react-bootstrap";
import emailjs, { init } from "@emailjs/browser";
init(process.env.REACT_APP_EMAIL_API);

function Grievance() {
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(true);
  const sendEmail = (e) => {
    setSent(false);
    let templateParams = {
      user_name: name,
      user_email: email,
      message: msg,
    };

    emailjs
      .send(
        "jalrakshan_email",
        "complaint_form",
        templateParams,
        process.env.REACT_APP_EMAIL_API
      )
      .then(
        function (response) {
          setSent(true);
          //console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
          //console.log("FAILED...", error);
        }
      );
    e.preventDefault();
    // console.log(`Hello CPCB,\n
    // ${name} has used our website, Jalrakshan, to issue a complaint/suggestion as follows:\n
    // ${msg}\n
    // Their provided email is: ${email}`);
  };
  return !sent ? (
    <Container className="grievance">
      <h1>Sending....</h1>
    </Container>
  ) : (
    <Container className="grievance">
      <h1>Grievance Form</h1>
      <Form onSubmit={sendEmail}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Row xs={1} md={2}>
            <Col>
              <Form.Label className="detgrie">Name*</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter Your name"
                onChange={(e) => setName(e.target.value)}
              />
            </Col>
            <Col>
              <Form.Label className="detgrie">Email*</Form.Label>
              <Form.Control
                required
                type="email"
                placeholder="Enter Your email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Col>
          </Row>
          <Form.Label className="detgrie">Grievance/Suggestion*</Form.Label>
          <Form.Control
            required
            as="textarea"
            rows={3}
            placeholder="Enter your grievance/suggestion here"
            onChange={(e) => setMsg(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default Grievance;
