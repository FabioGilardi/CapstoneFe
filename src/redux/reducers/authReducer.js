import { SAVE_ACCESS_TOKEN } from "../actions";

const initialState = {
  accessToken: "",
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_ACCESS_TOKEN:
      return {
        ...state,
        accessToken: action.payload,
      };

    default:
      return state;
  }
};
export default authReducer;
