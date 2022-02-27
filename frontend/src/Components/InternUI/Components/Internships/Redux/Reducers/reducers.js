import {
  RETRIEVE_INTERNSHIPS_REQUEST,
  RETRIEVE_INTERNSHIPS_SUCCESS,
  RETRIEVE_INTERNSHIPS_ERROR,
  RETRIEVE_INTERNSHIPS_RESET,
  APPLY_INTERNSHIPS_REQUEST,
  APPLY_INTERNSHIPS_SUCCESS,
  APPLY_INTERNSHIPS_ERROR,
  APPLY_INTERNSHIPS_RESET,
} from "../Constants/constants";

const internshipInitialState = { internships: [] };

export const retrieveInternshipsReducer = (
  state = internshipInitialState,
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case RETRIEVE_INTERNSHIPS_REQUEST:
      return { ...internshipInitialState, loading: true, success: false };
    case RETRIEVE_INTERNSHIPS_SUCCESS:
      return {
        ...internshipInitialState,
        loading: false,
        success: true,
        internships: payload,
      };
    case RETRIEVE_INTERNSHIPS_ERROR:
      return {
        ...internshipInitialState,
        loading: false,
        success: true,
        error: payload,
      };
    case RETRIEVE_INTERNSHIPS_RESET:
      return {};
    default:
      return state;
  }
};

export const applyInternshipsReducer = (
  state = internshipInitialState,
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case APPLY_INTERNSHIPS_REQUEST:
      return { ...internshipInitialState, loading: true, success: false };
    case APPLY_INTERNSHIPS_SUCCESS:
      return {
        ...internshipInitialState,
        loading: false,
        success: true,
        internships: payload,
      };
    case APPLY_INTERNSHIPS_ERROR:
      return {
        ...internshipInitialState,
        loading: false,
        success: true,
        error: payload,
      };
    case APPLY_INTERNSHIPS_RESET:
      return {};
    default:
      return state;
  }
};
