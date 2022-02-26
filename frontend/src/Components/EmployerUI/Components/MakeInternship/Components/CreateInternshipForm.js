import React, { useState, useEffect } from "react";
import { createInternship } from "../Redux/Actions/actions";
import { useSelector, useDispatch } from "react-redux";
import { Form, Button, Container, Row, Col, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function CreateInternshipForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const employerLogin = useSelector((state) => state.employerLoginReducer);
  const { employerInfo } = employerLogin;

  const internshipReducer = useSelector(state=>state.createInternshipReducer)
  const {success, internship} = internshipReducer

  // Form State
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [compensation, setCompensation] = useState("");
  const [location, setLocation] = useState("");
  const [hardskills, setHardskills] = useState("");
  const [softskills, setSoftskills] = useState("");
  const [learningOutcomes, setOutcomes] = useState("");
  const [industry, setIndustry] = useState("");

  const handleCreateInternship = (e) => {
    e.preventDefault();
    let dets = {
      internship_title: title,
      internship_description: description,
      internship_compensation: compensation,
      internship_location: location,
      internship_hard_skills: hardskills,
      internship_soft_skills: softskills,
      internship_learning_outcome: learningOutcomes,
      internship_industry: industry,
    };
    dispatch(createInternship(dets));
  };

  useEffect(() => {
    if (!employerInfo) {
      navigate("/");
    }
  }, [navigate, employerInfo]);

  return (
    <Container className="py-5 my-5">
      {success && <Alert variant='success'>Internship Successfully Created!</Alert>}

      <Form
        noValidate
        onSubmit={handleCreateInternship}
        className="p-5 shadow shadow-100"
      >
        <h1 className="text-center">
          <strong>Post an Internship</strong>
        </h1>
        <Form.Group className="mb-3" controlId="title">
          <Form.Label>Internship Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Internship Title..."
            onChange={(e) => setTitle(e.target.value)}
          />
          <Form.Text className="text-muted">
            Give a cool internship title!
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="description">
          <Form.Label>Internship Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter Internship Description..."
            onChange={(e) => setDescription(e.target.value)}
          />
          <Form.Text className="text-muted">
            About the internship please!
          </Form.Text>
        </Form.Group>

        <Row>
          <Col sm={6}>
            <Form.Group className="mb-3" controlId="compensation">
              <Form.Label>Internship Compensation</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Internship Compensation..."
                onChange={(e) => setCompensation(e.target.value)}
              />
              <Form.Text className="text-muted">
                Minimum compensation: USD$10000
              </Form.Text>
            </Form.Group>
          </Col>
          <Col sm={6}>
            <Form.Group className="mb-3" controlId="industry">
              <Form.Label>Internship Industry</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Internship Industry..."
                onChange={(e) => setIndustry(e.target.value)}
              />
              <Form.Text className="text-muted">
                Which industry is this internship under?
              </Form.Text>
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-3" controlId="location">
          <Form.Label>Internship Location</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Internship Location..."
            onChange={(e) => setLocation(e.target.value)}
          />
          <Form.Text className="text-muted">
            Location please!
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="outcomes">
          <Form.Label>Internship Learning Outcomes</Form.Label>
          <Form.Control
            as='textarea'
            rows={3}
            placeholder="Enter Internship Learning Outcomes..."
            onChange={(e) => setOutcomes(e.target.value)}
          />
          <Form.Text className="text-muted">
            Interns need to learn something!
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="hardskills">
          <Form.Label>Internship Hardskills</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Internship Hardskills..."
            onChange={(e) => setHardskills(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="softskill">
          <Form.Label>Internship Softskills</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Internship Softskills..."
            onChange={(e) => setSoftskills(e.target.value)}
          />
        </Form.Group>

        <div className="d-flex justify-content-end">
          <Button type="submit" className="btn btn-primary">
            Create Internship
          </Button>
        </div>
      </Form>
    </Container>
  );
}

export default CreateInternshipForm;
