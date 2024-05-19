import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Alert from "react-bootstrap/Alert";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { postNewReview, saveAllUsersReview } from "../redux/actions";
import ReviewCard from "./ReviewCard";
import sellersTeam from "../assets/images/sellerTeam.jpg";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  // GLOBAL FUNCTIONS
  const dispatch = useDispatch();

  const navigate = useNavigate();

  // GLOBAL STATE
  const accessToken = useSelector((state) => state.authReducer.accessToken);
  const allReviews = useSelector(
    (state) => state.reviewReducer.allUsersReviews
  );
  const newReviewIsOk = useSelector(
    (state) => state.reviewReducer.newReviewIsOk
  );
  const newReviewHasErrors = useSelector(
    (state) => state.reviewReducer.newReviewHasErrors
  );

  // REVIEW FORM
  const initialRevForm = {
    title: "",
    description: "",
    rating: "",
  };

  const [revForm, setRevForm] = useState(initialRevForm);

  const handleRevForm = (e, attribute) => {
    setRevForm({
      ...revForm,
      [attribute]: e.target.value,
    });
  };

  // REVIEW MODAL
  const [show2, setShow2] = useState(false);

  const handleClose2 = () => {
    setShow2(false);
    dispatch(saveAllUsersReview(accessToken));
  };

  const handleShow2 = () => setShow2(true);

  // COMPONENT MOUNT/UPDATE
  useEffect(() => {
    dispatch(saveAllUsersReview(accessToken));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Container fluid className="hero">
        <Row className="h-100">
          <Col
            className="h-100 d-flex flex-column justify-content-between"
            style={{ backgroundColor: "#0000004a" }}
          >
            <h1 className="text-primary mt-5 text-center fw-bold hero-text">
              D&G MOTORS
            </h1>
            <div className="mb-5 text-center">
              <a
                href="#warranty"
                className="rounded-circle bg-primary p-3 rounded-circle"
              >
                <i className="bi bi-chevron-down text-white"></i>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
      <Container
        fluid
        id="warranty"
        style={{ backgroundColor: "#FFEFE5" }}
        className="py-5"
      >
        <Row className="justify-content-center">
          <h1 className="text-primary text-center fw-bold">
            Certification and guarantee services
          </h1>
          <Col xs={11} md={10} lg={8}>
            <h5 className="text-center my-4">
              You can now select ads based on available certifications and
              guarantees. You won&apos;t need to trust, because you can choose
              all the security of D&G Motors and have the car you want the way
              you want it
            </h5>
            <Row className="justify-content-evenly">
              <Col xs={12} lg={5} className="bg-white p-3 rounded-4 shadow">
                <Row className="h-100">
                  <Col
                    xs={2}
                    className="d-flex align-items-center justify-content-center"
                  >
                    <img
                      src="https://www.automobile.it/_next/static/media/title.2e8b5df5.svg"
                      style={{ objectFit: "fill" }}
                    ></img>
                  </Col>
                  <Col
                    xs={10}
                    className="d-flex flex-column justify-content-center"
                  >
                    <h5 className="fw-bold mb-1">Guaranteed used</h5>
                    <p className="mb-0">
                      Choose all the safety of second-hand products guaranteed
                      by the parent company
                    </p>
                  </Col>
                </Row>
              </Col>
              <Col
                xs={12}
                lg={5}
                className="bg-white p-3 rounded-4 mt-4 mt-lg-0 shadow"
              >
                <Row className="h-100">
                  <Col
                    xs={2}
                    className="d-flex align-items-center justify-content-center"
                  >
                    <img
                      src="https://www.automobile.it/_next/static/media/carfax-logo.96dace17.svg"
                      style={{ objectFit: "fill" }}
                    ></img>
                  </Col>
                  <Col
                    xs={10}
                    className="d-flex flex-column justify-content-center"
                  >
                    <h5 className="fw-bold mb-1">Vehicle History</h5>
                    <p className="mb-0">
                      We have checked the history of the vehicle to ensure
                      maximum quality
                    </p>
                  </Col>
                </Row>
              </Col>
              <Col
                xs={12}
                lg={5}
                className="bg-white p-3 rounded-4 mt-4 shadow"
              >
                <Row className="h-100">
                  <Col
                    xs={2}
                    className="d-flex align-items-center justify-content-center"
                  >
                    <img
                      src="https://www.automobile.it/_next/static/media/dekra-logo.7c091755.svg"
                      style={{ objectFit: "fill" }}
                    ></img>
                  </Col>
                  <Col
                    xs={10}
                    className="d-flex flex-column justify-content-center"
                  >
                    <h5 className="fw-bold mb-1">Vehicle control</h5>
                    <p className="mb-0">
                      Take advantage of an accurate expert service carried out
                      by a technician
                    </p>
                  </Col>
                </Row>
              </Col>
              <Col
                xs={12}
                lg={5}
                className="bg-white p-3 rounded-4 mt-4 shadow"
              >
                <Row className="h-100">
                  <Col
                    xs={2}
                    className="d-flex align-items-center justify-content-center"
                  >
                    <img
                      src="https://www.automobile.it/_next/static/media/attribute-km.1cb2cf5e.svg"
                      style={{ objectFit: "fill" }}
                    ></img>
                  </Col>
                  <Col
                    xs={10}
                    className="d-flex flex-column justify-content-center"
                  >
                    <h5 className="fw-bold mb-1">Kilometers certification</h5>
                    <p className="mb-0">
                      Verification of real kilometers through a device that
                      detects tampering
                    </p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Container fluid className="py-5">
        <Row className="justify-content-center">
          <h1 className="text-center fw-bold mb-4">Drive Your Choice</h1>
          <Col xs={11} md={10} lg={8}>
            <Row className="justify-content-center">
              <Col xs={10} sm={8} md={7} xl={5}>
                <img
                  alt="sellers"
                  src={sellersTeam}
                  style={{ objectFit: "fill" }}
                  className="w-100"
                ></img>
              </Col>
              <Col
                xs={12}
                xl={5}
                className="d-flex flex-column justify-content-evenly align-items-center mt-3 mt-xl-0"
              >
                <p className="text-center">
                  Welcome to our dealership! We are proud to present an
                  exclusive collection of cars, carefully selected to meet all
                  your needs. Whether you are looking for an economical city
                  car, a spacious family SUV, a high-performance sports car, or
                  a state-of-the-art eco-friendly vehicle, you will find the
                  perfect solution here.
                </p>
                <p className="text-center">
                  Come visit us to discover our selection and let our team of
                  professionals help you find the car of your dreams. We look
                  forward to providing you with a unique and satisfying
                  purchasing experience.
                </p>
                <Button
                  variant="primary"
                  className="w-50 text-white rounded-pill"
                  onClick={() => {
                    navigate("/collection");
                  }}
                >
                  GO TO OUR COLLECTION
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Container fluid className="py-5" style={{ backgroundColor: "#FFEFE5" }}>
        <Row className="justify-content-center">
          <h1 className="text-center fw-bold text-primary">About Us</h1>
          <Col xs={11} md={10} lg={8} className="mt-4">
            {allReviews.length !== 0 && (
              <Row xs={1} md={2} xl={4} className="mb-4">
                {allReviews.slice(allReviews.length - 4).map((review) => {
                  return <ReviewCard key={review.id} review={review} />;
                })}
              </Row>
            )}
            <div className="text-center d-flex flex-column flex-sm-row justify-content-around">
              <Button
                variant="primary"
                size="lg"
                className="text-white rounded-pill px-4 mb-3 mb-sm-0"
                onClick={() => {
                  handleShow2();
                }}
              >
                ADD A REVIEW <i className="bi bi-plus-lg"></i>
              </Button>
              <Button
                variant="primary"
                size="lg"
                className="text-white rounded-pill px-4"
                onClick={() => {
                  navigate("/about");
                }}
              >
                FIND OUT MORE <i className="bi bi-chevron-right"></i>
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
      <Modal show={show2} onHide={handleClose2}>
        <Modal.Header closeButton>
          <Modal.Title>Add a Review</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {newReviewIsOk === true && (
            <>
              <Alert variant="success" className="d-flex align-items-center">
                <i className="bi bi-check-circle fs-2 me-3"></i> Your
                reservation has been changed successfully
              </Alert>
            </>
          )}
          {newReviewIsOk === false && newReviewHasErrors !== null && (
            <Alert variant="danger">
              <i className="bi bi-exclamation-triangle"></i>{" "}
              {newReviewHasErrors}
            </Alert>
          )}
          <Form
            id="revForm"
            onSubmit={(e) => {
              e.preventDefault();
              dispatch(postNewReview(accessToken, revForm));
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
          {!newReviewIsOk && (
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
    </>
  );
};

export default HomePage;
