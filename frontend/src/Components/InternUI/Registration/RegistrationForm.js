import React from "react";

import { Container, Row, Col, Form, Button } from "react-bootstrap";

import { FileUpload } from "../../../Commons/Components/FileUpload/FileUpload.js";

import "./RegistrationForm.css";

function RegistrationForm() {
  return (
    <Form>
      <Container>
        <div className="mb-3 fw-bold">Personal Details</div>
        <Row className="mb-3">
          <Col>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control placeholder="Name..."></Form.Control>
            </Form.Group>
          </Col>

          <Col>
            <Form.Group>
              <Form.Label>Handphone Number</Form.Label>
              <Form.Control placeholder="Number..."></Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col>
            <Form.Group>
              <Form.Label>Email Address</Form.Label>
              <Form.Control placeholder="Type..."></Form.Control>
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
          <FileUpload></FileUpload>
        </Row>
        <Row className="d-flex justify-content-center">
          <Col md="auto">
            <Button id="next-btn">NEXT</Button>
          </Col>
        </Row>
      </Container>
    </Form>
  );
}

export default RegistrationForm;
