import React, { useEffect, useState } from "react";
import { handleInternRegistration } from "../Redux/Actions/actions";
import { useDispatch } from "react-redux";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import FileUpload from "../../../../../Commons/Components/FileUpload/index";
import Multiselect from "multiselect-react-dropdown";
import "./RegistrationForm.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function InternRegistrationForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const internLogin = useSelector((state) => state.internLoginReducer);
  const { internInfo } = internLogin;
  useEffect(() => {
    if (internInfo.length !== 0) {
      navigate("/intern-dash");
    }
  }, [navigate, internInfo]);

  // Form States
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [hpNumber, setHPNumber] = useState("");
  const [email, setEmail] = useState("");
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [education, setEducation] = useState("");
  const [password, setPassword] = useState("");
  const [resume, setResume] = useState(null);

  const onSelectSkills = (selectedList, selectedItem) => {
    setSelectedSkills(selectedList);
  };

  const onRemoveSkills = (selectedList, selectedItem) => {
    setSelectedSkills(selectedList);
  };

  const onSelectInterests = (selectedList, selectedItem) => {
    setSelectedInterests(selectedList);
  };

  const onRemoveInterests = (selectedList, selectedItem) => {
    setSelectedInterests(selectedList);
  };

  const handleRegistration = () => {
    let data = {
      // Make sure same field names as backend
      is_intern: true,
      firstName: firstName,
      lastName: lastName,
      hpNumber: hpNumber,
      email: email,
      skills: selectedSkills,
      interests: selectedInterests,
      education: education,
      password: password,
      resume: resume,
    };

    console.log(data.skills);
    dispatch(handleInternRegistration(data));
  };

  const handleEducationLevel = (e) => {
    setEducation(e.target.value);
  };

  return (
    <Container>
      <Container className="text-center fw-bold fs-3 my-5">
        Tell us about you
      </Container>
      <Form className="p-5 shadow shadow-100">
        <Container>
          <div className="mb-3 fw-bold">Personal Details</div>
          <Row className="mb-3">
            <Col>
              <Form.Group>
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  placeholder="First Name..."
                  onChange={(e) => setFirstName(e.target.value)}
                ></Form.Control>
                <Form.Text className="text-muted">
                  First name of correspondent.
                </Form.Text>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  placeholder="Last Name..."
                  onChange={(e) => setLastName(e.target.value)}
                ></Form.Control>
                <Form.Text className="text-muted">
                  Last name of correspondent.
                </Form.Text>
              </Form.Group>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <Form.Group>
                <Form.Label>Handphone Number</Form.Label>
                <Form.Control
                  placeholder="Number..."
                  onChange={(e) => setHPNumber(e.target.value)}
                ></Form.Control>
                <Form.Text className="text-muted">
                  Handphone number of correspondent.
                </Form.Text>
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col>
              <Form.Group>
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  placeholder="Enter Email..."
                  onChange={(e) => setEmail(e.target.value)}
                ></Form.Control>
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else. This will be
                  your username.
                </Form.Text>
              </Form.Group>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="********"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="********"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>
          <hr className="my-5"></hr>
          <div className="fw-bold mb-3">Education Level</div>
          <Row>
            <Container className="d-flex justify-content-between">
              <Form.Check
                inline
                type="radio"
                name="educationLevel"
                label="ITE"
                value="ITE"
                onChange={handleEducationLevel}
              ></Form.Check>
              <Form.Check
                inline
                type="radio"
                name="educationLevel"
                label="Polytechnic"
                value="Polytechnic"
                onChange={handleEducationLevel}
              ></Form.Check>
              <Form.Check
                inline
                type="radio"
                name="educationLevel"
                label="University"
                value="University"
                onChange={handleEducationLevel}
              ></Form.Check>
              <Form.Check
                inline
                type="radio"
                name="educationLevel"
                label="Others"
                value="Others"
                onChange={handleEducationLevel}
              ></Form.Check>
            </Container>
          </Row>
          <hr className="my-5"></hr>
          <div className="fw-bold mb-3">Skills & Interests</div>
          <Row className="mb-3">
            <Multiselect
              isObject={false}
              placeholder={"Skills"}
              showArrow={true}
              options={[
                "Software Engineering",
                "Frontend Developer",
                "Backend Developer",
                "DevOps",
                "Cloud Computing",
              ]}
              onSelect={onSelectSkills}
              onRemove={onRemoveSkills}
            ></Multiselect>
          </Row>
          <Row className="mb-3">
            <Multiselect
              isObject={false}
              placeholder={"Interests"}
              showArrow={true}
              options={[
                "Software Development",
                "Product Manager",
                "Business Analyst",
                "Data Analyst",
              ]}
              onSelect={onSelectInterests}
              onRemove={onRemoveInterests}
            ></Multiselect>
          </Row>
          <div className="fw-bold mb-3">Resume</div>
          <Row className="mb-5">
            <FileUpload uploadFile={setResume}></FileUpload>
          </Row>
          <Row className="d-flex justify-content-center">
            <Col md="auto">
              <Button id="next-btn" onClick={handleRegistration}>
                Register
              </Button>
            </Col>
          </Row>
        </Container>
      </Form>
    </Container>
  );
}

export default InternRegistrationForm;
