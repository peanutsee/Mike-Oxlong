import {
  RETRIEVE_INTERNSHIPS_REQUEST,
  RETRIEVE_INTERNSHIPS_SUCCESS,
  RETRIEVE_INTERNSHIPS_ERROR,
  APPLY_INTERNSHIPS_REQUEST,
  APPLY_INTERNSHIPS_SUCCESS,
  APPLY_INTERNSHIPS_ERROR,
  APPLY_INTERNSHIPS_RESET,
} from "../Constants/constants";
import axios from "axios";

export const getInternships = () => async (dispatch, getState) => {
  try {
    dispatch({ type: RETRIEVE_INTERNSHIPS_REQUEST });
    const {
      internLoginReducer: { internInfo },
    } = getState();

    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${internInfo.token}`,
      },
    };
    const { data } = await axios.get(
      "/api/interns/retrieve-internships/",
      config
    );

    dispatch({ type: RETRIEVE_INTERNSHIPS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: RETRIEVE_INTERNSHIPS_ERROR,
      payload: "Error Loading Internships",
    });
  }
};

export const applyInternships =
  ({ number }) =>
  async (dispatch, getState) => {
    try {
      dispatch({ type: APPLY_INTERNSHIPS_REQUEST });
      const {
        internLoginReducer: { internInfo },
      } = getState();

      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${internInfo.token}`,
        },
      };
      const { data } = await axios.put(
        `/api/interns/enroll-internship/${number}/`, {},
        config
      );

      dispatch({ type: APPLY_INTERNSHIPS_SUCCESS, payload: data });
      dispatch({ type: APPLY_INTERNSHIPS_RESET });
    } catch (error) {
      dispatch({
        type: APPLY_INTERNSHIPS_ERROR,
        payload: "Error Applying Internship",
      });
    }
  };
