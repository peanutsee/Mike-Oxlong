import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProjects } from "../Redux/Actions/actions";
import { useNavigate } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function ProjectsList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const internLogin = useSelector((state) => state.internLoginReducer);
  const { internInfo } = internLogin;

  const projectsReducer = useSelector((state) => state.retrieveProjectsReducer);
  const { loading, projects } = projectsReducer;

  useEffect(() => {
    if (internInfo.length === 0) {
      navigate("/intern-portal");
    }
    dispatch(getProjects());
  }, [navigate, internInfo, dispatch]);

  return (
    <div className="p-5 my-5">
      <h2>Check out these projects!</h2>
      <p>
        The process of getting an internship requires you to{" "}
        <strong>practise</strong> a lot! Take on some projects from the various
        company and gain some industrial insights!
      </p>
      {loading ? (
        <p>Loading Projects...</p>
      ) : (
        <ProjectCard projects={projects} />
      )}
    </div>
  );
}

export default ProjectsList;
