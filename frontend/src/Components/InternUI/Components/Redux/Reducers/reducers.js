import {
  INTERN_REGISTER_REQUEST,
  INTERN_REGISTER_SUCCESS,
  INTERN_REGISTER_ERROR,
  INTERN_REGISTER_RESET,
} from "../Constants/constants";

const internRegisterInitialState = { data: [] };

export const internRegistrationReducer = (
  state = internRegisterInitialState,
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case INTERN_REGISTER_REQUEST:
      return { ...internRegisterInitialState, loading: true, success: false };
    case INTERN_REGISTER_SUCCESS:
      return {
        ...internRegisterInitialState,
        loading: false,
        success: true,
        data: payload,
      };
    case INTERN_REGISTER_ERROR:
      return {
        ...internRegisterInitialState,
        loading: false,
        success: false,
        error: payload,
      };
    case INTERN_REGISTER_RESET:
      return { data: [] };
    default:
      return state;
  }
};
