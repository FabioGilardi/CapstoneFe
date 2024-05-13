// ACTION REFERENCES -------------------------------------------------------------------------------------------------------

// export const EXAMPLE_1 = "EXAMPLE_1"

// ACTION CREATORS --------------------------------------------------------------------------------------------------------
// Per la rimozione degli elementi da un array solitamente si utilizza l'indice dell'elemento come parametro

// export const actionEx1 = (generalParameter) => ({
//   type: EXAMPLE_1,
//   payload: generalParameter,
// });

// ACTION CREATOR CON FETCH
// export const example2 = () => {
//   return async (dispatch, getState) => {
//     try {

//       const response = await fetch(baseEndpoint + query + "&limit=20");
//       if (response.ok) {
//         const data = await response.json();
//         dispatch({
//           type: WHAT_U_NEED,
//           payload: data,
//         });
//       } else {
//         alert("Error fetching results");
//       }
//     } catch (error) {
//       console.log(error);
//     } finally {
//     }
//   };
// };

const baseUrl = "http://localhost:3001";

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

// REVIEWS REDUCRE ACTIONS
