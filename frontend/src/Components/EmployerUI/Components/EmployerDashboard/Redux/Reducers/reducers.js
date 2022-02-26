import {
  RETRIEVE_EMPLOYER_DATA_REQUEST,
  RETRIEVE_EMPLOYER_DATA_SUCCESS, 
  RETRIEVE_EMPLOYER_DATA_ERROR
} from '../Constants/constants'

const employerInitialData = { employer: [] };
export const retrieveEmployerDataReducer = (
  state = employerInitialData,
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case RETRIEVE_EMPLOYER_DATA_REQUEST:
      return { ...employerInitialData, loading: true };
    case RETRIEVE_EMPLOYER_DATA_SUCCESS:
      return { ...employerInitialData, loading: false, employerData: payload };
    case RETRIEVE_EMPLOYER_DATA_ERROR:
      return { ...employerInitialData, loading: false, error: payload };
    default:
      return state;
  }
};
