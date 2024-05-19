import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import logo from "../assets/images/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getSellers } from "../redux/actions";

const AboutUsPage = () => {
  // MAIN FUNCTIONS
  const dispatch = useDispatch();

  // GLOBAL STATE
  const accessToken = useSelector((state) => state.authReducer.accessToken);
  const sellerList = useSelector((state) => state.userReducer.sellers);

  // OTHER FUNCTIONS
  const stringManipulation = (string) => {
    return string.charAt(0).toUpperCase() + string.substring(1).toLowerCase();
  };

  // COMPONENT MOUNT/UPDATE
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getSellers(accessToken));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Container fluid className="py-5">
        <Row className="justify-content-center">
          <h2 className="fw-bold text-center mb-0">ABOUT US</h2>
          <Col xs={11} md={10} lg={8}>
            <Row className="mt-5 justify-content-center">
              <Col xs={10} lg={6}>
                <img
                  alt="logo"
                  src={logo}
                  className="w-100 rounded-4"
                  style={{ objectFit: "fill" }}
                ></img>
              </Col>
              <Col
                xs={12}
                lg={6}
                className="text-center d-flex flex-column justify-content-evenly mt-4 mt-lg-0"
              >
                <h4 className="fw-bold">OUR STORY</h4>
                <p className="mb-0">
                  Our dealership was founded in 1997 with the mission to provide
                  quality vehicles and exceptional customer service.
                </p>
                <p className="mb-0">
                  With a passion for automobiles and a commitment to customer
                  satisfaction, we have built a strong reputation. From the
                  beginning, we&apos;ve aimed to make the purchasing experience
                  transparent and enjoyable.
                </p>
                <p className="mb-0">
                  Thanks to the support of our community, we&apos;ve grown into
                  a key player in the automotive industry.
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Container fluid className="py-5" style={{ backgroundColor: "#FFEFE5" }}>
        <h4 className="fw-bold text-primary text-center mb-4">
          OUR PRINCIPLES
        </h4>
        <Row className="justify-content-center">
          <Col xs={11} md={10} lg={8}>
            <Row xs={1} md={3} className="justify-content-around">
              <Col className="d-flex flex-column align-items-center">
                <img
                  src="https://www.automobile.it/_next/static/media/transparency.6f9608cc.svg"
                  width="120px"
                ></img>
                <p className="fw-bold">TRANSPARENCY</p>
                <p className="text-center">
                  We want you to be in a position to make the best decision, so
                  we are committed to giving you all the information you need
                </p>
              </Col>
              <Col className="d-flex flex-column align-items-center">
                <img
                  src="https://www.automobile.it/_next/static/media/hand.6c3da3ae.svg"
                  width="120px"
                ></img>
                <p className="fw-bold">SIMPLICITY</p>
                <p className="text-center">
                  We facilitate the search process: we want you to be able to
                  find exactly what you are looking for in just a few clicks
                </p>
              </Col>
              <Col className="d-flex flex-column align-items-center">
                <img
                  src="https://www.automobile.it/_next/static/media/experience.1a323833.svg"
                  width="120px"
                ></img>
                <p className="fw-bold">EXPERIENCE</p>
                <p className="text-center">
                  We know the automotive world well and with our experience we
                  guide you towards the perfect solution for you
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col xs={11} md={10} lg={8}>
            <Row>
              <Col
                xs={12}
                lg={8}
                className="text-center d-flex flex-column justify-content-center align-items-center order-1"
              >
                <h4 className="fw-bold">OUR MISSION</h4>
                <p className="mb-0">
                  We help you find the right car for you, the one you were
                  looking for, the one you really like, the perfect one for your
                  needs, but above all{" "}
                  <span className="fw-bold">a car that is truly reliable</span>.
                </p>
              </Col>
              <Col
                xs={12}
                lg={4}
                className="d-flex justify-content-center align-items-center order-0 order-lg-1 mb-3 mb-lg-0"
              >
                <img
                  src="https://www.automobile.it/_next/static/media/mission.0c5d4233.svg"
                  width="150px"
                ></img>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Container fluid className="py-5" style={{ backgroundColor: "#FFEFE5" }}>
        <Row className="justify-content-center">
          <h4 className="text-primary fw-bold text-center mb-4">OUR TEAM</h4>
          <Col xs={11} md={10} lg={8}>
            <Row className="justify-content-center">
              {sellerList.map((seller) => {
                return (
                  <Col
                    key={seller.id}
                    id={seller.id}
                    xs={5}
                    md={3}
                    className="d-flex justify-content-md-center justify-content-start mb-3 mt-md-3"
                  >
                    <Card className="shadow w-100">
                      <Card.Img
                        variant="center"
                        src={seller.avatar}
                        className="rounded-top"
                        style={{ objectFit: "fill" }}
                      />
                      <Card.Body>
                        <Card.Text className="text-center">
                          {stringManipulation(seller.name) +
                            " " +
                            stringManipulation(seller.surname)}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AboutUsPage;
