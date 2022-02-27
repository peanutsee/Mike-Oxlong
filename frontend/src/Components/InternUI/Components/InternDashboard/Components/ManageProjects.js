import React from "react";
import { Table, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

function ManageProjects(props) {
  const { projects } = props;
  if (projects.length !== 0) {
    return (
      <>
        <h3>My Projects</h3>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Position</th>
              <th>Manage</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr>
                <td>{project.id}</td>
                <td>{project.project_title}</td>
                <td>
                  <Dropdown>
                    <Dropdown.Toggle>Manage</Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item>Edit</Dropdown.Item>
                      <Dropdown.Item>Delete</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </>
    );
  } else {
    return <h3 className="text-center">No Projects to Show :( <Link to='/projects'>Apply now</Link>!</h3>;
  }
}

export default ManageProjects;
