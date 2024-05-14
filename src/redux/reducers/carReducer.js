import { CAR_IS_LOADING, SAVE_CAR } from "../actions";

const initialState = {
  cars: null,
  isLoadingCars: false,
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

    default:
      return state;
  }
};

export default carReducer;
