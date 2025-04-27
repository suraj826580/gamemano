import {
  LOGIN_ERROR,
  LOGIN_USER,
  USER_ADDED_SUCCESSFULLY,
} from "./actionTypes";

export const signupFunc = (data) => (dispatch) => {
  return dispatch({ type: USER_ADDED_SUCCESSFULLY, payload: data });
};

export const LoginFunc = (data) => (dispatch, getState) => {
  const {
    auth: { userData },
  } = getState();

  const user = userData.find((ele) => ele.email === data.email);

  if (!user) {
    return dispatch({
      type: LOGIN_ERROR,
      payload: false,
      message: "User not found",
      status: false,
    });
  }

  if (user.password !== data.password) {
    return dispatch({
      type: LOGIN_ERROR,
      payload: false,
      message: "Incorrect password",
      status: false,
    });
  }

  return dispatch({
    type: LOGIN_USER,
    payload: true,
    message: "Login Successful",
    status: true,
  });
};
