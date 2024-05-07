import Alert from "react-bootstrap/Alert";

const RegisterError = (message) => {
  return (
    <Alert variant="danger">
      <i className="bi bi-exclamation-triangle"></i>${message}
    </Alert>
  );
};

export default RegisterError;
