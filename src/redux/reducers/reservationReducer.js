import { RESERVATION_IS_LOADING, SAVE_RESERVATIONS } from "../actions";

const initialState = {
  reservations: [],
  isLoadingReservation: false,
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

    default:
      return state;
  }
};

export default reservationReducer;
