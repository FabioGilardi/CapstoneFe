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

const baseUrl = "http://loaclhost:3001/auth";

export const SAVE_ACCESS_TOKEN = "SAVE_ACCESS_TOKEN";

export const actionlogin = (payload) => {
  return async (dispatch) => {
    try {
      const response = await fetch(baseUrl + "/login", {
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
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
