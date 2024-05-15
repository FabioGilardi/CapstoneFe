import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveSingleCar } from "../redux/actions";
import { Button } from "react-bootstrap";

const SingleCar = () => {
  const param = useParams().id;

  const accessToken = useSelector((state) => state.authReducer.accessToken);
  const singleCar = useSelector((state) => state.carReducer.singleCar);

  const dispatch = useDispatch();

  const navigate = useNavigate();

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

  const stringManipulation = (string) => {
    return string.charAt(0).toUpperCase() + string.substring(1).toLowerCase();
  };

  function formatStringAccessory(string) {
    if (string.includes("_")) {
      let words = string.split("_");
      let formattedWords = words.map(
        (word) => word.charAt(0) + word.slice(1).toLowerCase()
      );
      return formattedWords.join(" ");
    } else {
      return string.charAt(0) + string.slice(1).toLowerCase();
    }
  }

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

  useEffect(() => {
    dispatch(saveSingleCar(accessToken, param));
  });

  return (
    <Container>
      <Row className="justify-content-center py-5">
        {singleCar !== null && (
          <Col xs={11} md={10} lg={8}>
            <Button
              variant="white"
              className="d-flex align-items-center border border-secondary rounded-pill mb-4 carPageBack"
              onClick={() => {
                navigate("/collection");
              }}
            >
              <i className="bi bi-chevron-left text-primary me-1"></i>Back to
              Collection
            </Button>
            <Row>
              <Col xs={12} md={6}>
                <div>
                  <img
                    alt="car image"
                    src={singleCar.picture}
                    height="250px"
                    width="100%"
                    style={{ objectFit: "cover" }}
                  ></img>
                </div>
              </Col>
              <Col xs={12} md={6} className="mt-4 mt-md-0">
                <Row className="flex-column justify-content-around h-100">
                  <Col xs={12}>
                    <h4 className="fw-bold mb-3 mb-md-0">
                      € {formatNumber(singleCar.price)}
                    </h4>
                  </Col>
                  <Col xs={12}>
                    <Row>
                      <Col xs={6}>
                        <div className="d-flex align-items-center mb-3">
                          <img
                            src="https://www.automobile.it/_next/static/media/attribute-channel.2cca1472.svg"
                            width="30px"
                          ></img>
                          <p className="ms-2 mb-0">
                            {stringManipulation(singleCar.status)}
                          </p>
                        </div>
                        <div className="d-flex align-items-center mb-3">
                          <img
                            src="https://www.automobile.it/_next/static/media/attribute-km.1cb2cf5e.svg"
                            width="30px"
                          ></img>
                          <p className="ms-2 mb-0">
                            {formatNumber(singleCar.kilometers)} km
                          </p>
                        </div>
                        <div className="d-flex align-items-center">
                          <img
                            src="https://www.automobile.it/_next/static/media/attribute-switch.b6bca905.svg"
                            width="30px"
                          ></img>
                          <p className="ms-2 mb-0">
                            {stringManipulation(singleCar.transmissionType)}
                          </p>
                        </div>
                      </Col>
                      <Col xs={6}>
                        <div className="d-flex align-items-center mb-3">
                          <img
                            src="https://www.automobile.it/_next/static/media/attribute-year.6e0c4b9a.svg"
                            width="30px"
                          ></img>
                          <p className="ms-2 mb-0">
                            {singleCar.registrationDate}
                          </p>
                        </div>
                        <div className="d-flex align-items-center">
                          <img
                            src="https://www.automobile.it/_next/static/media/attribute-fuel.7b38f7b5.svg"
                            width="30px"
                          ></img>
                          <p className="ms-2 mb-0">
                            {singleCar.fuel === "LPG"
                              ? "LPG" +
                                " - " +
                                stringManipulation(
                                  singleCar.emissionClass.slice(0, 4)
                                ) +
                                " " +
                                singleCar.emissionClass.substring(5)
                              : stringManipulation(singleCar.fuel) +
                                " - " +
                                stringManipulation(
                                  singleCar.emissionClass.slice(0, 4)
                                ) +
                                " " +
                                singleCar.emissionClass.substring(5)}
                          </p>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
            <h4 className="fw-bold mt-5">VEHICLE INFORMATION</h4>
            <Row>
              <Col
                xs={6}
                md={3}
                xl={2}
                className="d-flex justify-content-md-center justify-content-start my-3 mt-md-3"
              >
                <span
                  className={
                    baseData
                      ? "text-primary fw-bold bg-info rounded-pill px-2 star"
                      : "fw-bold star"
                  }
                  onClick={() => {
                    handleBaseData();
                  }}
                >
                  DATA
                </span>
              </Col>
              <Col
                xs={6}
                md={3}
                xl={2}
                className="d-flex justify-content-md-center justify-content-start my-3 mt-md-3"
              >
                <span
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
                </span>
              </Col>
              <Col
                xs={6}
                md={3}
                xl={2}
                className="d-flex justify-content-md-center justify-content-start mb-3 mt-md-3"
              >
                <span
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
                </span>
              </Col>
              <Col
                xs={6}
                md={3}
                xl={2}
                className="d-flex justify-content-md-center justify-content-start mb-3 mt-md-3"
              >
                <span
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
                </span>
              </Col>
              {baseData && (
                <Col xs={12} xl={8} className="mt-2">
                  <Row>
                    <Col xs={6} className="pe-0">
                      <div className="pb-3 border-bottom border-secondary">
                        <p className="mb-1 opacity-75">State</p>
                        <p className="mb-0">
                          {stringManipulation(singleCar.status)}
                        </p>
                      </div>
                      <div className="py-3 border-bottom border-secondary">
                        <p className="mb-1 opacity-75">Model</p>
                        <p className="mb-0">{singleCar.model}</p>
                      </div>
                      <div className="py-3 border-bottom border-secondary">
                        <p className="mb-1 opacity-75">Fuel</p>
                        <p className="mb-0">
                          {singleCar.fuel === "LPG"
                            ? "LPG"
                            : stringManipulation(singleCar.fuel)}
                        </p>
                      </div>
                      <div className="py-3 border-bottom border-secondary">
                        <p className="mb-1 opacity-75">Registration Date</p>
                        <p className="mb-0">{singleCar.registrationDate}</p>
                      </div>
                      <div className="py-3">
                        <p className="mb-1 opacity-75">Power</p>
                        <p className="mb-0">
                          {formatNumber(singleCar.power)} CV
                        </p>
                      </div>
                    </Col>
                    <Col xs={6} className="px-0">
                      <div className="pb-3 border-bottom border-secondary">
                        <p className="mb-1 opacity-75">Brand</p>
                        <p className="mb-0">
                          {singleCar.brand === "BMW"
                            ? "BMW"
                            : stringManipulation(singleCar.brand)}
                        </p>
                      </div>
                      <div className="py-3 border-bottom border-secondary">
                        <p className="mb-1 opacity-75">Kilometers</p>
                        <p className="mb-0">
                          {formatNumber(singleCar.kilometers)} km
                        </p>
                      </div>
                      <div className="py-3 border-bottom border-secondary">
                        <p className="mb-1 opacity-75">Transmission Type</p>
                        <p className="mb-0">
                          {stringManipulation(singleCar.transmissionType)}
                        </p>
                      </div>
                      <div className="py-3 border-bottom border-secondary">
                        <p className="mb-1 opacity-75">Doors Number</p>
                        <p className="mb-0">
                          {stringManipulation(singleCar.doorNumber)}
                        </p>
                      </div>
                      <div className="py-3">
                        <p className="mb-1 opacity-75">Displacement</p>
                        <p className="mb-0">
                          {formatNumber(singleCar.displacements)} cm3
                        </p>
                      </div>
                    </Col>
                  </Row>
                </Col>
              )}
              {consumption && (
                <Col xs={12} xl={8} className="mt-2">
                  <Row>
                    <Col xs={6} className="pe-0">
                      <div className="pb-3">
                        <p className="mb-1 opacity-75">Emission Class</p>
                        <p className="mb-0">
                          {stringManipulation(
                            singleCar.emissionClass.slice(0, 4)
                          ) +
                            " " +
                            singleCar.emissionClass.substring(5)}
                        </p>
                      </div>
                    </Col>
                    <Col xs={6} className="px-0">
                      <div className="pb-3">
                        <p className="mb-1 opacity-75">Average Consumption</p>
                        <p className="mb-0">
                          {formatNumber(singleCar.fuelConsumption)} km/l
                        </p>
                      </div>
                    </Col>
                  </Row>
                </Col>
              )}
              {aesthetic && (
                <Col xs={12} xl={8} className="mt-2">
                  <Row>
                    <Col xs={6} className="pe-0">
                      <div className="pb-3 border-bottom border-secondary">
                        <p className="mb-1 opacity-75">Color</p>
                        <p className="mb-0">
                          {stringManipulation(singleCar.color)}
                        </p>
                      </div>
                      <div className="py-3">
                        <p className="mb-1 opacity-75">Ready to Drive</p>
                        <p className="mb-0">Yes</p>
                      </div>
                    </Col>
                    <Col xs={6} className="px-0">
                      <div className="pb-3 border-bottom border-secondary">
                        <p className="mb-1 opacity-75">Metallic</p>
                        <p className="mb-0">
                          {Math.random >= 0.5 ? "Yes" : "No"}
                        </p>
                      </div>
                    </Col>
                  </Row>
                </Col>
              )}
              {accessories && (
                <Col xs={12} xl={8} className="mt-2">
                  {singleCar.accessoryList.map((accessory, i) => {
                    i++;
                    return (
                      <p
                        key={i}
                        className={
                          i === singleCar.accessoryList.length
                            ? " "
                            : "pb-3 border-bottom border-secondary"
                        }
                      >
                        {formatStringAccessory(accessory.accessoryName)}
                      </p>
                    );
                  })}
                </Col>
              )}
            </Row>
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default SingleCar;
