import React, { useState, useEffect } from "react";
import ManageApplicates from "./ManageApplicates";
import ManageInternships from "./ManageInternships";
import ManageProjects from "./ManageProjects";
import { useDispatch, useSelector } from "react-redux";
import { Form, Button, Container, Row, Col, Tabs, Tab } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { getEmployerData } from "../Redux/Actions/actions";

function EmployerDashboard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const employerLogin = useSelector((state) => state.employerLoginReducer);
  const { employerInfo } = employerLogin;

  const employerDataReducer = useSelector(
    (state) => state.retrieveEmployerDataReducer
  );
  const { employerData } = employerDataReducer;

  useEffect(() => {
    if (employerInfo.length !== 0) {
      navigate("/employer-dash");
    }
    dispatch(getEmployerData());
    console.log(employerData);
  }, [navigate, employerInfo, dispatch]);

  return (
    <Container >
      <Tabs
        defaultActiveKey="applicants"
        className="my-5 d-flex justify-content-center"
      >
        <Tab eventKey="applicants" title="Applicants">
          {employerData && <ManageApplicates employerData={employerData}/>}
        </Tab>
        <Tab eventKey="internships" title="Internships">
          {employerData && <ManageInternships internships={employerData.internships}/>}
        </Tab>
        <Tab eventKey="project" title="Projects">
          {employerData && <ManageProjects projects={employerData.projects}/>}
        </Tab>
      </Tabs>
    </Container>
  );
}

export default EmployerDashboard;
