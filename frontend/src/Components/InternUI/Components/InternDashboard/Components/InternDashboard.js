import React, { useState, useEffect } from "react";
import { Tabs } from "antd";
import { Container, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDashboard } from "../Redux/Actions/actions";

import ProgressSteps from "../../../../../Commons/Components/ProgressSteps/ProgressSteps";
import EditableTableIntern from "../../../../../Commons/Components/EditableTable/EditableTableIntern";

import test from "./Data/test.json";

function InternDashboard() {
  const dashboard = useSelector((state) => state.retrieveDashboardReducer);

  const internLogin = useSelector((state) => state.internLoginReducer);

  const { internInfo } = internLogin;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { TabPane } = Tabs;
  const [nameClicked, setNameClicked] = useState("");

  useEffect(() => {
    if (internInfo.length === 0) {
      navigate("/intern-portal");
    }
    dispatch(getDashboard());
  }, [navigate, internInfo, dispatch]);

  const { loading, dashboardData } = dashboard;

  console.log("Dashboard");
  console.log(dashboard);

  if (loading === true) {
    console.log("loading is " + loading);
    const { internships, projects } = dashboardData;

    //const internshipApplications = internships.reduce((acc, cur) => ({ ...acc, ["Internship Title"]: cur.internship_title, ["Internship Description"]: cur.internship_description }), {})

    // const internshipApplications = internships.map((internship) => {
    //   console.log(internship);
    //   //(({"internship_title", "internship_description", "intership_compensation"}) => ({}))(internship);
    // });

    // const internshipApplications = [
    //   {
    //     "Job Title": "CEO",
    //     "Job Description": "Long text here pls",
    //     Status: "Star",
    //   },
    //   {
    //     "Job Title": "BEO",
    //     "Job Description": "Longer text here pls",
    //     Status: "Star",
    //   },
    //   {
    //     "Job Title": "DEO",
    //     "Job Description": "TEXT MEHASDHHADSU",
    //     Status: "Star",
    //   },
    // ];

    const projectApplications = [
      {
        "Project Title": "Build Social Networking Site",
        "Job Description": "Long text here pls",
        Company: "Facebook",
        Status: "Star",
      },
      {
        "Project Title": "Build iNTUition v8.0 Hackathon Project",
        "Job Description": "Long text here pls",
        Company: "IEEE",
        Status: "Star",
      },
      {
        "Project Title": "Make Money",
        "Job Description": "Long text here pls",
        Company: "Money.Com",
        Status: "Star",
      },
    ];
  }

  return (
    <Container>
      <Tabs defaultActiveKey="1" centered>
        <TabPane tab="Internship Applications" key="1">
          <Row className="d-flex justify-content-center">
            <Col xs={10} className="justify-content-center">
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
        <TabPane tab="Manage Project Applications" key="2">
          {/* <EditableTableIntern tableEntries={projectApplications} /> */}
        </TabPane>
      </Tabs>
    </Container>
  );
}

export default InternDashboard;
