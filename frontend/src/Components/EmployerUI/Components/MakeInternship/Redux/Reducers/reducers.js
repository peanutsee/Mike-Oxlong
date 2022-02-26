import {
  CREATE_INTERNSHIP_REQUEST,
  CREATE_INTERNSHIP_SUCCESS,
  CREATE_INTERNSHIP_ERROR,
  CREATE_INTERNSHIP_RESET,
} from "../Constants/constants";

const internshipInitialState = { internship: [] };

export const createInternshipReducer = (
  state = internshipInitialState,
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case CREATE_INTERNSHIP_REQUEST:
      return { ...internshipInitialState, loading: true, success: false };
    case CREATE_INTERNSHIP_SUCCESS:
      return {
        ...internshipInitialState,
        loading: false,
        success: true,
        internship: payload,
      };
    case CREATE_INTERNSHIP_ERROR:
      return {
        ...internshipInitialState,
        loading: false,
        success: false,
        error: payload,
      };
    case CREATE_INTERNSHIP_RESET:
      return { data: [] };
    default:
      return state;
  }
};
