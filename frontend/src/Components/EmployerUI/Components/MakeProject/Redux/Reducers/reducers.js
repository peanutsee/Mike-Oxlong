import {
  CREATE_PROJECT_REQUEST,
  CREATE_PROJECT_SUCCESS,
  CREATE_PROJECT_ERROR,
  CREATE_PROJECT_RESET,
} from "../Constants/constants";

const projectInitialState = { project: [] };

export const createProjectReducer = (
  state = projectInitialState,
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case CREATE_PROJECT_REQUEST:
      return { ...projectInitialState, loading: true, success: false };
    case CREATE_PROJECT_SUCCESS:
      return {
        ...projectInitialState,
        loading: false,
        success: true,
        project: payload,
      };
    case CREATE_PROJECT_ERROR:
      return {
        ...projectInitialState,
        loading: false,
        success: false,
        error: payload,
      };
    case CREATE_PROJECT_RESET:
      return { data: [] };
    default:
      return state;
  }
};
