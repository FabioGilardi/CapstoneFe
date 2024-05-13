import {
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

    default:
      return state;
  }
};

export default reservationReducer;
