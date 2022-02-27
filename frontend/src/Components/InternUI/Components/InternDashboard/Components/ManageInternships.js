import React from "react";
import StepsIntern from "./StepsIntern";
import { Link } from "react-router-dom";

function ManageInternships(props) {
  const { internData } = props;
  return (
    <div className="mb-3">
      {internData && internData.internships.length !== 0 ? (
        <>
          <h3>Internships</h3>
          <p>
            Streamline intern application process with a onestop dashboard for
            all your internship application process needs.
          </p>
          <StepsIntern internships={internData.internships} />
        </>
      ) : (
        <>
          <h3 className="text-center">
            No Internships to Show :( <Link to="/internships">Apply now</Link>!
          </h3>
        </>
      )}
    </div>
  );
}

export default ManageInternships;
