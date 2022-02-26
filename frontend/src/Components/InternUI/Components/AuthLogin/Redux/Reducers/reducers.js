import {
  INTERN_LOGIN_REQUEST,
  INTERN_LOGIN_SUCCESS,
  INTERN_LOGIN_ERROR,
  INTERN_LOGIN_RESET,
  INTERN_LOGOUT,
} from "../Constants/constants";

const internLoginInitialState = { internInfo: [] };

export const internLoginReducer = (state = internLoginInitialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case INTERN_LOGIN_REQUEST:
      return { ...internLoginInitialState, loading: true, success: false };
    case INTERN_LOGIN_SUCCESS:
      return {
        ...internLoginInitialState,
        loading: false,
        success: true,
        internInfo: payload,
      };
    case INTERN_LOGIN_ERROR:
      return {
        ...internLoginInitialState,
        loading: false,
        success: false,
        error: payload,
      };
    case INTERN_LOGIN_RESET:
      return { data: [] };
    case INTERN_LOGOUT:
      return {};
    default:
      return state;
  }
};
