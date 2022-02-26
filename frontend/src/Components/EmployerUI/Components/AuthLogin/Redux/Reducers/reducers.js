import {
    EMPLOYER_LOGIN_REQUEST,
    EMPLOYER_LOGIN_SUCCESS,
    EMPLOYER_LOGIN_ERROR,
    EMPLOYER_LOGIN_RESET,
  } from "../Constants/constants";
  
  const employerLoginInitialState = { data: [] };
  
  export const employerLoginReducer = (
    state = employerLoginInitialState,
    action
  ) => {
    const {type, payload} = action;
    switch (type) {
      case EMPLOYER_LOGIN_REQUEST:
        return { ...employerLoginInitialState, loading: true, success: false };
      case EMPLOYER_LOGIN_SUCCESS:
        return {
          ...employerLoginInitialState,
          loading: false,
          success: true,
          data: payload,
        };
      case EMPLOYER_LOGIN_ERROR:
        return {
          ...employerLoginInitialState,
          loading: false,
          success: false,
          error: payload,
        };
      case EMPLOYER_LOGIN_RESET:
        return { data: [] };
      default:
        return state;
    }
  };
  