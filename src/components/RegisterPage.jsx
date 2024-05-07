import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionRegister } from "../redux/actions";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  const dispatch = useDispatch();

  const registrationErrors = useSelector(
    (state) => state.authReducer.registerErrors
  );

  const isRegisterOk = useSelector((state) => state.authReducer.registerIsOk);

  const initialForm = {
    username: "",
    email: "",
    password: "",
    name: "",
    surname: "",
    birthDate: "",
  };

  const handleChange = (e, attribute) => {
    setForm({
      ...form,
      [attribute]: e.target.value,
    });
  };

  const [form, setForm] = useState(initialForm);

  return (
    <Container className="my-4">
      <Row className="justify-content-center align-items-center h-100">
        <Col
          sm={8}
          md={6}
          lg={4}
          className="border border-secondary rounded-4 shadow p-4"
        >
          {isRegisterOk === true && (
            <>
              <Alert
                variant="success"
                className="d-flex justify-content-between align-items-center"
              >
                <Col xs={1}>
                  <i className="bi bi-check-circle fs-2"></i>
                </Col>
                <Col xs={10}>
                  Your registration has been completed successfully
                </Col>
              </Alert>
              <p className="mb-0 mt-4 text-center">
                Now proceed to{" "}
                <Link className="text-decoration-none" to="/login">
                  <span className="text-primary fw-bold hoverable">Login</span>
                </Link>
              </p>
            </>
          )}
          {isRegisterOk === false && registrationErrors !== null && (
            <Alert variant="danger">
              <i className="bi bi-exclamation-triangle"></i>{" "}
              {registrationErrors}
            </Alert>
          )}
          {isRegisterOk === false && (
            <>
              <h5 className="fw-bold mb-4">Register with your email</h5>
              <Form
                onSubmit={(e) => {
                  e.preventDefault();
                  dispatch(actionRegister(form));
                }}
              >
                <Form.Group className="mb-3">
                  <Form.Control
                    className="border rounded-pill"
                    type="text"
                    placeholder="USERNAME"
                    value={form.username}
                    required
                    onChange={(e) => {
                      handleChange(e, "username");
                    }}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control
                    className="border rounded-pill"
                    type="email"
                    placeholder="E-MAIL"
                    value={form.email}
                    required
                    onChange={(e) => {
                      handleChange(e, "email");
                    }}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control
                    className="border rounded-pill"
                    type="password"
                    placeholder="PASSWORD"
                    value={form.password}
                    required
                    onChange={(e) => {
                      handleChange(e, "password");
                    }}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control
                    className="border rounded-pill"
                    type="text"
                    placeholder="FIRST NAME"
                    value={form.name}
                    required
                    onChange={(e) => {
                      handleChange(e, "name");
                    }}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control
                    className="border rounded-pill"
                    type="text"
                    placeholder="LAST NAME"
                    value={form.surname}
                    required
                    onChange={(e) => {
                      handleChange(e, "surname");
                    }}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control
                    className="border rounded-pill"
                    type="date"
                    placeholder="BIRTH DATE"
                    value={form.birthDate}
                    required
                    onChange={(e) => {
                      handleChange(e, "birthDate");
                    }}
                  />
                </Form.Group>
                <Button
                  variant="primary"
                  size="lg"
                  className="text-white w-100 rounded-pill fw-bold"
                  type="submit"
                >
                  REGISTER
                </Button>
              </Form>
            </>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default RegisterPage;
