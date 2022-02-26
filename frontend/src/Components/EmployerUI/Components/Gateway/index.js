import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";

function index() {
  return (
    <div className="p-5">
      <h1 className='text-center'>Welcome to Easy Intern!</h1>
      <p className='text-center'>Here at Easy Intern, your priorities are also our priorities. Let us help you find the best Intern!</p>
      <Row>
        <Col sm={6}>
          <Link to="/employer-login">
            <div className="p-5 mb-3 border border-primary rounded text-center shadow shadow-100">
              I have an Account
            </div>
          </Link>
        </Col>
        <Col sm={6}>
          <Link to="/employer-register">
            <div className="p-5 mb-3 border border-primary rounded text-center shadow shadow-100">
              Register for an Account
            </div>
          </Link>
        </Col>
      </Row>
    </div>
  );
}

export default index;
