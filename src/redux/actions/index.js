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

const baseUrlAuth = "http://loaclhost:3001/auth";

export const SAVE_ACCESS_TOKEN = "SAVE_ACCESS_TOKEN";
export const REGISTER_IS_OK = "REGISTER_IS_OK";
export const REGISTER_HAS_ERRORS = "REGISTER_HAS_ERRORS";
export const LOGIN_HAS_ERRORS = "LOGIN_HAS_ERRORS";

export const actionlogin = (payload) => {
  return async (dispatch) => {
    try {
      const response = await fetch(baseUrlAuth + "/login", {
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
      const response = await fetch(baseUrlAuth + "/register", {
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
