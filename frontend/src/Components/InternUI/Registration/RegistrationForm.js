// import Form from "antd/lib/form/Form";
import React from "react";

import { Container, Row, Col, Form } from "react-bootstrap";

function RegistrationForm() {
  return (
    <Form>
      <Container fluid>
        <Row>
          <Form.Group as="col">
            <label for="name" class="form-label">
              Name
            </label>
            <input
              type="email" // Change this
              class="form-control"
              id="nameInput"
              aria-describedby="emailHelp" // Chaneg this
              placeholder="Name..."
            />
          </Form.Group>

          <Form.Group as="col">
            <label for="handphoneNumber" class="form-label">
              Handphone Number
            </label>
            <input
              type="email" // Change this
              class="form-control"
              id="nameInput"
              aria-describedby="emailHelp" // Chaneg this
              placeholder="Number..."
            />
          </Form.Group>
        </Row>

        <Col class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Type..."
          />
          <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div>
        </Col>
        <Col class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
          />
        </Col>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </Container>
    </Form>
  );
}

export default RegistrationForm;
