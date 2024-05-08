import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";

const LoadingSpinner = () => {
  return (
    <Row className="h-100">
      <Col className="h-100 text-center d-flex align-items-center justify-content-center">
        <Spinner animation="border" variant="primary"></Spinner>
      </Col>
    </Row>
  );
};

export default LoadingSpinner;
