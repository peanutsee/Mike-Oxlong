import {
    RETRIEVE_COURSES_REQUEST,
    RETRIEVE_COURSES_SUCCESS,
    RETRIEVE_COURSES_ERROR,
    RETRIEVE_COURSES_RESET,
  } from "../Constants/constants";
  
  const coursesInitialState = { courses: [] };
  
  export const retrieveCoursesReducer = (state = coursesInitialState, action) => {
    const { type, payload } = action;
    switch (type) {
      case RETRIEVE_COURSES_REQUEST:
        return { ...coursesInitialState, loading: true, success: false };
      case RETRIEVE_COURSES_SUCCESS:
        return {
          ...coursesInitialState,
          loading: false,
          success: true,
          courses: payload,
        };
      case RETRIEVE_COURSES_ERROR:
        return {
          ...coursesInitialState,
          loading: false,
          success: true,
          error: payload,
        };
      case RETRIEVE_COURSES_RESET:
        return {};
      default:
        return state;
    }
  };
  