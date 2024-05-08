import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import SideBarProfilePage from "./SideBarProfilePage";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUserMe } from "../redux/actions";
import LoadingSpinner from "./LoadingSpinner";

const ProfilePage = () => {
  const accessToken = useSelector((state) => state.authReducer.accessToken);
  const currentUser = useSelector((state) => state.userReducer.currentUser);
  const isLoadingCurrentUser = useSelector(
    (state) => state.userReducer.isLoadingCurrentUser
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserMe(accessToken));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container className={isLoadingCurrentUser ? "py-3 h-100" : "py-3"}>
      {isLoadingCurrentUser && <LoadingSpinner />}
      {!isLoadingCurrentUser && (
        <Row className="justify-content-center">
          <Col xs={12} md={12} lg={8}>
            <Row className="justify-content-center">
              <SideBarProfilePage
                imgSrc={currentUser.avatar}
                username={currentUser.username}
              />
              <Col xs={12} md={9} className="ps-4">
                <h4 className="fw-bold">MY PROFILE</h4>
                <p>
                  Here you can see all the information provided during
                  registration. If you made any mistakes you can always change
                  them later.
                </p>
                <ul className="list-unstyled">
                  <li>
                    <span className="text-primary">First Name:</span>{" "}
                    {currentUser.name}
                  </li>
                  <li className="mt-4">
                    <span className="text-primary">Last Name:</span>{" "}
                    {currentUser.surname}
                  </li>
                  <li className="mt-4">
                    <span className="text-primary">Email:</span>{" "}
                    {currentUser.email}
                  </li>
                  <li className="mt-4">
                    <span className="text-primary">Birthday:</span>{" "}
                    {currentUser.birthDate}
                  </li>
                </ul>
                <div className="text-center">
                  <Button
                    variant="primary"
                    className="text-white rounded-pill w-50 fw-bold"
                  >
                    UPDATE
                  </Button>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default ProfilePage;
