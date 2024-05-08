import Col from "react-bootstrap/Col";
import { Link, useLocation } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const SideBarProfilePage = ({ imgSrc, username }) => {
  const location = useLocation().pathname;

  return (
    <Col xs={9} md={3} className="px-0 mt-3 mb-5 my-md-0">
      <div className="border rounded-4 pt-3 pb-2 text-center px-2">
        <div className="border-bottom border-secondary pb-3">
          <img
            src={imgSrc}
            alt="avatar"
            className="me-2 rounded-circle"
            width="50px"
          ></img>
          <span>{username}</span>
        </div>
        <p className="text-center py-2 border-bottom border-secondary mb-0">
          <Link
            className={
              location === "/profile"
                ? "text-decoration-none text-primary fw-bold"
                : "text-decoration-none text-black fw-bold"
            }
            to="/profile"
          >
            My profile
          </Link>
        </p>
        <p className="text-center py-2 border-bottom border-secondary mb-0">
          <Link
            className={
              location === "/changePassword"
                ? "text-decoration-none text-primary fw-bold"
                : "text-decoration-none text-black fw-bold"
            }
            to="/changePassword"
          >
            Change password
          </Link>
        </p>
        <p className="text-center pt-2 mb-0">
          <Link className="text-decoration-none text-black fw-bold">
            Logout
          </Link>
        </p>
      </div>
    </Col>
  );
};

export default SideBarProfilePage;
