import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card, Row, Col, Image } from "react-bootstrap";

function RecommendedCourses() {
  const internLogin = useSelector((state) => state.internLoginReducer);
  const { internInfo } = internLogin;

  return <div className='p-5 my-5'>
      <h2>Because you are interested in....</h2>
      <p>{internInfo.interests}</p>
      <h5>Try these courses!</h5>
  </div>;
}

export default RecommendedCourses;
