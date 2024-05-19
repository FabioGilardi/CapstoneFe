/* eslint-disable react/prop-types */
import { useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router-dom";

const CarCard = ({ car }) => {
  // MAIN FUNCTIONS
  const navigate = useNavigate();

  // LOCAL STATE
  const [cardHover, setCardHOver] = useState(false);

  // OTHER FUNCTIONS
  const formatNumber = (num) => {
    let str = num.toString();
    let arr = str.split("");
    let result = "";

    for (let i = arr.length - 1; i >= 0; i--) {
      result = arr[i] + result;
      if ((arr.length - i) % 3 === 0 && i !== 0) {
        result = "." + result;
      }
    }
    return result;
  };

  return (
    <Col
      xs={12}
      lg={5}
      id={car.id}
      className={
        cardHover
          ? "border border-secondary rounded-2 mb-5 carCardHover"
          : "border border-secondary rounded-2 mb-5 shadow"
      }
      onMouseEnter={() => {
        setCardHOver(true);
      }}
      onMouseLeave={() => {
        setCardHOver(false);
      }}
      onClick={() => {
        navigate("/car/" + car.id);
      }}
    >
      <Row className="p-3 flex-column h-100">
        <Col className="flex-grow-1">
          <Row>
            <Col lg={7} className="p-0 d-flex flex-column">
              <h5 className={cardHover && "text-primary"}>
                {car.brand + " " + car.model}
              </h5>
              <div className="h-100">
                <img
                  src={car.picture}
                  height="220px"
                  width="100%"
                  style={{ objectFit: "cover" }}
                ></img>
              </div>
            </Col>
            <Col lg={5} className="px-lg-4 mt-lg-0 mt-3">
              <h4 className="fw-bold text-primary pb-2 mb-0 border-bottom border-secondary">
                € {formatNumber(car.price)}
              </h4>
              <p className="fw-bold mb-0 py-2 border-bottom border-secondary">
                {car.status.charAt(0).toUpperCase() +
                  car.status.substring(1).toLowerCase()}
              </p>
              <p className="fw-bold mb-0 py-2 border-bottom border-secondary">
                {car.registrationDate}
              </p>
              <p className="fw-bold mb-0 py-2 border-bottom border-secondary">
                {formatNumber(car.kilometers)} km
              </p>
              <p className="fw-bold mb-0 py-2 border-bottom border-secondary">
                {car.emissionClass.slice(0, 4) +
                  " " +
                  car.emissionClass.substring(5)}
              </p>
              <p className="fw-bold mb-0 py-2">
                {car.transmissionType.charAt(0).toUpperCase() +
                  car.transmissionType.substring(1).toLowerCase()}
              </p>
            </Col>
          </Row>
        </Col>
        <Col lg={12} className="mt-4 px-0">
          {car.status === "USED" ? (
            <div className="d-flex align-items-center warrentyDiv p-3">
              <i className="bi bi-patch-check fs-1 text-primary"></i>
              <div>
                <p className="fw-bold text-primary mb-0 ms-3">
                  Guaranteed Used
                </p>
                <p className="fw-bold text-primary mb-0 ms-3">
                  Vehicle History
                </p>
              </div>
            </div>
          ) : (
            <div className="d-flex align-items-center warrentyDiv p-3">
              <i className="bi bi-award fs-1 text-primary"></i>
              <div>
                <p className="fw-bold text-primary mb-0 ms-3">
                  Warranty & Certification
                </p>
                <p className="fw-bold text-primary mb-0 ms-3">
                  Guaranteed Performance
                </p>
              </div>
            </div>
          )}
        </Col>
      </Row>
    </Col>
  );
};

export default CarCard;
