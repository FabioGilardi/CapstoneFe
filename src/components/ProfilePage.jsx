import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import SideBarProfilePage from "./SideBarProfilePage";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  PASSWORD_HAS_ERRORS,
  PASSWORD_IS_OK,
  USER_PUT_HAS_ERRORS,
  USER_PUT_IS_OK,
  getUserMe,
  saveReservations,
  saveReview,
  updateReservation,
  updateReview,
} from "../redux/actions";
import LoadingSpinner from "./LoadingSpinner";
import { useNavigate } from "react-router-dom";
import ReservationCard from "./ReservationCard";
import ReviewCard from "./ReviewCard";

const ProfilePage = () => {
  const initialRevForm = {
    title: "",
    description: "",
    rating: "",
  };

  const initialResForm = {
    date: "",
    time: "",
  };

  const initialFetchForm = {
    reservationDate: "",
  };

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const accessToken = useSelector((state) => state.authReducer.accessToken);
  const currentUser = useSelector((state) => state.userReducer.currentUser);
  const isLoadingCurrentUser = useSelector(
    (state) => state.userReducer.isLoadingCurrentUser
  );
  const reservationList = useSelector(
    (state) => state.reservationReducer.reservations
  );
  const isLoadingReservation = useSelector(
    (state) => state.reservationReducer.isLoadingReservation
  );
  const reservationUpdateIsOk = useSelector(
    (state) => state.reservationReducer.reservationUpdateIsOk
  );
  const reservationUpdateHasErrors = useSelector(
    (state) => state.reservationReducer.reservationUpdateHasErrors
  );
  const reviewList = useSelector((state) => state.reviewReducer.reviews);
  const reviewIsLoading = useSelector(
    (state) => state.reviewReducer.isLoadingReviews
  );
  const reviewUpdateIsOk = useSelector(
    (state) => state.reviewReducer.reviewUpdateIsOk
  );
  const reviewUpdateHasErrors = useSelector(
    (state) => state.reviewReducer.reviewUpdateHasErrors
  );

  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [resForm, setResForm] = useState(initialResForm);
  const [revForm, setRevForm] = useState(initialRevForm);
  const [fetchForm, setFetchForm] = useState(initialFetchForm);
  const [activeCardId, setActiveCardId] = useState(null);

  const handleClose = () => {
    setShow(false);
    dispatch(saveReservations(accessToken));
  };
  const handleShow = () => setShow(true);
  const handleClose2 = () => {
    setShow2(false);
    dispatch(saveReview(accessToken));
  };
  const handleShow2 = () => setShow2(true);

  const handleResForm = (e, attribute) => {
    setResForm({
      ...resForm,
      [attribute]: e.target.value,
    });
  };

  const handleRevForm = (e, attribute) => {
    setRevForm({
      ...revForm,
      [attribute]: e.target.value,
    });
  };

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
    dispatch(saveReview(accessToken));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setFetchForm({
      reservationDate: resForm.date + resForm.time,
    });
  }, [resForm]);

  return (
    <Container className={isLoadingCurrentUser ? "py-3 h-100" : "py-3"}>
      {isLoadingCurrentUser && <LoadingSpinner />}
      {!isLoadingCurrentUser && (
        <Row className="justify-content-center my-md-5">
          <Col xs={12} md={12} lg={8}>
            <Row className="justify-content-center position-relative">
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
                <div className="border-bottom border-tertiary border-2 pb-5 mt-2">
                  <h4 className="fw-bold mt-5">MY BOOKINGS</h4>
                  <p>Here you can find all bookings with sellers.</p>
                  <p>
                    Feel free to change the day and time of a reservation or
                    cancel it, after all we know that unexpected events are
                    always around the corner.
                  </p>
                  <p>
                    If you need to contact one of our sellers directly,
                    don&apos;t hesitate, we are always at your disposal.
                  </p>
                  {reservationList.length === 0 && (
                    <p className="fst-italic text-center text-primary">
                      There are no reservations yet
                    </p>
                  )}
                  {!isLoadingReservation && (
                    <Row xs={1} md={2}>
                      {reservationList.map((reservation) => {
                        return (
                          <ReservationCard
                            key={reservation.id}
                            reservation={reservation}
                            modalShow={handleShow}
                            activeCardId={setActiveCardId}
                          />
                        );
                      })}
                    </Row>
                  )}
                </div>
                <div>
                  <h4 className="fw-bold mt-5">MY REVIEWS</h4>
                  <p>
                    Here you can find all the reviews you have written about our
                    service.
                  </p>
                  <p>
                    Remember that your opinion is important as it allows us to
                    continuously improve.
                  </p>
                  {!reviewIsLoading && (
                    <Row xs={1} md={2}>
                      {reviewList.map((review) => {
                        return (
                          <ReviewCard
                            key={review.id}
                            review={review}
                            modalShow={handleShow2}
                            activeCardId={setActiveCardId}
                          />
                        );
                      })}
                    </Row>
                  )}
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      )}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Change Reservation Date And Time</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {reservationUpdateIsOk === true && (
            <>
              <Alert
                variant="success"
                className="d-flex justify-content-between align-items-center"
              >
                <i className="bi bi-check-circle fs-2"></i> Your reservation has
                been changed successfully
              </Alert>
            </>
          )}
          {reservationUpdateIsOk === false &&
            reservationUpdateHasErrors !== null && (
              <Alert variant="danger">
                <i className="bi bi-exclamation-triangle"></i>{" "}
                {reservationUpdateHasErrors}
              </Alert>
            )}
          <Form
            id="fetchForm"
            onSubmit={(e) => {
              e.preventDefault();
              dispatch(updateReservation(accessToken, fetchForm, activeCardId));
              setResForm(initialResForm);
            }}
          >
            <Form.Group className="mb-3">
              <Form.Label className="text-black ms-3 opacity-75 fw-bold">
                DATE
              </Form.Label>
              <Form.Control
                className="border rounded-pill border-primary"
                type="date"
                placeholder="DATE"
                value={resForm.date}
                required
                onChange={(e) => {
                  handleResForm(e, "date");
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="text-black ms-3 opacity-75 fw-bold">
                TIME
              </Form.Label>
              <Form.Select
                aria-label="Default select example"
                className="border rounded-pill border-primary"
                required
                onChange={(e) => {
                  handleResForm(e, "time");
                }}
              >
                <option></option>
                <option value="T9:00:00.000">9.00</option>
                <option value="T10:00:00.000">10.00</option>
                <option value="T11:00:00.000">11.00</option>
                <option value="T12:00:00.000">12.00</option>
                <option value="T13:00:00.000">13.00</option>
                <option value="T14:00:00.000">14.00</option>
                <option value="T15:00:00.000">15.00</option>
                <option value="T16:00:00.000">16.00</option>
                <option value="T17:00:00.000">17.00</option>
                <option value="T18:00:00.000">18.00</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {!reservationUpdateIsOk && (
            <Button
              variant="primary"
              className="text-white"
              type="submit"
              form="fetchForm"
            >
              Save Changes
            </Button>
          )}
        </Modal.Footer>
      </Modal>
      <Modal show={show2} onHide={handleClose2}>
        <Modal.Header closeButton>
          <Modal.Title>Change Review</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {reviewUpdateIsOk === true && (
            <>
              <Alert
                variant="success"
                className="d-flex justify-content-between align-items-center"
              >
                <i className="bi bi-check-circle fs-2"></i> Your reservation has
                been changed successfully
              </Alert>
            </>
          )}
          {reviewUpdateIsOk === false && reviewUpdateHasErrors !== null && (
            <Alert variant="danger">
              <i className="bi bi-exclamation-triangle"></i>{" "}
              {reviewUpdateHasErrors}
            </Alert>
          )}
          <Form
            id="revForm"
            onSubmit={(e) => {
              e.preventDefault();
              dispatch(updateReview(accessToken, revForm, activeCardId));
              setRevForm(initialRevForm);
            }}
          >
            <Form.Group className="mb-3">
              <Form.Control
                className="border rounded-pill border-primary"
                type="text"
                placeholder="TITLE"
                value={revForm.title}
                required
                onChange={(e) => {
                  handleRevForm(e, "title");
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                className="border rounded-pill border-primary"
                type="text"
                placeholder="DESCRIPTION"
                value={revForm.description}
                required
                onChange={(e) => {
                  handleRevForm(e, "description");
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              {[1, 2, 3, 4, 5].map((value) => (
                <i
                  key={value}
                  onClick={() => {
                    setRevForm({
                      ...revForm,
                      rating: value,
                    });
                  }}
                  className={
                    value <= revForm.rating
                      ? "bi bi-star-fill text-warning ms-2 fs-4 star"
                      : "bi bi-star text-warning ms-2 fs-4 star"
                  }
                ></i>
              ))}
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose2}>
            Close
          </Button>
          {!reviewUpdateIsOk && (
            <Button
              variant="primary"
              className="text-white"
              type="submit"
              form="revForm"
            >
              Save Changes
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default ProfilePage;
