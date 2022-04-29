import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,

  USER_UPDATE_FAIL,
  USER_UPDATE_REQUEST,
  USER_UPDATE_SUCCESS
} from "../constants/userConstants";
import axios from "axios";

export const login = (UserName, UserPassword) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST });

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const { data } = await axios.post(
      "http://localhost:5500/user/login",
      { UserName, UserPassword },
      config
    );
      console.log(data);        
    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });

    localStorage.setItem("userInfo", JSON.stringify(data));

  } catch (error) {
      dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
      });
  }
};
  
  export const logout = () => async (dispatch) => {
    localStorage.clear();
    // localStorage.removeItem("EmployeeInfo");
    console.log("data deleted");
    dispatch({ type: USER_LOGOUT });
  };