import {
  RETRIEVE_DASHBOARD_REQUEST,
  RETRIEVE_DASHBOARD_SUCCESS,
  RETRIEVE_DASHBOARD_ERROR,
} from "../Constants/constants";
import axios from "axios";

export const getDashboard = () => async (dispatch, getState) => {
  try {
    dispatch({ type: RETRIEVE_DASHBOARD_REQUEST });
    const {
      internLoginReducer: { internInfo },
    } = getState();

    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${internInfo.token}`,
      },
    };
    const { data } = await axios.get("/api/interns/intern-dashboard/", config);

    dispatch({ type: RETRIEVE_DASHBOARD_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: RETRIEVE_DASHBOARD_ERROR,
      payload: "Error Loading Dashboard",
    });
  }
};
