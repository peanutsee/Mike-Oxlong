import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";

function Gateway() {
  return (
    <Row className="p-5">
      <Col sm={6}>
        <Link to="/intern-portal">
          <div className="p-5 mb-3 border border-primary rounded text-center shadow shadow-100">
            I am Looking for an Internship
          </div>
        </Link>
      </Col>
      <Col sm={6}>
        <Link to="/employer-portal">
          <div className="p-5 mb-3 border border-primary rounded text-center shadow shadow-100">
            I am Looking to Hire an Intern
          </div>
        </Link>
      </Col>
    </Row>
  );
}

export default Gateway;
