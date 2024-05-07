import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { REGISTER_IS_OK, actionlogin } from "../redux/actions";

const LoginPage = () => {
  const dispatch = useDispatch();

  const initialForm = {
    email: "",
    password: "",
  };

  const handleChange = (e, attribute) => {
    setForm({
      ...form,
      [attribute]: e.target.value,
    });
  };

  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    dispatch({
      type: REGISTER_IS_OK,
      payload: false,
    });
  }, []);

  return (
    <Container className="h-100">
      <Row className="justify-content-center align-items-center h-100">
        <Col
          sm={8}
          md={6}
          lg={4}
          className="border border-secondary rounded-4 shadow p-4"
        >
          <h5 className="fw-bold mb-4">Login to D&G Motors</h5>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              dispatch(actionlogin(form));
            }}
          >
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
            <Button
              variant="primary"
              size="lg"
              className="text-white w-100 rounded-pill fw-bold"
              type="submit"
            >
              LOGIN
            </Button>
            <p className="mb-0 mt-4 text-center">
              Don&apos;t have an account?{" "}
              <Link className="text-decoration-none" to="/register">
                <span className="text-primary fw-bold hoverable">Register</span>
              </Link>
            </p>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
