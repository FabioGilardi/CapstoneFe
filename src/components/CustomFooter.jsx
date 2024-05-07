import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";

const CustomFooter = () => {
  return (
    <Container fluid className="py-4 footer">
      <Row className="align-items-center justify-content-center">
        <Col>
          <h5 className="text-secondary text-center mb-0">FOLLOW US</h5>
          <div className="d-flex justify-content-center">
            <Link to="https://www.linkedin.com/in/fabio-gilardi-599b022a0/">
              <i className="bi bi-linkedin linkedin fs-3 me-2"></i>
            </Link>
            <Link to="https://github.com/FabioGilardi">
              <i className="bi bi-github github fs-3"></i>
            </Link>
          </div>
          <p className="text-center text-secondary mb-0 mt-4">
            Copyright ©{new Date().getFullYear()} Fabio Gilardi
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default CustomFooter;
