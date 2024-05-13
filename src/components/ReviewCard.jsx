/* eslint-disable react/prop-types */
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import { useDispatch, useSelector } from "react-redux";
import {
  REVIEW_UPDATE_HAS_ERRORS,
  REVIEW_UPDATE_IS_OK,
  saveReview,
} from "../redux/actions";

const ReviewCard = ({ review, modalShow, activeCardId }) => {
  const accessToken = useSelector((state) => state.authReducer.accessToken);

  const dispatch = useDispatch();

  return (
    <Col id={review.id} className="mb-3">
      <Card className="h-100 shadow cardhover">
        <Card.Body className="d-flex flex-column justify-content-between">
          <Card.Title className="d-flex align-items-center mb-2">
            <img
              src={review.user.avatar}
              alt="user avatar"
              className="rounded-circle"
              width="45px"
            ></img>
            <p className="mb-0 ms-2">{review.user.username}</p>
          </Card.Title>
          <Card.Text>
            <p className="mb-3">
              {[1, 2, 3, 4, 5].map((value) => (
                <i
                  key={value}
                  className={
                    value <= review.rating
                      ? "bi bi-star-fill text-warning me-1"
                      : "bi bi-star text-warning me-1"
                  }
                ></i>
              ))}
            </p>
            <p className="fw-bold mb-2">{review.title}</p>
            <p>{review.description}</p>
          </Card.Text>
          <div className="d-flex justify-content-between">
            <Button
              variant="primary"
              className="text-white"
              onClick={(e) => {
                activeCardId(e.target.closest(".col").id);
                modalShow();
                dispatch({
                  type: REVIEW_UPDATE_IS_OK,
                  payload: false,
                });
                dispatch({
                  type: REVIEW_UPDATE_HAS_ERRORS,
                  payload: null,
                });
              }}
            >
              <i className="bi bi-pencil"></i> Change
            </Button>
            <Button
              variant="danger"
              className="text-white"
              onClick={async (e) => {
                try {
                  const response = await fetch(
                    `http://localhost:3001/reviews/${
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
                    dispatch(saveReview(accessToken));
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

export default ReviewCard;
