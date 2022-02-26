import { React, useState } from "react";
import { Tabs } from "antd";
import { Container } from "react-bootstrap";

import ProgressSteps from "../../../../Commons/Components/ProgressSteps/ProgressSteps";
import EditableTable from "../../../../Commons/Components/EditableTable/EditableTable";

function EmployerDashboard() {
  const { TabPane } = Tabs;

  return (
    <Container>
      <Tabs defaultActiveKey="1" centered>
        <TabPane tab="Intern Applicants" key="1">
          <ProgressSteps />
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
