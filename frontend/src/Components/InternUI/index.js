import React from "react";
import { Container } from "react-bootstrap";
import RegistrationForm from "./Registration/RegistrationForm";

function index() {
  return (
    <Container>
      <Container className="text-center fw-bold fs-3 my-5">
        Tell us about you
      </Container>
      <RegistrationForm />
    </Container>
  );
}

export default index;
