import React from "react";
import {
  Navbar,
  Container,
  Offcanvas,
  Nav,
  Button,
  ListGroup,
} from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { employerLogout } from "../../Components/EmployerUI/Components/AuthLogin/Redux/Actions/actions";
import { internLogout } from "../../Components/InternUI/Components/AuthLogin/Redux/Actions/actions";

function AppHeader() {
  const dispatch = useDispatch();
  const employerLogin = useSelector((state) => state.employerLoginReducer);
  const { employerInfo } = employerLogin;

  const internLogin = useSelector((state) => state.internLoginReducer);
  const { internInfo } = internLogin;

  const handleEmployerLogout = () => {
    dispatch(employerLogout());
    window.location.reload(true);
  };

  const handleInternLogout = () => {
    dispatch(internLogout());
    window.location.reload(true);
  };

  return (
    <div>
      <Navbar bg="light" expand={false}>
        <Container fluid>
          <Link to="/">
            <Navbar.Brand>Easy Intern Inc.</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton className="bg-primary">
              <Offcanvas.Title id="offcanvasNavbarLabel">
                Easy Intern Inc.
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                {employerInfo.length !== 0 && internInfo.length === 0 ? (
                  <>
                    <ListGroup className="shadow shadow-100">
                      <ListGroup.Item>
                        <Link to="/employer-dash">
                          <Nav.Item>Dashboard</Nav.Item>
                        </Link>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <Link to="/create-project">Create Project</Link>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <Link to="/create-internship">Create Internship</Link>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <Link to="/employer-profile">
                          Employer Profile Management
                        </Link>
                      </ListGroup.Item>
                    </ListGroup>
                    <Button
                      className="btn btn-secondary my-5"
                      onClick={handleEmployerLogout}
                    >
                      Logout
                    </Button>
                  </>
                ) : employerInfo.length === 0 && internInfo.length !== 0 ? (
                  <>
                    <ListGroup className="shadow shadow-100">
                      <ListGroup.Item>
                        <Link to="/intern-dash">
                          <Nav.Item>Dashboard</Nav.Item>
                        </Link>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <Link to="/upskill">Courses</Link>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <Link to="/internships">Internships</Link>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <Link to="/projects">Projects</Link>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <Link to="/intern-profile">
                          Intern Profile Management
                        </Link>
                      </ListGroup.Item>
                    </ListGroup>
                    <Button
                      onClick={handleInternLogout}
                      type="submit"
                      className="btn btn-secondary my-5"
                    >
                      Logout
                    </Button>
                  </>
                ) : (
                  <>
                    <ListGroup>
                      <ListGroup.Item>
                        <Link to="/intern-portal">
                          <Nav.Item>Intern Portal</Nav.Item>
                        </Link>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <Link to="/employer-portal">
                          <Nav.Item>Employer Portal</Nav.Item>
                        </Link>
                      </ListGroup.Item>
                    </ListGroup>
                  </>
                )}
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
}

export default AppHeader;
