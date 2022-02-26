import React, { useEffect } from "react";
import ManageInternships from "./ManageInternships";
import ManageProjects from "./ManageProjects";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getDashboard } from "../Redux/Actions/actions";
import { Form, Button, Container, Row, Col, Tabs, Tab } from "react-bootstrap";

function InternDashboard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const internLogin = useSelector((state) => state.internLoginReducer);
  const { internInfo } = internLogin;

  const internDataReducer = useSelector(
    (state) => state.retrieveDashboardReducer
  );
  const { dashboardData: internData } = internDataReducer;

  useEffect(() => {
    if (internInfo.length !== 0) {
      navigate("/intern-dash");
    }
    dispatch(getDashboard());
  }, [navigate, internInfo, dispatch]);
  return (
    <Container>
      <Tabs
        defaultActiveKey="internships"
        className="my-5 d-flex justify-content-center"
      >
        <Tab eventKey="internships" title="Internships">
          {internData && (
            <ManageInternships internData={internData} />
          )}
        </Tab>
        <Tab eventKey="project" title="Projects">
          {internData && <ManageProjects projects={internData.projects} />}
        </Tab>
      </Tabs>
    </Container>
  );
}

export default InternDashboard;
