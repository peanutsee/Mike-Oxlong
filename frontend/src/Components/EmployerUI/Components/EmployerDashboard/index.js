import { React, useState } from "react";
import { Tabs } from "antd";
import { Container, Col, Row } from "react-bootstrap";

import ProgressSteps from "../../../../Commons/Components/ProgressSteps/ProgressSteps";
import EditableTable from "../../../../Commons/Components/EditableTable/EditableTable";
import LeftList from "../../../../Commons/Components/ProgressSteps/LeftList";

import test from "./Data/test.json";

function EmployerDashboard() {
  const { TabPane } = Tabs;
  const [nameClicked, setNameClicked] = useState("");
  console.log(nameClicked);

  return (
    <Container>
      <Tabs defaultActiveKey="1" centered>
        <TabPane tab="Intern Applicants" key="1">
          <Row>
            <Col>
              <LeftList name={(app_name) => setNameClicked(app_name)} />
            </Col>
            <Col xs={10}>
              {test.map((data, index) => (
                <ProgressSteps
                  key={index}
                  number={data.no}
                  name={data.Applicant_Name}
                  job={data.job_applied}
                  steps={data.steps}
                />
              ))}
            </Col>
          </Row>
        </TabPane>
        <TabPane tab="Manage Job Listings" key="2">
          <EditableTable />
        </TabPane>
        <TabPane tab="Manage Project Listings" key="3"></TabPane>
      </Tabs>
    </Container>
  );
}

export default EmployerDashboard;
