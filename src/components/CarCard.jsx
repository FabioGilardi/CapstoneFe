import { useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const CarCard = () => {
  const [cardHover, setCardHOver] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  return (
    <Col
      id="1"
      className={
        cardHover
          ? "border border-secondary rounded-2 carCardHover"
          : "border border-secondary rounded-2 shadow"
      }
      onMouseEnter={(e) => {
        setCardHOver(true);
        setSelectedCard(e.target.id);
      }}
      onMouseLeave={() => {
        setCardHOver(false);
        setSelectedCard(null);
      }}
    >
      <Row className="p-3">
        <Col lg={7} className="p-0">
          <img
            src="https://cdn.drivek.com/configurator-imgs/cars/it/Original/BMW/2-SERIES-ACTIVE-TOURER/40656_MPV-5-DOORS/bmw-2-series-active-tourer-2021-front-side-2.jpg"
            alt="car-image"
            className="w-100"
          ></img>
        </Col>
        <Col lg={5} className="px-4">
          <h4 className="fw-bold text-primary pb-2 mb-0 border-bottom border-secondary">
            € PRICE
          </h4>
          <p className="fw-bold mb-0 py-2 border-bottom border-secondary">
            used/new
          </p>
          <p className="fw-bold mb-0 py-2 border-bottom border-secondary">
            Registration Date
          </p>
          <p className="fw-bold mb-0 py-2 border-bottom border-secondary">
            KMS
          </p>
          <p className="fw-bold mb-0 py-2 border-bottom border-secondary">
            Consumption Class
          </p>
          <p className="fw-bold mb-0 py-2">Gear type</p>
        </Col>
        <Col lg={12} className="py-3 px-0">
          <p className={cardHover && "text-primary"}>BRAND AND CAR MODEL</p>
          <div className="d-flex align-items-center warrentyDiv p-3">
            <i className="bi bi-award fs-1 text-primary"></i>
            <div>
              <p className="fw-bold text-primary mb-0 ms-3">Guaranteed Used</p>
              <p className="fw-bold text-primary mb-0 ms-3">
                Warranty & Certification
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </Col>
  );
};

export default CarCard;
