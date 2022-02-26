import React from "react";
import { Table, Dropdown } from "react-bootstrap";
import StepsIntern from "./StepsIntern";

function ManageApplicates(props) {
  const { employerData } = props;

  return (
    <>
      <div className="mb-3">
        <h3>Internships</h3>
        <p>Streamline intern hiring process with a onestop dashboard for all your internship hiring process needs.</p>
        {employerData && <StepsIntern internships={employerData.internships} />}
      </div>

      <h3>Projects</h3>
      {employerData && (
        <>
          <Table stripped hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Project Name</th>
                <th>Participant</th>
                <th>Manage</th>
              </tr>
            </thead>
            <tbody>
              {employerData.projects &&
                employerData.projects.map((project) =>
                  project.enrolled_intern.map((intern, key) => (
                    <tr>
                      <td>{key}</td>
                      <td>{project.project_title}</td>
                      <td>
                        {intern.first_name} {intern.last_name}
                      </td>
                      <td>
                        <Dropdown>
                          <Dropdown.Toggle>Manage</Dropdown.Toggle>
                          <Dropdown.Menu>
                            <Dropdown.Item>View Profile</Dropdown.Item>
                            <Dropdown.Item>View Project Progress</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </td>
                    </tr>
                  ))
                )}
            </tbody>
          </Table>
        </>
      )}
    </>
  );
}

export default ManageApplicates;
