import React from "react";
import { useSelector, useDispatch } from "react-redux";

function RecommendedCourses() {
  const internLogin = useSelector((state) => state.internLoginReducer);
  const { internInfo } = internLogin;

  console.log(internInfo)
  return <div>RecommendedCourses</div>;
}

export default RecommendedCourses;
