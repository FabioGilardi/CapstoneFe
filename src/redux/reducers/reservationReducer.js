import {
  ADD_RESERVATION_HAS_ERRORS,
  ADD_RESERVATION_IS_OK,
  RESERVATION_IS_LOADING,
  RESERVATION_UPDATE_HAS_ERRORS,
  RESERVATION_UPDATE_IS_OK,
  SAVE_RESERVATIONS,
} from "../actions";

const initialState = {
  reservations: [],
  isLoadingReservation: false,
  reservationUpdateIsOk: false,
  reservationUpdateHasErrors: null,
  addReservationIsOK: false,
  addReservationHasErrors: null,
};

const reservationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_RESERVATIONS:
      return {
        ...state,
        reservations: action.payload,
      };

    case RESERVATION_IS_LOADING:
      return {
        ...state,
        isLoadingReservation: action.payload,
      };

    case RESERVATION_UPDATE_IS_OK:
      return {
        ...state,
        reservationUpdateIsOk: action.payload,
      };

    case RESERVATION_UPDATE_HAS_ERRORS:
      return {
        ...state,
        reservationUpdateHasErrors: action.payload,
      };

    case ADD_RESERVATION_IS_OK:
      return {
        ...state,
        addReservationIsOK: action.payload,
      };

    case ADD_RESERVATION_HAS_ERRORS:
      return {
        ...state,
        addReservationHasErrors: action.payload,
      };

    default:
      return state;
  }
};

export default reservationReducer;
