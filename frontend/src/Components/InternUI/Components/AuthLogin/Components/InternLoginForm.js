import React, { useState, useEffect } from "react";
import { handleInternLogin } from "../Redux/Actions/actions";
import { useDispatch, useSelector } from "react-redux";
import { Form, Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function InternLoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const internLogin = useSelector((state) => state.internLoginReducer);

  if (true) {
    console.log(internLogin);
  }
  const { internInfo } = internLogin;

  // Form States
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    let data = {
      username: email,
      password: password,
    };
    dispatch(handleInternLogin(data));
  };

  useEffect(() => {
    if (internInfo.length !== 0) {
      console.log("dash");
      //navigate("/intern-dash");
    }
  }, [navigate, internInfo]);

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

export default InternLoginForm;
