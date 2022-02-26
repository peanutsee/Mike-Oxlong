import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getInternships } from "../Redux/Actions/actions";
import { useNavigate } from "react-router-dom";
import InternshipCard from "./InternshipCard";
import { Link } from "react-router-dom";

function InternshipsList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const internLogin = useSelector((state) => state.internLoginReducer);
  const { internInfo } = internLogin;

  const internshipReducer = useSelector(
    (state) => state.retrieveInternshipsReducer
  );
  const { loading, internships } = internshipReducer;

  useEffect(() => {
    if (internInfo.length === 0) {
      navigate("/intern-portal");
    }
    dispatch(getInternships());
  }, [navigate, internInfo, dispatch]);

  return (
    <div className="p-5 my-5">
      <h2>Check out these internships!</h2>
      <p>
        At Easy Intern Inc, we streamline the internship application process for
        you. Go to your <Link to="/intern-dash">dashboard</Link> to have an
        overview of the internships you have applied for! The internships here are sorted based on your interests!
      </p>
      {loading ? (
        <p>Loading Internships...</p>
      ) : (
        <InternshipCard internships={internships} />
      )}
    </div>
  );
}

export default InternshipsList;
