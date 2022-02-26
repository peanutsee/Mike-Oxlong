import { React } from "react";
import { Table, Button } from "react-bootstrap";

function EditableTableIntern({ tableEntries }) {
  const tableHeaders = Array.from(
    new Map(Object.entries(tableEntries[0])),
    ([header, value]) => ({ header, value })
  );

  return (
    <Table striped bordered hover size="lg" className="ProgressSteps__Table">
      <thead>
        <tr>
          {tableHeaders.map((v, k) => {
            return <th key={k}>{v.header}</th>;
          })}
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {tableEntries.map((entry, key) => {
          entry = Array.from(
            new Map(Object.entries(entry)),
            ([header, value]) => ({ header, value })
          );
          return (
            <tr key={key}>
              {entry.map((v, k) => {
                return <td key={k}>{v.value}</td>;
              })}
              <td>
                <Button variant="warning">edit</Button>{" "}
                <Button variant="danger">Delete</Button>{" "}
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default EditableTableIntern;
