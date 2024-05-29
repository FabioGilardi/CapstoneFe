const baseUrl = "https://capstonebe-4u2r.onrender.com";

export const SAVE_ACCESS_TOKEN = "SAVE_ACCESS_TOKEN";
export const REGISTER_IS_OK = "REGISTER_IS_OK";
export const REGISTER_HAS_ERRORS = "REGISTER_HAS_ERRORS";
export const LOGIN_HAS_ERRORS = "LOGIN_HAS_ERRORS";
export const SAVE_CURRENT_USER = "SAVE_CURRENT_USER";
export const CURRENT_USER_IS_LOADING = "CURRENT_USER_IS_LOADING";
export const USER_PUT_HAS_ERRORS = "USER_PUT_HAS_ERRORS";
export const USER_PUT_IS_OK = "USER_PUT_IS_OK";
export const PASSWORD_HAS_ERRORS = "PASSWORD_HAS_ERRORS";
export const PASSWORD_IS_OK = "PASSWORD_IS_OK";
export const SAVE_RESERVATIONS = "SAVE_RESERVATIONS";
export const RESERVATION_IS_LOADING = "RESERVATION_IS_LOADING";
export const RESERVATION_UPDATE_IS_OK = "RESERVATION_UPDATE_IS_OK";
export const RESERVATION_UPDATE_HAS_ERRORS = "RESERVATION_UPDATE_HAS_ERRORS";
export const SAVE_REVIEW = "SAVE_REVIEW";
export const REVIEW_IS_LOADING = "REVIEW_IS_LOADING";
export const REVIEW_UPDATE_IS_OK = "REVIEW_UPDATE_IS_OK";
export const REVIEW_UPDATE_HAS_ERRORS = "REVIEW_UPDATE_HAS_ERRORS";
export const SAVE_CAR = "SAVE_CAR";
export const CAR_IS_LOADING = "CAR_IS_LOADING";
export const SAVE_SINGLE_CAR = "SAVE_SINGLE_CAR";
export const SAVE_SELLERS = "SAVE_SELLERS";
export const ADD_RESERVATION = "ADD_RESERVATION";
export const ADD_RESERVATION_IS_OK = "ADD_RESERVATION_IS_OK";
export const ADD_RESERVATION_HAS_ERRORS = "ADD_RESERVATION_HAS_ERRORS";
export const SAVE_ALL_USERS_REVIEWS = "SAVE_ALL_USERS_REVIEWS";
export const NEW_REVIEW_IS_OK = "NEW_REVIEW_IS_OK";
export const NEW_REVIEW_HAS_ERRORS = "NEW_REVIEW_HAS_ERRORS";
export const DELETE_USER_ROLE = "DELETE_USER_ROLE";
export const ADD_CAR_IS_OK = "ADD_CAR_IS_OK";
export const ADD_CAR_ERRORS = "ADD_CAR_ERRORS";

// AUTH REDUCER ACTIONS

