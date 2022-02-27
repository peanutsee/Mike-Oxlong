import React, { useState } from "react";
import { Row, Col, Card, Button, Alert } from "react-bootstrap";
import { applyInternships } from "../Redux/Actions/actions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

function InternshipCard(props) {
  const dispatch = useDispatch();

  const handleApplyInternship = (n) => {
    dispatch(applyInternships({ number: n }));
  };

  const applyInternshipReducer = useSelector(
    (state) => state.applyInternshipsReducer
  );
  const { success } = applyInternshipReducer;

  if (props.internships) {
    return (
      <>
        {success && (
          <Alert variant="success">
            Internship Successfully Apply! View in{" "}
            <Link to="/intern-dash">Dashboard</Link>.
          </Alert>
        )}
        <Row>
          {props.internships.map((internship) => (
            <Col sm={3} className="mb-3">
              <Card className="h-100">
                <Card.Title className="py-2 text-center">
                  {internship.internship_title}
                </Card.Title>
                <Card.Body>
                  <p>{internship.internship_description}</p>
                  <p>{internship.internship_hard_skills}</p>
                  <p>{internship.internship_soft_skills}</p>
                  <p>{internship.internship_location}</p>
                  <p>${internship.internship_compensation}</p>
                </Card.Body>
                <Card.Footer className="d-flex justify-content-end">
                  <Button onClick={() => handleApplyInternship(internship.id)}>
                    Apply
                  </Button>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </>
    );
  } else {
    return <div>Loading Internships...</div>;
  }
}

export default InternshipCard;
