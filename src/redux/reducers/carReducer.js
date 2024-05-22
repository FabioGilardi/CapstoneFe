import {
  ADD_CAR_ERRORS,
  ADD_CAR_IS_OK,
  CAR_IS_LOADING,
  SAVE_CAR,
  SAVE_SINGLE_CAR,
} from "../actions";

const initialState = {
  cars: null,
  isLoadingCars: false,
  singleCar: null,
  addCarIsOk: false,
  addCarErrors: null,
};

const carReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_CAR:
      return {
        ...state,
        cars: action.payload,
      };

    case CAR_IS_LOADING:
      return {
        ...state,
        isLoadingCars: action.payload,
      };

    case SAVE_SINGLE_CAR:
      return {
        ...state,
        singleCar: action.payload,
      };

    case ADD_CAR_IS_OK:
      return {
        ...state,
        addCarIsOk: action.payload,
      };

    case ADD_CAR_ERRORS:
      return {
        ...state,
        addCarErrors: action.payload,
      };

    default:
      return state;
  }
};

export default carReducer;
