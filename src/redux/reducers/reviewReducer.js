import {
  REVIEW_IS_LOADING,
  REVIEW_UPDATE_HAS_ERRORS,
  REVIEW_UPDATE_IS_OK,
  SAVE_REVIEW,
} from "../actions";

const initialState = {
  reviews: [],
  isLoadingReviews: false,
  reviewUpdateIsOk: false,
  reviewUpdateHasErrors: null,
};

const reviewReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_REVIEW:
      return {
        ...state,
        reviews: action.payload,
      };

    case REVIEW_IS_LOADING:
      return {
        ...state,
        isLoadingReviews: action.payload,
      };

    case REVIEW_UPDATE_IS_OK:
      return {
        ...state,
        reviewUpdateIsOk: action.payload,
      };

    case REVIEW_UPDATE_HAS_ERRORS:
      return {
        ...state,
        reviewUpdateHasErrors: action.payload,
      };

    default:
      return state;
  }
};

export default reviewReducer;
