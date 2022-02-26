import {
  INTERN_REGISTER_REQUEST,
  INTERN_REGISTER_SUCCESS,
  INTERN_REGISTER_ERROR,
} from "../Constants/constants";
import { INTERN_LOGIN_SUCCESS } from "../../../AuthLogin/Redux/Constants/constants";
import axios from "axios";

export const handleInternRegistration = (details) => async (dispatch) => {
  try {
    dispatch({ type: INTERN_REGISTER_REQUEST });

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const { data } = await axios.post("/api/users/register/", details, config);
    dispatch({ type: INTERN_REGISTER_SUCCESS, payload: data });

    dispatch({
      type: INTERN_LOGIN_SUCCESS,
      payload: data,
    });

    localStorage.setItem("internInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: INTERN_REGISTER_ERROR,
      payload: "Error Registering Intern",
    });
  }
};
