import React from 'react'
import StepsIntern from "./StepsIntern";

function ManageInternships(props) {
    const {internData} = props;
    console.log(internData)
  return (
    <div className="mb-3">
        <h3>Internships</h3>
        <p>Streamline intern application process with a onestop dashboard for all your internship application process needs.</p>
        {internData && <StepsIntern internships={internData.internships} />}
      </div>
  )
}

export default ManageInternships