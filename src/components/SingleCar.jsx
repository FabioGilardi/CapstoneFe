import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useParams } from "react-router-dom";
import { useState } from "react";

const SingleCar = () => {
  const param = useParams().id;

  const [baseData, setBaseData] = useState(true);
  const [consumption, setConsumption] = useState(false);
  const [aesthetic, setAesthetic] = useState(false);
  const [accessories, setAccessories] = useState(false);

  const handleBaseData = () => {
    setBaseData(true);
    setConsumption(false);
    setAesthetic(false);
    setAccessories(false);
  };
  const handleConsumption = () => {
    setBaseData(false);
    setConsumption(true);
    setAesthetic(false);
    setAccessories(false);
  };
  const handleAesthetic = () => {
    setBaseData(false);
    setConsumption(false);
    setAesthetic(true);
    setAccessories(false);
  };
  const handleAccessories = () => {
    setBaseData(false);
    setConsumption(false);
    setAesthetic(false);
    setAccessories(true);
  };
  const randomBoolean = () => {
    return Math.random() >= 0.5;
  };

  console.log(param);

  return (
    <Container>
      <Row className="justify-content-center py-5">
        <Col xs={11} md={10} lg={8}>
          <Row>
            <Col xs={6}>
              <img
                alt="car image"
                src="https://placehold.co/600x400"
                width="100%"
              ></img>
            </Col>
            <Col xs={6}>
              <Row className="flex-column justify-content-between h-100">
                <Col xs={12}>
                  <h4 className="fw-bold">€ PRICE</h4>
                </Col>
                <Col xs={12}>
                  <Row>
                    <Col xs={6}>
                      <div className="d-flex align-items-center mb-2">
                        <img
                          src="https://www.automobile.it/_next/static/media/attribute-channel.2cca1472.svg"
                          width="30px"
                        ></img>
                        <p className="ms-2 mb-0">STATE</p>
                      </div>
                      <div className="d-flex align-items-center mb-2">
                        <img
                          src="https://www.automobile.it/_next/static/media/attribute-km.1cb2cf5e.svg"
                          width="30px"
                        ></img>
                        <p className="ms-2 mb-0">KILOMETERS</p>
                      </div>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://www.automobile.it/_next/static/media/attribute-switch.b6bca905.svg"
                          width="30px"
                        ></img>
                        <p className="ms-2 mb-0">TRANSMISSIONTYPE</p>
                      </div>
                    </Col>
                    <Col xs={6}>
                      <div className="d-flex align-items-center mb-2">
                        <img
                          src="https://www.automobile.it/_next/static/media/attribute-year.6e0c4b9a.svg"
                          width="30px"
                        ></img>
                        <p className="ms-2 mb-0">REGISTRATIONDATE</p>
                      </div>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://www.automobile.it/_next/static/media/attribute-fuel.7b38f7b5.svg"
                          width="30px"
                        ></img>
                        <p className="ms-2 mb-0">FUEL + CONSUMPTION CLASS</p>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
          <h4 className="fw-bold mt-5">VEHICLE INFORMATION</h4>
          <Row>
            <Col xs={11} lg={8} className="d-flex justify-content-between mt-3">
              <p
                className={
                  baseData
                    ? "text-primary fw-bold bg-info rounded-pill px-2 star"
                    : "fw-bold star"
                }
                onClick={() => {
                  handleBaseData();
                }}
              >
                BASE DATA
              </p>
              <p
                className={
                  consumption
                    ? "text-primary fw-bold bg-info rounded-pill px-2 star"
                    : "fw-bold star"
                }
                onClick={() => {
                  handleConsumption();
                }}
              >
                CONSUMPTION
              </p>
              <p
                className={
                  aesthetic
                    ? "text-primary fw-bold bg-info rounded-pill px-2 star"
                    : "fw-bold star"
                }
                onClick={() => {
                  handleAesthetic();
                }}
              >
                AESTHETIC
              </p>
              <p
                className={
                  accessories
                    ? "text-primary fw-bold bg-info rounded-pill px-2 star"
                    : "fw-bold star"
                }
                onClick={() => {
                  handleAccessories();
                }}
              >
                ACCESSORIES
              </p>
            </Col>
            {baseData && (
              <Col xs={11} lg={8}>
                <Row>
                  <Col xs={6} className="pe-0">
                    <div className="pb-3 border-bottom border-secondary">
                      <p className="mb-1 opacity-75">State</p>
                      <p className="mb-0">USED</p>
                    </div>
                    <div className="py-3 border-bottom border-secondary">
                      <p className="mb-1 opacity-75">Model</p>
                      <p className="mb-0">MODEL</p>
                    </div>
                    <div className="py-3 border-bottom border-secondary">
                      <p className="mb-1 opacity-75">Fuel</p>
                      <p className="mb-0">FUEL</p>
                    </div>
                    <div className="py-3 border-bottom border-secondary">
                      <p className="mb-1 opacity-75">Registration Date</p>
                      <p className="mb-0">REGISTRATION DATE</p>
                    </div>
                    <div className="py-3">
                      <p className="mb-1 opacity-75">Power</p>
                      <p className="mb-0">POWER</p>
                    </div>
                  </Col>
                  <Col xs={6} className="px-0">
                    <div className="pb-3 border-bottom border-secondary">
                      <p className="mb-1 opacity-75">Brand</p>
                      <p className="mb-0">BRAND</p>
                    </div>
                    <div className="py-3 border-bottom border-secondary">
                      <p className="mb-1 opacity-75">Kilometers</p>
                      <p className="mb-0">KILOMETERS</p>
                    </div>
                    <div className="py-3 border-bottom border-secondary">
                      <p className="mb-1 opacity-75">Transmission Type</p>
                      <p className="mb-0">TRANSMISSION TYPE</p>
                    </div>
                    <div className="py-3 border-bottom border-secondary">
                      <p className="mb-1 opacity-75">Doors Number</p>
                      <p className="mb-0">DOORS NUMBER</p>
                    </div>
                    <div className="py-3">
                      <p className="mb-1 opacity-75">Displacements</p>
                      <p className="mb-0">DISPLACEMENTS</p>
                    </div>
                  </Col>
                </Row>
              </Col>
            )}
            {consumption && (
              <Col xs={11} lg={8}>
                <Row>
                  <Col xs={6} className="pe-0">
                    <div className="pb-3">
                      <p className="mb-1 opacity-75">Emission Class</p>
                      <p className="mb-0">EMISSION CLASS</p>
                    </div>
                  </Col>
                  <Col xs={6} className="px-0">
                    <div className="pb-3">
                      <p className="mb-1 opacity-75">Consumption</p>
                      <p className="mb-0">CONSUMPTION</p>
                    </div>
                  </Col>
                </Row>
              </Col>
            )}
            {aesthetic && (
              <Col xs={11} lg={8}>
                <Row>
                  <Col xs={6} className="pe-0">
                    <div className="pb-3 border-bottom border-secondary">
                      <p className="mb-1 opacity-75">Color</p>
                      <p className="mb-0">COLOR</p>
                    </div>
                    <div className="py-3">
                      <p className="mb-1 opacity-75">Ready to Drive</p>
                      <p className="mb-0">Yes</p>
                    </div>
                  </Col>
                  <Col xs={6} className="px-0">
                    <div className="pb-3 border-bottom border-secondary">
                      <p className="mb-1 opacity-75">Metallic</p>
                      <p className="mb-0">{randomBoolean() ? "Yes" : "No"}</p>
                    </div>
                  </Col>
                </Row>
              </Col>
            )}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default SingleCar;
