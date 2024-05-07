import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/logo.png";

const CustomNavbar = () => {
  const location = useLocation().pathname;

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="bg-body-tertiary"
      bg="dark"
      data-bs-theme="dark"
    >
      <Container fluid>
        <Navbar.Brand>
          <Link to="/">
            <img src={logo} alt="logo" width="80px" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link
              className={
                location === "/" ? "nav-link active hover" : "nav-link hover"
              }
              to="/"
            >
              Home
            </Link>
            <Link
              className={
                location === "/collection"
                  ? "nav-link active hover"
                  : "nav-link hover"
              }
              to="/collection"
            >
              Our Collection
            </Link>
            <Link
              className={
                location === "/contact"
                  ? "nav-link active hover"
                  : "nav-link hover"
              }
              to="/contact"
            >
              Contact Us
            </Link>
          </Nav>
          <Nav>
            <Link
              className={
                location === "/login" || location === "/register"
                  ? "nav-link active"
                  : "nav-link"
              }
              to="/login"
            >
              <i className="bi bi-person-circle"></i> Login
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
