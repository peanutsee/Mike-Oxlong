import {
  EMPLOYER_REGISTER_REQUEST,
  EMPLOYER_REGISTER_SUCCESS,
  EMPLOYER_REGISTER_ERROR,
  EMPLOYER_REGISTER_RESET,
} from "../Constants/constants";

const employerRegisterInitialState = { employerInfo: [] };

export const employerRegistrationReducer = (
  state = employerRegisterInitialState,
  action
) => {
  const {type, payload} = action;
  switch (type) {
    case EMPLOYER_REGISTER_REQUEST:
      return { ...employerRegisterInitialState, loading: true, success: false };
    case EMPLOYER_REGISTER_SUCCESS:
      return {
        ...employerRegisterInitialState,
        loading: false,
        success: true,
        employerInfo: payload,
      };
    case EMPLOYER_REGISTER_ERROR:
      return {
        ...employerRegisterInitialState,
        loading: false,
        success: false,
        error: payload,
      };
    case EMPLOYER_REGISTER_RESET:
      return { data: [] };
    default:
      return state;
  }
};
