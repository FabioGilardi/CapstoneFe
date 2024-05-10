import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SideBarProfilePage from "./SideBarProfilePage";
import { updatePassword } from "../redux/actions";
import { Link } from "react-router-dom";

const ChangePassword = () => {
  const initialForm = {
    oldPassword: "",
    newPassword: "",
  };

  const [form, setForm] = useState(initialForm);

  const dispatch = useDispatch();

  const accessToken = useSelector((state) => state.authReducer.accessToken);
  const currentUser = useSelector((state) => state.userReducer.currentUser);
  const passwordIsOk = useSelector((state) => state.userReducer.passwordIsOK);
  const passwordHasErrors = useSelector(
    (state) => state.userReducer.passwordHasErrors
  );

  const handleChange = (e, attribute) => {
    setForm({
      ...form,
      [attribute]: e.target.value,
    });
  };

  return (
    <Container className="py-3">
      <Row className="justify-content-center my-md-5">
        <Col xs={12} md={12} lg={8}>
          <Row className="justify-content-center">
            <SideBarProfilePage
              imgSrc={currentUser.avatar}
              username={currentUser.username}
            />
            <Col xs={12} md={9} className="ps-4">
              <h4 className="fw-bold mb-4">CHANGE PASSWORD</h4>
              {passwordIsOk !== null && (
                <>
                  <Alert
                    variant="success"
                    className="d-flex justify-content-between align-items-center"
                  >
                    <Col xs={1}>
                      <i className="bi bi-check-circle fs-2"></i>
                    </Col>
                    <Col xs={10}>{passwordIsOk}</Col>
                  </Alert>
                  <p className="mb-0 mt-4 text-center">
                    Now proceed to{" "}
                    <Link className="text-decoration-none" to="/profile">
                      <span className="text-primary fw-bold hoverable">
                        My Profile
                      </span>
                    </Link>
                  </p>
                </>
              )}
              {passwordHasErrors !== null && (
                <Alert variant="danger">
                  <i className="bi bi-exclamation-triangle"></i>{" "}
                  {passwordHasErrors}
                </Alert>
              )}
              {passwordIsOk === null && (
                <Form
                  onSubmit={(e) => {
                    e.preventDefault();
                    dispatch(updatePassword(accessToken, form));
                  }}
                >
                  <Form.Group className="mb-4">
                    <Form.Control
                      className="border rounded-pill"
                      type="password"
                      placeholder="CURRENT PASSWORD"
                      value={form.oldPassword}
                      required
                      onChange={(e) => {
                        handleChange(e, "oldPassword");
                      }}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Control
                      className="border rounded-pill"
                      type="password"
                      placeholder="NEW PASSWORD"
                      value={form.newPassword}
                      required
                      onChange={(e) => {
                        handleChange(e, "newPassword");
                      }}
                    />
                  </Form.Group>
                  <Form.Label className="text-black ms-3 mb-4 small opacity-75">
                    At least 8 characters
                  </Form.Label>
                  <div className="text-center">
                    <Button
                      variant="primary"
                      size="lg"
                      className="text-white w-50 rounded-pill fw-bold"
                      type="submit"
                    >
                      SAVE CHANGES
                    </Button>
                  </div>
                </Form>
              )}
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ChangePassword;
