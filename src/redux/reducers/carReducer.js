import { CAR_IS_LOADING, SAVE_CAR, SAVE_SINGLE_CAR } from "../actions";

const initialState = {
  cars: null,
  isLoadingCars: false,
  singleCar: null,
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

    default:
      return state;
  }
};

export default carReducer;
