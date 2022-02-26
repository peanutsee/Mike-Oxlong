import {
    RETRIEVE_COURSES_REQUEST,
    RETRIEVE_COURSES_SUCCESS,
    RETRIEVE_COURSES_ERROR,
  } from "../Constants/constants";
  import axios from "axios";
  
  export const getCourses = () => async (dispatch, getState) => {
    try {
      dispatch({ type: RETRIEVE_COURSES_REQUEST });
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
        "/api/interns/retrieve-courses/",
        config
      );
  
      dispatch({ type: RETRIEVE_COURSES_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: RETRIEVE_COURSES_ERROR,
        payload: "Error Loading Internships",
      });
    }
  };
  