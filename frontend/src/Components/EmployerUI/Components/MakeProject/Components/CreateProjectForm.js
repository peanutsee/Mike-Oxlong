import React, { useState, useEffect } from "react";
import { createProject } from "../Redux/Actions/actions";
import { useSelector, useDispatch } from "react-redux";
import { Form, Button, Container, Row, Col, Alert } from "react-bootstrap";
import {useNavigate} from 'react-router-dom'

function CreateProjectForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const employerLogin = useSelector((state) => state.employerLoginReducer);
  const { employerInfo } = employerLogin;

  const projectReducer = useSelector(state=>state.createProjectReducer)
  const {success, project} = projectReducer

  useEffect(() => {
    if (!employerInfo) {
      navigate('/');
    }
  }, [navigate, employerInfo]);

  // Form State
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [is_mentored, setIs_Mentored] = useState(true);
  const [hardskills, setHardskills] = useState("");

  const handleCreateProject = (e) => {
    e.preventDefault();
    let dets = {
      project_title: title,
      project_description: description,
      project_is_mentored: is_mentored,
      project_hard_skills: hardskills,
    };
    dispatch(createProject(dets));
  };

  return (
    <Container className="py-5 my-5">
        {success && <Alert variant='success'>Project Successfully Created!</Alert>}
      <Form
        noValidate
        onSubmit={handleCreateProject}
        className="p-5 shadow shadow-100"
      >
        <h1 className="text-center">
          <strong>Contribute a Project Idea</strong>
        </h1>
        <Form.Group className="mb-3" controlId="title">
          <Form.Label>Project Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Project Title..."
            onChange={(e) => setTitle(e.target.value)}
          />
          <Form.Text className="text-muted">
            Give a cool project title!
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="description">
          <Form.Label>Project Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter Description of the Project..."
            onChange={(e) => setDescription(e.target.value)}
          />
          <Form.Text className="text-muted">
            Give a good description of the project!
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="skills">
          <Form.Label>Skills Required</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Skills..."
            onChange={(e) => setHardskills(e.target.value)}
          />
          <Form.Text className="text-muted">
            Technical skills and other relevant skills!
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="skills">
          <Form.Label>Will the project have a mentor?</Form.Label>
          <Form.Control
            as="select"
            name="mentorship"
            onChange={(e) => setIs_Mentored(e.target.value)}
          >
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </Form.Control>
        </Form.Group>

        <div className="d-flex justify-content-end">
          <Button type="submit" className="btn btn-primary">
            Create Project
          </Button>
        </div>
      </Form>
    </Container>
  );
}

export default CreateProjectForm;
