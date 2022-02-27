import React, { useEffect } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { getCourses } from "../Redux/Actions/actions";

function RecommendedCourses() {
  const dispatch = useDispatch();
  const internLogin = useSelector((state) => state.internLoginReducer);
  const { internInfo } = internLogin;

  const coursesReducer = useSelector((state) => state.retrieveCoursesReducer);
  const { courses } = coursesReducer;
  useEffect(() => {
    dispatch(getCourses());
  }, [dispatch]);

  return (
    <div className="p-5 mb-5">
      <h2>Because you are interested in....</h2>
      <p>
        {internInfo &&
          internInfo.interests
            .substring(2, internInfo.interests.length - 2)
            .replaceAll("', '", ", ")}
      </p>
      <h5>Try these courses!</h5>
      <Row>
        {courses &&
          courses.map((course) => (
            <Col sm={3}>
              <Card className="h-100">
                <Card.Title className="py-2 text-center">
                  {course.course_name}
                </Card.Title>
                <Card.Body>{course.course_description}</Card.Body>
                <Card.Footer className="d-flex justify-content-end">
                  <Button>Enroll</Button>
                </Card.Footer>
              </Card>
            </Col>
          ))}
      </Row>
    </div>
  );
}

export default RecommendedCourses;
