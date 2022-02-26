import React, { useState } from "react";
import { Row, Col, Card, Button, Modal } from "react-bootstrap";
import { applyProjects } from "../Redux/Actions/actions";
import { useDispatch } from "react-redux";

function ProjectCard(props) {
  const dispatch = useDispatch();

  const handleApplyProject = (n) => {
    dispatch(applyProjects({ number: n }));
  };

  if (props.projects) {
    return (
      <Row>
        {props.projects.map((project) => (
          <Col sm={3} className="mb-3">
            <Card className="h-100">
              <Card.Title className="py-2 text-center">
                {project.project_title}
              </Card.Title>
              <Card.Body>
                <p>{project.project_description}</p>
                <p>{project.project_hard_skills}</p>
                {project.project_is_mentored ? (
                  <p>This project is mentored.</p>
                ) : (
                  <p>
                    There is no mentor for this project! However, you may find a
                    mentor
                    <a href="https://adplist.org/become-a-mentor">here</a>!
                  </p>
                )}
              </Card.Body>
              <Card.Footer className="d-flex justify-content-end">
                <Button onClick={() => handleApplyProject(project.id)}>
                  Apply
                </Button>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    );
  } else {
    return <div>Loading Projects...</div>;
  }
}

export default ProjectCard;
