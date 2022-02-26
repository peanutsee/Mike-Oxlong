import React, { useState, useEffect } from "react";
import { handleEmployerRegistration } from "../Redux/Actions/actions";
import { useDispatch, useSelector } from "react-redux";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from 'react-router-dom'

function EmployerRegistrationForm({ history }) {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const employerLogin = useSelector((state) => state.employerLoginReducer);
  const { employerInfo } = employerLogin;

  // Form States
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [details, setDetails] = useState("");

  const handleRegistration = (e) => {
    e.preventDefault()
    let dets = {
      // Make sure same field names as backend
      is_intern: false,
      email: email,
      firstName: firstName,
      lastName: lastName,
      password: password,
      companyDetails: details,
    };
    dispatch(handleEmployerRegistration(dets));
  };

  useEffect(() => {
    if (employerInfo.length !== 0) {
      navigate('/employer-dash');
    }
  }, [navigate, employerInfo]);

  return (
    <Container className="py-5 my-5">
      <Form
        noValidate
        onSubmit={handleRegistration}
        className="p-5 shadow shadow-100"
      >
        <h1 className="text-center">
          <strong>Tell us about you</strong>
        </h1>
        <h4>Employer Details</h4>
        <Row>
          <Col sm={6}>
            <Form.Group className="mb-3" controlId="firstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter First Name..."
                onChange={(e) => setFirstName(e.target.value)}
              />
              <Form.Text className="text-muted">
                First name of correspondent.
              </Form.Text>
            </Form.Group>
          </Col>
          <Col sm={6}>
            <Form.Group className="mb-3" controlId="lastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Last Name..."
                onChange={(e) => setLastName(e.target.value)}
              />
              <Form.Text className="text-muted">
                Last name of correspondent.
              </Form.Text>
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter Email..."
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else. This will be your
            username.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="details">
          <Form.Label>Company Details</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter Company Details (What do you do? Who are you looking for? Why should they be part of your company?)..."
            onChange={(e) => setDetails(e.target.value)}
          />
          <Form.Text className="text-muted">Interns will see this!</Form.Text>
        </Form.Group>

        <Row>
          <Col sm={6}>
            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="********"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col sm={6}>
            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" placeholder="********" />
            </Form.Group>
          </Col>
        </Row>
        <div className="d-flex justify-content-end">
          <Button type="submit" className="btn btn-primary">
            Register
          </Button>
        </div>
      </Form>
    </Container>
  );
}

export default EmployerRegistrationForm;
