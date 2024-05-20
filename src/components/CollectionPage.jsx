import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CarCard from "./CarCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { saveCars } from "../redux/actions";
import { Spinner } from "react-bootstrap";
import quality from "../assets/images/quality logo.png";

const CollectionPage = () => {
  // MAIN FUNCTIONS
  const dispatch = useDispatch();

  // GLOBAL STATE
  // const accessToken = useSelector((state) => state.authReducer.accessToken);
  const carList = useSelector((state) => state.carReducer.cars);
  const isLoadingCars = useSelector((state) => state.carReducer.isLoadingCars);

  // COMPONENT MOUNT/UPDATE
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(saveCars());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="back-to-top shadow-lg">
        <a href="#top">
          <i
            className="bi bi-chevron-up fs-2 rounded-2 p-2 border border-primary"
            style={{ backgroundColor: "#FFEFE5" }}
          ></i>
        </a>
      </div>
      <Container fluid className="py-4" style={{ backgroundColor: "#FFEFE5" }}>
        <h2 className="fw-bold mb-0 text-center text-primary">
          <i className="bi bi-newspaper text-primary"></i> OUR COLLECTION
        </h2>
      </Container>
      <Container className="py-5" id="topCollection">
        <Row className="justify-content-evenly">
          <Col xs={10} sm={11} lg={12}>
            <Row className="justify-content-center">
              <Col lg={8}>
                <p className="pt-4">
                  <span className="text-primary fw-bold">
                    German automobiles{" "}
                  </span>
                  are synonymous with engineering{" "}
                  <span className="text-primary fw-bold">excellence</span>,{" "}
                  <span className="text-primary fw-bold">luxury</span>, and
                  <span className="text-primary fw-bold"> performance</span>.
                  Renowned for their meticulous craftsmanship and innovative
                  technology, German cars set the benchmark for quality and
                  driving experience.
                </p>
                <p>
                  Brands such as{" "}
                  <span className="text-primary fw-bold">Mercedes-Benz</span>,
                  <span className="text-primary fw-bold"> BMW</span>,{" "}
                  <span className="text-primary fw-bold">Audi</span>, and{" "}
                  <span className="text-primary fw-bold">Porsche </span>
                  have become global symbols of prestige and reliability,
                  offering vehicles that combine powerful performance with
                  cutting-edge design. From the sleek lines of a sporty coupe to
                  the sophisticated elegance of a luxury sedan, German cars
                  cater to a wide range of tastes and preferences.
                </p>
                <p>
                  Their commitment to{" "}
                  <span className="text-primary fw-bold">safety</span>,{" "}
                  <span className="text-primary fw-bold">precision</span>, and
                  <span className="text-primary fw-bold">
                    {" "}
                    advanced features
                  </span>{" "}
                  ensures that each drive is an unparalleled experience. Embrace
                  the legacy of German engineering and discover why these
                  vehicles are celebrated worldwide for their unmatched quality
                  and enduring appeal.
                </p>
              </Col>
              <Col
                xs={8}
                lg={4}
                className="d-flex align-items-center justify-content-center mt-3 mt-lg-0"
              >
                <img src={quality} width="55%" className="rounded-circle"></img>
              </Col>
            </Row>
            {isLoadingCars && (
              <Col className="mt-5 d-flex justify-content-center align-items-center">
                <Spinner animation="border" variant="primary"></Spinner>
              </Col>
            )}
            {carList !== null && (
              <Row className="justify-content-evenly pt-5">
                {carList.content.map((car) => {
                  return <CarCard key={car.id} car={car} />;
                })}
              </Row>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CollectionPage;
