/* eslint-disable react/prop-types */
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import { useDispatch, useSelector } from "react-redux";
import {
  RESERVATION_UPDATE_HAS_ERRORS,
  RESERVATION_UPDATE_IS_OK,
  saveReservations,
} from "../redux/actions";

const ReservationCard = ({ reservation, modalShow, activeCardId }) => {
  // MAIN FUNCTIONS
  const dispatch = useDispatch();

  // GLOBAL STATE
  const accessToken = useSelector((state) => state.authReducer.accessToken);

  return (
    <Col id={reservation.id} className="mb-3">
      <Card className="h-100 shadow cardhover">
        <Card.Img
          variant="top"
          src={reservation.car.picture}
          alt="card-pic"
          height={"200px"}
          style={{ objectFit: "cover" }}
        />
        <Card.Body>
          <Card.Title className="fw-bold mb-4 text-center">
            {reservation.car.brand + " " + reservation.car.model}
          </Card.Title>
          <Card.Text>
            <p className="mb-1">
              <span className="fw-bold">Date</span>:{" "}
              {reservation.reservationDate.substring(0, 10)}
            </p>
            <p className="mb-1">
              <span className="fw-bold">Hour</span>:{" "}
              {reservation.reservationDate.substring(11, 16)}
            </p>
            <p className="mb-1">
              <span className="fw-bold">Seller</span>:{" "}
              {reservation.seller.name + " " + reservation.seller.surname}
            </p>
            <p className="mb-1">
              <span className="fw-bold">Email</span>: {reservation.seller.email}
            </p>
          </Card.Text>
          <div className="d-flex justify-content-between">
            <Button
              variant="primary"
              className="text-white"
              onClick={(e) => {
                activeCardId(e.target.closest(".col").id);
                modalShow();
                dispatch({
                  type: RESERVATION_UPDATE_IS_OK,
                  payload: false,
                });
                dispatch({
                  type: RESERVATION_UPDATE_HAS_ERRORS,
                  payload: null,
                });
              }}
            >
              <i className="bi bi-clock"></i> Change
            </Button>
            <Button
              variant="danger"
              className="text-white"
              onClick={async (e) => {
                try {
                  const response = await fetch(
                    `http://localhost:3001/reservations/${
                      e.target.closest(".col").id
                    }`,
                    {
                      method: "DELETE",
                      headers: {
                        Authorization: `Bearer ${accessToken}`,
                      },
                    }
                  );
                  if (response.ok) {
                    console.log("Reservation Deleted successfully");
                    dispatch(saveReservations(accessToken));
                  }
                } catch (error) {
                  console.log(error);
                }
              }}
            >
              <i className="bi bi-x-lg"></i> Delete
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ReservationCard;
