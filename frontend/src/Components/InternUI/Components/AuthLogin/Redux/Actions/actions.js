import {
  INTERN_LOGIN_REQUEST,
  INTERN_LOGIN_SUCCESS,
  INTERN_LOGIN_ERROR,
  INTERN_LOGOUT,
} from "../Constants/constants";
import axios from "axios";

export const handleInternLogin = (details) => async (dispatch) => {
  try {
    dispatch({ type: INTERN_LOGIN_REQUEST });
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const { data } = await axios.post("/api/users/login/", details, config);

    dispatch({ type: INTERN_LOGIN_SUCCESS, payload: data });

    dispatch({
      type: INTERN_LOGIN_SUCCESS,
      payload: data,
    });

    localStorage.setItem("internInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: INTERN_LOGIN_ERROR,
      payload: "Error Login Intern",
    });
  }
};

export const internLogout = () => (dispatch) => {
  localStorage.removeItem("internInfo");
  dispatch({ type: INTERN_LOGOUT });
};
