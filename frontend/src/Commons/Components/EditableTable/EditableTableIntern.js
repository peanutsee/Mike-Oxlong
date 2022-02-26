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
          {tableHeaders.map((v) => {
            return <th>{v.header}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {tableEntries.map((entry) => {
          entry = Array.from(
            new Map(Object.entries(entry)),
            ([header, value]) => ({ header, value })
          );
          return (
            <tr>
              {entry.map((v) => {
                return <td>{v.value}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default EditableTableIntern;
