import { React } from "react";
import { Table, Button } from "react-bootstrap";

function EditableTable() {
  return (
    <Table striped bordered hover size="lg" className="ProgressSteps__Table">
      <thead>
        <tr>
          <th>#</th>
          <th>job listings</th>
          <th>Job Description</th>
          <th>Job Requirements</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Data Science Internship </td>
          <td>we need applicants to be able to have ...</td>
          <td>@mdo</td>
          <td>
            <Button variant="warning">edit</Button>{" "}
            <Button variant="danger">Delete</Button>{" "}
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default EditableTable;
