import {
  RETRIEVE_DASHBOARD_REQUEST,
  RETRIEVE_DASHBOARD_SUCCESS,
  RETRIEVE_DASHBOARD_ERROR,
} from "../Constants/constants";

const dashboardInitialState = {};

export const retrieveDashboardReducer = (
  state = dashboardInitialState,
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case RETRIEVE_DASHBOARD_REQUEST:
      return {
        ...dashboardInitialState,
        loading: true,
        success: false,
      };
    case RETRIEVE_DASHBOARD_SUCCESS:
      return {
        ...dashboardInitialState,
        loading: false,
        success: true,
        dashboardData: payload,
      };
    case RETRIEVE_DASHBOARD_ERROR:
      return {
        ...dashboardInitialState,
        loading: false,
        success: false,
        error: payload,
      };
    default:
      return state;
  }
};
