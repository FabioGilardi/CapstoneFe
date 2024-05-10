import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import SideBarProfilePage from "./SideBarProfilePage";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  PASSWORD_HAS_ERRORS,
  PASSWORD_IS_OK,
  USER_PUT_HAS_ERRORS,
  USER_PUT_IS_OK,
  getUserMe,
  saveReservations,
} from "../redux/actions";
import LoadingSpinner from "./LoadingSpinner";
import { useNavigate } from "react-router-dom";
import ReservationCard from "./ReservationCard";

const ProfilePage = () => {
  const navigate = useNavigate();

  const accessToken = useSelector((state) => state.authReducer.accessToken);
  const currentUser = useSelector((state) => state.userReducer.currentUser);
  const isLoadingCurrentUser = useSelector(
    (state) => state.userReducer.isLoadingCurrentUser
  );
  const reservationList = useSelector(
    (state) => state.reservationReducer.reservations
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserMe(accessToken));
    dispatch({
      type: USER_PUT_IS_OK,
      payload: false,
    });
    dispatch({
      type: USER_PUT_HAS_ERRORS,
      payload: null,
    });
    dispatch({
      type: PASSWORD_IS_OK,
      payload: null,
    });
    dispatch({
      type: PASSWORD_HAS_ERRORS,
      payload: null,
    });
    dispatch(saveReservations(accessToken));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container className={isLoadingCurrentUser ? "py-3 h-100" : "py-3"}>
      {isLoadingCurrentUser && <LoadingSpinner />}
      {!isLoadingCurrentUser && (
        <Row className="justify-content-center my-md-5">
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
                <div className="text-center border-bottom border-tertiary border-2 pb-5 mt-2">
                  <Button
                    variant="primary"
                    className="text-white rounded-pill w-50 fw-bold"
                    onClick={() => {
                      navigate("/profileUpdate");
                    }}
                  >
                    UPDATE
                  </Button>
                </div>
                <h4 className="fw-bold mt-5">MY BOOKINGS</h4>
                <p>Here you can find all bookings with sellers.</p>
                <p>
                  Feel free to change the day and time of a reservation or
                  cancel it, after all we know that unexpected events are always
                  around the corner.
                </p>
                <p>
                  If you need to contact one of our sellers directly, don&apos;t
                  hesitate, we are always at your disposal.
                </p>
                {reservationList.length === 0 && (
                  <p className="fst-italic text-center text-primary">
                    There are no reservations yet
                  </p>
                )}
                <Row xs={2}>
                  {reservationList.map((reservation) => {
                    return (
                      <ReservationCard
                        key={reservation.id}
                        reservation={reservation}
                      />
                    );
                  })}
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default ProfilePage;
