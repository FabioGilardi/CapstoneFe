import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADD_CAR_ERRORS, ADD_CAR_IS_OK, addCar } from "../redux/actions";

const SellerPage = () => {
  // MAIN FUNCTIONS
  const dispatch = useDispatch();

  // GLOBAL STATE
  const accessToken = useSelector((state) => state.authReducer.accessToken);
  const addCarIsOk = useSelector((state) => state.carReducer.addCarIsOk);
  const addCarErrors = useSelector((state) => state.carReducer.addCarErrors);

  // NEW CAR FORM
  const initialCarForm = {
    picture: "",
    model: "",
    price: "",
    kilometers: "",
    power: "",
    displacements: "",
    fuelConsumption: "",
    registrationDate: "",
    brand: "",
    status: "",
    fuel: "",
    emissionClass: "",
    transmissionType: "",
    doorNumber: "",
    color: "",
    accessoryIdList: [],
  };

  const [carForm, setCarForm] = useState(initialCarForm);

  const handleCarForm = (e, attribute) => {
    setCarForm({
      ...carForm,
      [attribute]: e.target.value,
    });
  };

  // OTHER FUNCTIONS
  const handleAccessoryClick = (id) => {
    setCarForm((prevForm) => {
      const { accessoryIdList } = prevForm;
      if (accessoryIdList.includes(id)) {
        return {
          ...prevForm,
          accessoryIdList: accessoryIdList.filter(
            (accessoryId) => accessoryId !== id
          ),
        };
      } else {
        return {
          ...prevForm,
          accessoryIdList: [...accessoryIdList, id],
        };
      }
    });
  };

  //   COMPONENT UPDATE/MOUNT
  useEffect(() => {
    setCarForm(initialCarForm);
  }, [addCarIsOk]);

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <h4 className="text-center fw-bold mb-3">ADD A CAR</h4>
        <Col xs={11} md={9} lg={6}>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              dispatch(addCar(accessToken, carForm));
            }}
          >
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                required
                placeholder="CAR PICTURE URL"
                value={carForm.picture}
                onChange={(e) => {
                  handleCarForm(e, "picture");
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                required
                placeholder="MODEL"
                value={carForm.model}
                onChange={(e) => {
                  handleCarForm(e, "model");
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="number"
                required
                placeholder="PRICE €"
                value={carForm.price}
                onChange={(e) => {
                  handleCarForm(e, "price");
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="number"
                required
                placeholder="KILOMETERS"
                value={carForm.kilometers}
                onChange={(e) => {
                  handleCarForm(e, "kilometers");
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="number"
                required
                placeholder="POWER CV"
                value={carForm.power}
                onChange={(e) => {
                  handleCarForm(e, "power");
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="number"
                required
                placeholder="DISPLACEMENTS CC"
                value={carForm.displacements}
                onChange={(e) => {
                  handleCarForm(e, "displacements");
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="number"
                required
                placeholder="FUEL CONSUMPTION KM/L"
                value={carForm.fuelConsumption}
                onChange={(e) => {
                  handleCarForm(e, "fuelConsumption");
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="opacity-75">REGISTRATION DATE</Form.Label>
              <Form.Control
                type="date"
                required
                placeholder="REGISTRATION DATE"
                value={carForm.registrationDate}
                onChange={(e) => {
                  handleCarForm(e, "registrationDate");
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Select
                value={carForm.brand}
                onChange={(e) => {
                  handleCarForm(e, "brand");
                }}
                required
              >
                <option className="opacity-75">BRAND</option>
                <option value="BMW">BMW</option>
                <option value="PORSCHE">Porsche</option>
                <option value="AUDI">Audi</option>
                <option value="MERCEDES">Mercedes</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Select
                value={carForm.status}
                onChange={(e) => {
                  handleCarForm(e, "status");
                }}
                required
              >
                <option className="opacity-75">STAUTS</option>
                <option value="NEW">New</option>
                <option value="USED">Used</option>
                <option value="KM0">KM0</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Select
                value={carForm.fuel}
                onChange={(e) => {
                  handleCarForm(e, "fuel");
                }}
                required
              >
                <option className="opacity-75">FUEL</option>
                <option value="GASOLINE">Gasoline</option>
                <option value="DIESEL">Diesel</option>
                <option value="LPG">LPG</option>
                <option value="ELECTRIC">Electric</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Select
                value={carForm.emissionClass}
                onChange={(e) => {
                  handleCarForm(e, "emissionClass");
                }}
                required
              >
                <option className="opacity-75">EMISSION CLASS</option>
                <option value="EURO_1">Euro 1</option>
                <option value="EURO_2">Euro 2</option>
                <option value="EURO_3">Euro 3</option>
                <option value="EURO_4">Euro 4</option>
                <option value="EURO_5">Euro 5</option>
                <option value="EURO_6">Euro 6</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Select
                value={carForm.transmissionType}
                onChange={(e) => {
                  handleCarForm(e, "transmissionType");
                }}
                required
              >
                <option className="opacity-75">TRANSMISSION TYPE</option>
                <option value="MANUAL">Manual</option>
                <option value="AUTOMATIC">Automatic</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Select
                value={carForm.doorNumber}
                onChange={(e) => {
                  handleCarForm(e, "doorNumber");
                }}
                required
              >
                <option className="opacity-75">DOORS NUMBER</option>
                <option value="THREE">Three</option>
                <option value="FIVE">Five</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Select
                value={carForm.color}
                onChange={(e) => {
                  handleCarForm(e, "color");
                }}
                required
              >
                <option className="opacity-75">COLOR</option>
                <option value="BLACK">Black</option>
                <option value="GRAY">Gray</option>
                <option value="WHITE">White</option>
                <option value="BLUE">Blue</option>
                <option value="RED">Red</option>
                <option value="YELLOW">Yellow</option>
              </Form.Select>
            </Form.Group>
            <p className="mt-4 mb-0">ACCESSORIES:</p>
            <Row className="g-3">
              <Col xs={6} lg={3}>
                <div
                  onClick={() => handleAccessoryClick("1")}
                  className={
                    carForm.accessoryIdList.includes("1")
                      ? "border border-primary rounded-2 d-flex justify-content-center align-items-center star my-3 text-center h-100"
                      : "border border-secondary rounded-2 d-flex justify-content-center align-items-center star my-3 text-center h-100"
                  }
                >
                  Alloy Wheels
                </div>
              </Col>
              <Col xs={6} lg={3}>
                <div
                  onClick={() => handleAccessoryClick("2")}
                  className={
                    carForm.accessoryIdList.includes("2")
                      ? "border border-primary rounded-2 d-flex justify-content-center align-items-center star my-3 text-center h-100"
                      : "border border-secondary rounded-2 d-flex justify-content-center align-items-center star my-3 text-center h-100"
                  }
                >
                  Sport Setup
                </div>
              </Col>
              <Col xs={6} lg={3}>
                <div
                  onClick={() => handleAccessoryClick("3")}
                  className={
                    carForm.accessoryIdList.includes("3")
                      ? "border border-primary rounded-2 d-flex justify-content-center align-items-center star my-3 text-center h-100"
                      : "border border-secondary rounded-2 d-flex justify-content-center align-items-center star my-3 text-center h-100"
                  }
                >
                  Electric Seats
                </div>
              </Col>
              <Col xs={6} lg={3}>
                <div
                  onClick={() => handleAccessoryClick("4")}
                  className={
                    carForm.accessoryIdList.includes("4")
                      ? "border border-primary rounded-2 d-flex justify-content-center align-items-center star my-3 text-center h-100"
                      : "border border-secondary rounded-2 d-flex justify-content-center align-items-center star my-3 text-center h-100"
                  }
                >
                  Dual Zone Air Conditioning
                </div>
              </Col>
              <Col xs={6} lg={3}>
                <div
                  onClick={() => handleAccessoryClick("5")}
                  className={
                    carForm.accessoryIdList.includes("5")
                      ? "border border-primary rounded-2 d-flex justify-content-center align-items-center star my-3 text-center h-100"
                      : "border border-secondary rounded-2 d-flex justify-content-center align-items-center star my-3 text-center h-100"
                  }
                >
                  Panoramic Roof
                </div>
              </Col>
              <Col xs={6} lg={3}>
                <div
                  onClick={() => handleAccessoryClick("6")}
                  className={
                    carForm.accessoryIdList.includes("6")
                      ? "border border-primary rounded-2 d-flex justify-content-center align-items-center star my-3 text-center h-100"
                      : "border border-secondary rounded-2 d-flex justify-content-center align-items-center star my-3 text-center h-100"
                  }
                >
                  Assisted Parking
                </div>
              </Col>
              <Col xs={6} lg={3}>
                <div
                  onClick={() => handleAccessoryClick("7")}
                  className={
                    carForm.accessoryIdList.includes("7")
                      ? "border border-primary rounded-2 d-flex justify-content-center align-items-center star my-3 text-center h-100"
                      : "border border-secondary rounded-2 d-flex justify-content-center align-items-center star my-3 text-center h-100"
                  }
                >
                  Dashcam
                </div>
              </Col>
              <Col xs={6} lg={3}>
                <div
                  onClick={() => handleAccessoryClick("8")}
                  className={
                    carForm.accessoryIdList.includes("8")
                      ? "border border-primary rounded-2 d-flex justify-content-center align-items-center star my-3 text-center h-100"
                      : "border border-secondary rounded-2 d-flex justify-content-center align-items-center star my-3 text-center h-100"
                  }
                >
                  Sensors
                </div>
              </Col>
              <Col xs={6} lg={3}>
                <div
                  onClick={() => handleAccessoryClick("9")}
                  className={
                    carForm.accessoryIdList.includes("9")
                      ? "border border-primary rounded-2 d-flex justify-content-center align-items-center star my-3 text-center h-100"
                      : "border border-secondary rounded-2 d-flex justify-content-center align-items-center star my-3 text-center h-100"
                  }
                >
                  Cruise Control
                </div>
              </Col>
              <Col xs={6} lg={3}>
                <div
                  onClick={() => handleAccessoryClick("10")}
                  className={
                    carForm.accessoryIdList.includes("10")
                      ? "border border-primary rounded-2 d-flex justify-content-center align-items-center star my-3 text-center h-100"
                      : "border border-secondary rounded-2 d-flex justify-content-center align-items-center star my-3 text-center h-100"
                  }
                >
                  Runflat Tyres
                </div>
              </Col>
              <Col xs={6} lg={3}>
                <div
                  onClick={() => handleAccessoryClick("11")}
                  className={
                    carForm.accessoryIdList.includes("11")
                      ? "border border-primary rounded-2 d-flex justify-content-center align-items-center star my-3 text-center h-100"
                      : "border border-secondary rounded-2 d-flex justify-content-center align-items-center star my-3 text-center h-100"
                  }
                >
                  Spare Wheel
                </div>
              </Col>
              <Col xs={6} lg={3}>
                <div
                  onClick={() => handleAccessoryClick("12")}
                  className={
                    carForm.accessoryIdList.includes("12")
                      ? "border border-primary rounded-2 d-flex justify-content-center align-items-center star my-3 text-center h-100"
                      : "border border-secondary rounded-2 d-flex justify-content-center align-items-center star my-3 text-center h-100"
                  }
                >
                  Emergency Kit
                </div>
              </Col>
              <Col xs={6} lg={3}>
                <div
                  onClick={() => handleAccessoryClick("13")}
                  className={
                    carForm.accessoryIdList.includes("13")
                      ? "border border-primary rounded-2 d-flex justify-content-center align-items-center star my-3 text-center h-100"
                      : "border border-secondary rounded-2 d-flex justify-content-center align-items-center star my-3 text-center h-100"
                  }
                >
                  Full Led Headlights
                </div>
              </Col>
            </Row>
            {addCarErrors !== null && (
              <Alert variant="danger">
                <i className="bi bi-exclamation-triangle"></i> {addCarErrors}
              </Alert>
            )}
            {addCarIsOk === true && (
              <Alert
                variant="success"
                className="d-flex align-items-center justify-content-center"
              >
                <i className="bi bi-check-circle fs-2 me-2"></i>
                <div>
                  <p className="mb-0">Car has been added successfully</p>
                </div>
              </Alert>
            )}
            <div className="d-flex justify-content-evenly my-5">
              <Button variant="primary" className="text-white" type="submit">
                ADD <i className="bi bi-plus-lg"></i>
              </Button>
              <Button
                variant="secondary"
                className="text-black"
                onClick={() => {
                  setCarForm(initialCarForm);
                  dispatch({
                    type: ADD_CAR_IS_OK,
                    payload: false,
                  });
                  dispatch({
                    type: ADD_CAR_ERRORS,
                    payload: null,
                  });
                }}
              >
                CLEAR
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default SellerPage;
