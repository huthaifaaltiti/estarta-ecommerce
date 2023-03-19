import * as PRODUCTS_CONSTANTS from "./constants";

export const FetchProducts = () => async (dispatch) => {
  try {
    dispatch({
      type: PRODUCTS_CONSTANTS.PRODUCTS_LOADING,
    });

    const resp = await fetch(
      "https://run.mocky.io/v3/ebee18cb-838a-440f-bf61-e406587748a2"
    );

    const data = await resp.json();

    dispatch({
      type: PRODUCTS_CONSTANTS.PRODUCTS_FETCH_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCTS_CONSTANTS.PRODUCTS_ERROR,
      payload: error,
    });
  }
};
