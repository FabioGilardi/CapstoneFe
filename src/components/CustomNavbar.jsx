import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { useSelector } from "react-redux";

const CustomNavbar = () => {
  // MAIN FUNCTIONS
  const location = useLocation().pathname;

  // GLOBAL STATE
  const accessToken = useSelector((state) => state.authReducer.accessToken);
  const userRole = useSelector((state) => state.userReducer.userRole);

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
              HOME
            </Link>
            <Link
              className={
                location === "/collection" || location.includes("/car/")
                  ? "nav-link active hover"
                  : "nav-link hover"
              }
              to="/collection"
            >
              OUR COLLECTION
            </Link>
            <Link
              className={
                location === "/about"
                  ? "nav-link active hover"
                  : "nav-link hover"
              }
              to="/about"
            >
              ABOUT US
            </Link>
            <Link
              className={
                location === "/contact"
                  ? "nav-link active hover"
                  : "nav-link hover"
              }
              to="/contact"
            >
              CONTACT US
            </Link>
            {userRole === "SELLER" && (
              <Link
                className={
                  location === "/sellerSection"
                    ? "nav-link active hover"
                    : "nav-link hover"
                }
                to="/sellerSection"
              >
                SELLER SECTION
              </Link>
            )}
          </Nav>
          <Nav>
            <Link
              className={
                location === "/login" ||
                location === "/register" ||
                location === "/profile"
                  ? "nav-link active"
                  : "nav-link"
              }
              to={accessToken !== "" ? "/profile" : "/login"}
            >
              <i className="bi bi-person-circle"></i>
              {accessToken !== "" ? " MY PROFILE" : " LOGIN"}
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
