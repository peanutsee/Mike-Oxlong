import {
  EMPLOYER_LOGIN_REQUEST,
  EMPLOYER_LOGIN_SUCCESS,
  EMPLOYER_LOGIN_ERROR,
  EMPLOYER_LOGIN_RESET,
  EMPLOYER_LOGOUT,
} from "../Constants/constants";

const employerLoginInitialState = { employerInfo: [] };

export const employerLoginReducer = (
  state = employerLoginInitialState,
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case EMPLOYER_LOGIN_REQUEST:
      return { ...employerLoginInitialState, loading: true, success: false };
    case EMPLOYER_LOGIN_SUCCESS:
      return {
        ...employerLoginInitialState,
        loading: false,
        success: true,
        employerInfo: payload,
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
    case EMPLOYER_LOGOUT:
      return {};
    default:
      return state;
  }
};
