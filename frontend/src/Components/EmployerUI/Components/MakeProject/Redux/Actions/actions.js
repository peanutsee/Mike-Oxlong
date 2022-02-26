import {
  CREATE_PROJECT_REQUEST,
  CREATE_PROJECT_SUCCESS,
  CREATE_PROJECT_ERROR,
} from "../Constants/constants";
import axios from "axios";

export const createProject = (details) => async (dispatch, getState) => {
  try {
    dispatch({ type: CREATE_PROJECT_REQUEST });

    const {
      employerLoginReducer: { employerInfo },
    } = getState();

    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${employerInfo.token}`,
      },
    };
    

    const { data } = await axios.post(
      "/api/projects/create-project/",
      details,
      config
    );
    dispatch({ type: CREATE_PROJECT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: CREATE_PROJECT_ERROR, payload: "Error Creating Project" });
  }
};