export const actionlogin = (payload) => {
  return async (dispatch) => {
    try {
      const response = await fetch(baseUrl + "/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      if (response.ok) {
        const data = await response.json();
        const accessToken = data.accessToken;
        dispatch({
          type: SAVE_ACCESS_TOKEN,
          payload: accessToken,
        });
        dispatch({
          type: LOGIN_HAS_ERRORS,
          payload: null,
        });
      } else {
        const data = await response.json();
        dispatch({
          type: LOGIN_HAS_ERRORS,
          payload: data.message,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const actionRegister = (payload) => {
  return async (dispatch) => {
    dispatch({
      type: REGISTER_IS_OK,
      payload: false,
    });
    try {
      const response = await fetch(baseUrl + "/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      if (response.ok) {
        dispatch({
          type: REGISTER_HAS_ERRORS,
          payload: null,
        });
        dispatch({
          type: REGISTER_IS_OK,
          payload: true,
        });
      } else {
        const data = await response.json();
        dispatch({
          type: REGISTER_HAS_ERRORS,
          payload: data.message,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

// USER REDUCER ACTIONS

export const getUserMe = (accessToken) => {
  return async (dispatch) => {
    dispatch({
      type: CURRENT_USER_IS_LOADING,
      payload: true,
    });
    try {
      const response = await fetch(baseUrl + "/users/me", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      if (response.ok) {
        const data = await response.json();
        dispatch({
          type: SAVE_CURRENT_USER,
          payload: data,
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      dispatch({
        type: CURRENT_USER_IS_LOADING,
        payload: false,
      });
    }
  };
};

export const getSellers = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(baseUrl + "/public/sellers", {
        method: "GET",
      });
      if (response.ok) {
        const data = await response.json();
        dispatch({
          type: SAVE_SELLERS,
          payload: data,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const putUserMe = (accessToken, payload) => {
  return async (dispatch) => {
    try {
      const response = await fetch(baseUrl + "/users/me", {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      if (response.ok) {
        dispatch({
          type: USER_PUT_IS_OK,
          payload: true,
        });
        dispatch({
          type: USER_PUT_HAS_ERRORS,
          payload: null,
        });
      } else {
        const data = await response.json();
        dispatch({
          type: USER_PUT_HAS_ERRORS,
          payload: data.message,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const updatePassword = (accessToken, payload) => {
  return async (dispatch) => {
    try {
      const response = await fetch(baseUrl + "/users/me/password", {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      if (response.ok) {
        const data = await response.json();
        dispatch({
          type: PASSWORD_IS_OK,
          payload: data.message,
        });
        dispatch({
          type: PASSWORD_HAS_ERRORS,
          payload: null,
        });
      } else {
        const data = await response.json();
        dispatch({
          type: PASSWORD_HAS_ERRORS,
          payload: data.message,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

// RESERVATIONS REDUCER ACTIONS

export const saveReservations = (accessToken) => {
  return async (dispatch) => {
    dispatch({
      type: RESERVATION_IS_LOADING,
      payload: true,
    });
    try {
      const response = await fetch(baseUrl + "/reservations/me", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      if (response.ok) {
        const data = await response.json();
        dispatch({
          type: SAVE_RESERVATIONS,
          payload: data,
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      dispatch({
        type: RESERVATION_IS_LOADING,
        payload: false,
      });
    }
  };
};

export const updateReservation = (accessToken, payload, id) => {
  return async (dispatch) => {
    try {
      const response = await fetch(baseUrl + "/reservations/" + id, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      if (response.ok) {
        dispatch({
          type: RESERVATION_UPDATE_IS_OK,
          payload: true,
        });
        dispatch({
          type: RESERVATION_UPDATE_HAS_ERRORS,
          payload: null,
        });
      } else {
        const data = await response.json();
        dispatch({
          type: RESERVATION_UPDATE_HAS_ERRORS,
          payload: data.message,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const addReservation = (accessToken, payload) => {
  return async (dispatch) => {
    try {
      const response = await fetch(baseUrl + "/reservations", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      if (response.ok) {
        dispatch({
          type: ADD_RESERVATION_IS_OK,
          payload: true,
        });
        dispatch({
          type: ADD_RESERVATION_HAS_ERRORS,
          payload: null,
        });
      } else {
        const data = await response.json();
        dispatch({
          type: ADD_RESERVATION_HAS_ERRORS,
          payload: data.message,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

// REVIEWS REDUCRE ACTIONS

export const saveReview = (accessToken) => {
  return async (dispatch) => {
    dispatch({
      type: REVIEW_IS_LOADING,
      payload: true,
    });
    try {
      const response = await fetch(baseUrl + "/reviews/me", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      if (response.ok) {
        const data = await response.json();
        dispatch({
          type: SAVE_REVIEW,
          payload: data,
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      dispatch({
        type: REVIEW_IS_LOADING,
        payload: false,
      });
    }
  };
};

export const saveAllUsersReview = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(baseUrl + "/public/reviews", {
        method: "GET",
      });
      if (response.ok) {
        const data = await response.json();
        dispatch({
          type: SAVE_ALL_USERS_REVIEWS,
          payload: data.content,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateReview = (accessToken, payload, id) => {
  return async (dispatch) => {
    try {
      const response = await fetch(baseUrl + "/reviews/" + id, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      if (response.ok) {
        dispatch({
          type: REVIEW_UPDATE_IS_OK,
          payload: true,
        });
        dispatch({
          type: REVIEW_UPDATE_HAS_ERRORS,
          payload: null,
        });
      } else {
        const data = await response.json();
        dispatch({
          type: REVIEW_UPDATE_HAS_ERRORS,
          payload: data.message,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const postNewReview = (accessToken, payload) => {
  return async (dispatch) => {
    try {
      const response = await fetch(baseUrl + "/reviews", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      if (response.ok) {
        dispatch({
          type: NEW_REVIEW_IS_OK,
          payload: true,
        });
        dispatch({
          type: NEW_REVIEW_HAS_ERRORS,
          payload: null,
        });
      } else {
        const data = await response.json();
        dispatch({
          type: NEW_REVIEW_HAS_ERRORS,
          payload: data.message,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

// CAR REDUCER

export const saveCars = () => {
  return async (dispatch) => {
    dispatch({
      type: CAR_IS_LOADING,
      payload: true,
    });
    try {
      const response = await fetch(baseUrl + "/public/cars", {
        method: "GET",
      });
      if (response.ok) {
        const data = await response.json();
        dispatch({
          type: SAVE_CAR,
          payload: data,
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      dispatch({
        type: CAR_IS_LOADING,
        payload: false,
      });
    }
  };
};

export const saveSingleCar = (id) => {
  return async (dispatch) => {
    try {
      const response = await fetch(baseUrl + "/public/cars/" + id, {
        method: "GET",
      });
      if (response.ok) {
        const data = await response.json();
        dispatch({
          type: SAVE_SINGLE_CAR,
          payload: data,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const addCar = (accessToken, payload) => {
  return async (dispatch) => {
    try {
      const response = await fetch(baseUrl + "/cars", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      if (response.ok) {
        dispatch({
          type: ADD_CAR_IS_OK,
          payload: true,
        });
        dispatch({
          type: ADD_CAR_ERRORS,
          payload: null,
        });
      } else {
        const data = await response.json();
        dispatch({
          type: ADD_CAR_ERRORS,
          payload: data.message,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};
