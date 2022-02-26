import React from "react";
import { Card, Row, Col, Image } from "react-bootstrap";

const data = [
  {
    key: 1,
    website: "Udemy",
    url: "https://www.udemy.com/",
    image: "/static/assets/udemy.png",
  },
  {
    key: 2,
    website: "LinkedIn Learning",
    url: "https://www.linkedin.com/learning/",
    image: "/static/assets/linkedin.png",
  },
  {
    key: 3,
    website: "Coursera",
    url: "https://www.coursera.org/",
    image: "/static/assets/cousera.png",
  },
];

function CoursesSites() {
  return (
    <div className="p-5 my-5">
      <h2>Check out these website for courses!</h2>
      <Row >
        {data.map((site) => (
          <Col sm={4}>
            <a href={site.url}>
              <Card>
                <Card.Body>
                  <div className="d-flex justify-content-center">
                    <Image fluid src={site.image} />
                  </div>
                </Card.Body>
              </Card>
            </a>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default CoursesSites;
