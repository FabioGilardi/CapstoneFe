import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { putUserMe } from "../redux/actions";
import { useNavigate } from "react-router-dom";

const UpdateProfile = () => {
  const accessToken = useSelector((state) => state.authReducer.accessToken);
  const currentUser = useSelector((state) => state.userReducer.currentUser);
  const userPutHasErrors = useSelector(
    (state) => state.userReducer.userPutHasErrors
  );
  const userPutIsOk = useSelector((state) => state.userReducer.userPutIsOk);

  const initialForm = {
    username: currentUser.username,
    email: currentUser.email,
    name: currentUser.name,
    surname: currentUser.surname,
  };

  const [form, setForm] = useState(initialForm);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleChange = (e, attribute) => {
    setForm({
      ...form,
      [attribute]: e.target.value,
    });
  };

  return (
    <Container className="h-100">
      {userPutIsOk === true && navigate("/profile")}
      <Row className="h-100 justify-content-center align-items-center">
        <Col
          xs={10}
          md={8}
          lg={4}
          className="border border-secondary rounded-4 shadow p-4"
        >
          {userPutHasErrors !== null && (
            <Alert variant="danger">
              <i className="bi bi-exclamation-triangle"></i> {userPutHasErrors}
            </Alert>
          )}
          <h5 className="fw-bold mb-3">Update my Profile</h5>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              dispatch(putUserMe(accessToken, form));
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
                placeholder="EMAIL"
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
                type="text"
                placeholder="FIRST NAME"
                value={form.name}
                required
                onChange={(e) => {
                  handleChange(e, "name");
                }}
              />
            </Form.Group>
            <Form.Group className="mb-4">
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
            <Button
              variant="primary"
              size="lg"
              className="text-white w-100 rounded-pill fw-bold"
              type="submit"
            >
              SAVE CHANGES
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default UpdateProfile;
