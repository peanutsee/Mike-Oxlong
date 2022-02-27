import * as React from "react";
import ApplicantsComponent from "./ApplicantsComponent";

export default function StepsIntern(props) {
  const { internships } = props;

  return (
    <>
      {internships.map((internship) =>
        internship.enrolled_intern.map((intern) => (
          <ApplicantsComponent intern={intern} internship={internship} />
        ))
      )}
    </>
  );
}
