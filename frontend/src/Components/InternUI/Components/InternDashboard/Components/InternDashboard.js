import React, { useState, useEffect } from "react";
import { Tabs } from "antd";
import { Container, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import ProgressSteps from "../../../../../Commons/Components/ProgressSteps/ProgressSteps";
import EditableTableIntern from "../../../../../Commons/Components/EditableTable/EditableTableIntern";
import LeftList from "../../../../../Commons/Components/ProgressSteps/LeftList";

import test from "./Data/test.json";

function InternDashboard() {
  const navigate = useNavigate();
  const { TabPane } = Tabs;
  const [nameClicked, setNameClicked] = useState("");
  console.log(nameClicked);

  const internLogin = useSelector((state) => state.internLoginReducer);
  const { internInfo } = internLogin;

  useEffect(() => {
    if (internInfo.length === 0) {
      navigate("/intern-portal");
    }
  }, [navigate, internInfo]);

  const tableEntries = [
    {
      "Job Title": "CEO",
      "Job Description": "Long text here pls",
      Status: "Star",
    },
    {
      "Job Title": "BEO",
      "Job Description": "Longer text here pls",
      Status: "Star",
    },
    {
      "Job Title": "DEO",
      "Job Description": "TEXT MEHASDHHADSU",
      Status: "Star",
    },
  ];

  return (
    <Container>
      <Tabs defaultActiveKey="1" centered>
        <TabPane tab="Internship Applications" key="1">
          <Row>
            <Col>
              <LeftList name={(app_name) => setNameClicked(app_name)} />
            </Col>
            <Col xs={10}>
              {test.map((data, index) => (
                <ProgressSteps
                  key={index}
                  number={data.no}
                  name={data.Internship_Title}
                  job={data.job_applied}
                  steps={data.steps}
                  intern={true}
                />
              ))}
            </Col>
          </Row>
        </TabPane>
        <TabPane tab="Manage Job Applications" key="2">
          <EditableTableIntern tableEntries={tableEntries} />
        </TabPane>
        <TabPane tab="Manage Project Applications" key="3"></TabPane>
      </Tabs>
    </Container>
  );
}

export default InternDashboard;
