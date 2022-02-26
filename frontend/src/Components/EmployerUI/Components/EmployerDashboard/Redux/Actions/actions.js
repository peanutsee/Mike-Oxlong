import {
  RETRIEVE_EMPLOYER_DATA_REQUEST,
    RETRIEVE_EMPLOYER_DATA_SUCCESS,
    RETRIEVE_EMPLOYER_DATA_ERROR,
  } from "../Constants/constants";
  import axios from 'axios'

  export const getEmployerData = () => async (dispatch, getState) => {
    try {
      dispatch({ type: RETRIEVE_EMPLOYER_DATA_REQUEST });
      const {
        employerLoginReducer: { employerInfo },
      } = getState();
  
      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${employerInfo.token}`,
        },
      };
      const { data } = await axios.get(
        "/api/employers/employer-dashboard/",
        config
      );
  
      dispatch({ type: RETRIEVE_EMPLOYER_DATA_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: RETRIEVE_EMPLOYER_DATA_ERROR,
        payload: "Error Loading Data",
      });
    }
  };
  