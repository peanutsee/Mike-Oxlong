import {
  RETRIEVE_PROJECTS_REQUEST,
  RETRIEVE_PROJECTS_SUCCESS,
  RETRIEVE_PROJECTS_ERROR,
  APPLY_PROJECTS_REQUEST,
  APPLY_PROJECTS_SUCCESS,
  APPLY_PROJECTS_ERROR,
  APPLY_PROJECTS_RESET,
} from "../Constants/constants";
import axios from "axios";

export const getProjects = () => async (dispatch, getState) => {
  try {
    dispatch({ type: RETRIEVE_PROJECTS_REQUEST });
    const {
      internLoginReducer: { internInfo },
    } = getState();

    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${internInfo.token}`,
      },
    };
    const { data } = await axios.get("/api/interns/retrieve-projects/", config);

    dispatch({ type: RETRIEVE_PROJECTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: RETRIEVE_PROJECTS_ERROR,
      payload: "Error Loading Projects",
    });
  }
};

export const applyProjects =
  ({ number }) =>
  async (dispatch, getState) => {
    try {
      dispatch({ type: APPLY_PROJECTS_REQUEST });
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
        `/api/interns/enroll-project/${number}/`,
        {},
        config
      );

      dispatch({ type: APPLY_PROJECTS_SUCCESS, payload: data });
      dispatch({ type: APPLY_PROJECTS_RESET });
    } catch (error) {
      dispatch({
        type: APPLY_PROJECTS_ERROR,
        payload: "Error Applying Project",
      });
    }
  };
