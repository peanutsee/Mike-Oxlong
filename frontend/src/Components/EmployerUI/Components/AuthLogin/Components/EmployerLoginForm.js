import React, { useState, useEffect } from "react";
import { handleEmployerLogin } from '../Redux/Actions/actions'
import { useDispatch, useSelector } from "react-redux";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from 'react-router-dom'

function EmployerLoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const employerLogin = useSelector((state) => state.employerLoginReducer);
  const { employerInfo } = employerLogin;

  // Form States
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    let data = {
      username: email,
      password: password,
    };
    dispatch(handleEmployerLogin(data));
  };

  useEffect(() => {
    if (employerInfo) {
      navigate('/employer-ui');
    }
  }, [navigate, employerInfo]);
  
  return (
    <Container className="py-5 my-5">
      <Form noValidate onSubmit={handleLogin} className="p-5 shadow shadow-100">
        <h1 className="text-center">
          <strong>Welcome back!</strong>
        </h1>
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
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="********"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <div className="d-flex justify-content-end">
          <Button type="submit" className="btn btn-primary">
            Login
          </Button>
        </div>
      </Form>
    </Container>
  );
}

export default EmployerLoginForm;
