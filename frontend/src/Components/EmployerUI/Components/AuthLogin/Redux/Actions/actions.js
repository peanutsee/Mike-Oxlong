import {
  EMPLOYER_LOGIN_REQUEST,
  EMPLOYER_LOGIN_SUCCESS,
  EMPLOYER_LOGIN_ERROR,
} from "../Constants/constants";
import axios from "axios";

export const handleEmployerLogin = (details) => async (dispatch) => {
  try {
    dispatch({ type: EMPLOYER_LOGIN_REQUEST });
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const { data } = await axios.post("/api/users/login/", details, config);

    dispatch({ type: EMPLOYER_LOGIN_SUCCESS, payload: data });

    dispatch({
      type: EMPLOYER_LOGIN_SUCCESS,
      payload: data,
    });

    localStorage.setItem("employerInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: EMPLOYER_LOGIN_ERROR,
      payload: "Error Login Employee",
    });
  }
};
