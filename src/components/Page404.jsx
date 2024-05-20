import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import carBroken from "../assets/images/404img.jpg";

const Page404 = () => {
  return (
    <Container className="h-100 py-4">
      <Row className="h-100 justify-content-center align-items-center">
        <Col
          xs={11}
          lg={6}
          xl={4}
          className="h-100 d-flex flex-column justify-content-center align-items-center"
        >
          <img src={carBroken} className="w-75"></img>
          <h1 className="text-center mt-3 fw-bold mb-0">ERROR 404</h1>
          <p>PAGE NOT FOUND</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Page404;
