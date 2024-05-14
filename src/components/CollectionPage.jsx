import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CarCard from "./CarCard";

const CollectionPage = () => {
  return (
    <Container className="py-5">
      <Row lg={2}>
        <CarCard />
      </Row>
    </Container>
  );
};

export default CollectionPage;
