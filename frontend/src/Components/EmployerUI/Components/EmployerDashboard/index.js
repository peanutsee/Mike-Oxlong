import React, { useState, useEffect } from "react";
import { Tabs } from "antd";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import ProgressSteps from "../../../../Commons/Components/ProgressSteps/ProgressSteps";
import EditableTable from "../../../../Commons/Components/EditableTable/EditableTable";

function EmployerDashboard() {
  const navigate = useNavigate();
  const { TabPane } = Tabs;

  const employerLogin = useSelector((state) => state.employerLoginReducer);
  const { employerInfo } = employerLogin;

  useEffect(() => {
    if (!employerInfo) {
      navigate("/employer-portal");
    }
  }, [navigate, employerInfo]);

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
