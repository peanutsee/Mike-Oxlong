import {
  CREATE_INTERNSHIP_REQUEST,
  CREATE_INTERNSHIP_SUCCESS,
  CREATE_INTERNSHIP_ERROR,
} from "../Constants/constants";
import axios from "axios";

export const createInternship = (details) => async (dispatch, getState) => {
  try {
    dispatch({ type: CREATE_INTERNSHIP_REQUEST });

    const {
      employerLoginReducer: { employerInfo },
    } = getState();

    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${employerInfo.token}`,
      },
    };

    const { data } = await axios.post(
      "/api/internships/create-internship/",
      details,
      config
    );
    dispatch({ type: CREATE_INTERNSHIP_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: CREATE_INTERNSHIP_ERROR,
      payload: "Error Creating Internship",
    });
  }
};
