import React from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function AppHeader() {
  return (
    <Navbar expand="sm" variant="light" bg="light">
      <Container>
        <Navbar.Brand href="#">Easy Interns</Navbar.Brand>
      </Container>
      <Navbar.Collapse
        id="responsive-navbar-nav"
        className="justify-content-end"
      >
        <Nav className="justify-content-end">
          <Nav.Link to="" className="mx-4">
            <Link to="">
              <Button id="filled-btn" className="px-4 py-2">
                Sign Up
              </Button>
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="" className="mx-4">
              <Button id="bordered-btn" className="px-4 py-2">
                Login
              </Button>
            </Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default AppHeader;
