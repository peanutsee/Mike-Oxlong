import React from "react";
import { Table, Dropdown } from "react-bootstrap";

function ManageInternships(props) {
  const { internships } = props;
  if (internships.length !== 0) {
    return (
      <>
        <h3>Our Internships</h3>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Position</th>
              <th>Compensation</th>
              <th>Location</th>
              <th>Manage</th>
            </tr>
          </thead>
          <tbody>
            {internships.map((internship) => (
              <tr>
                <td>{internship.id}</td>
                <td>{internship.internship_title}</td>
                <td>{internship.internship_compensation}</td>
                <td>{internship.internship_location}</td>
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
    return null;
  }
}

export default ManageInternships;
