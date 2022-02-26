import React, { useCallback, useState } from "react";

import { Container, Row, Col, Form, Button } from "react-bootstrap";

import FileUpload from "../../../../../Commons/Components/FileUpload/index";

import "./RegistrationForm.css";

function InternRegistrationForm() {
  const [name, setName] = useState("");
  const [hpNumber, setHPNumber] = useState("");
  const [email, setEmail] = useState("");
  const [education, setEducation] = useState("");
  const [resume, setResume] = useState(null);

  const nextBtn = () => {
    console.log(resume.name);
  };

  return (
    <Container>
      <Container className="text-center fw-bold fs-3 my-5">
        Tell us about you
      </Container>
      <Form>
        <Container>
          <div className="mb-3 fw-bold">Personal Details</div>
          <Row className="mb-3">
            <Col>
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  placeholder="Name..."
                  onChange={(e) => setName(e.target.value)}
                ></Form.Control>
              </Form.Group>
            </Col>

            <Col>
              <Form.Group>
                <Form.Label>Handphone Number</Form.Label>
                <Form.Control
                  placeholder="Number..."
                  onChange={(e) => setHPNumber(e.target.value)}
                ></Form.Control>
              </Form.Group>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <Form.Group>
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  placeholder="Type..."
                  onChange={(e) => setEmail(e.target.value)}
                ></Form.Control>
              </Form.Group>
            </Col>
          </Row>
          <hr className="my-5"></hr>
          <div className="fw-bold mb-3">Education Level</div>
          <Row>
            <Container className="d-flex justify-content-between">
              <Form.Check
                inline
                type="radio"
                name="educationLevel"
                label="ITE"
              ></Form.Check>
              <Form.Check
                inline
                type="radio"
                name="educationLevel"
                label="Polytechnic"
              ></Form.Check>
              <Form.Check
                inline
                type="radio"
                name="educationLevel"
                label="University"
              ></Form.Check>
              <Form.Check
                inline
                type="radio"
                name="educationLevel"
                label="Others"
              ></Form.Check>
            </Container>
          </Row>
          <hr className="my-5"></hr>
          <div className="fw-bold mb-3">Resume</div>
          <Row className="mb-5">
            <FileUpload uploadFile={setResume}></FileUpload>
          </Row>
          <Row className="d-flex justify-content-center">
            <Col md="auto">
              <Button id="next-btn" onClick={nextBtn}>
                NEXT
              </Button>
            </Col>
          </Row>
        </Container>
      </Form>
    </Container>
  );
}

export default InternRegistrationForm;
