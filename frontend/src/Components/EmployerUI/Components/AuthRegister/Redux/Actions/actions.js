import {
  EMPLOYER_REGISTER_REQUEST,
  EMPLOYER_REGISTER_SUCCESS,
  EMPLOYER_REGISTER_ERROR,
} from "../Constants/constants";
import { EMPLOYER_LOGIN_SUCCESS } from "../../../AuthLogin/Redux/Constants/constants";

import axios from "axios";

export const handleEmployerRegistration = (details) => async (dispatch) => {
  try {
    dispatch({ type: EMPLOYER_REGISTER_REQUEST });

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const { data } = await axios.post("/api/users/register/", details, config);
    dispatch({ type: EMPLOYER_REGISTER_SUCCESS, payload: data });

    dispatch({
      type: EMPLOYER_LOGIN_SUCCESS,
      payload: data,
    });

    localStorage.setItem("employerInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: EMPLOYER_REGISTER_ERROR,
      payload: "Error Registering Employee",
    });
  }
};
