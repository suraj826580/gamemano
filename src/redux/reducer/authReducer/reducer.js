import {
  LOGIN_ERROR,
  LOGIN_USER,
  USER_ADDED_SUCCESSFULLY,
} from "./actionTypes";

const getInitialUserData = () => {
  if (typeof window !== "undefined") {
    return JSON.parse(localStorage.getItem("userData") || "[]");
  }
  return [];
};

const getInitialLoginStatus = () => {
  if (typeof window !== "undefined") {
    return sessionStorage.getItem("login") === "true";
  }
  return false;
};

const intialState = {
  userData: getInitialUserData(),
  login: getInitialLoginStatus(),
};

const reducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case USER_ADDED_SUCCESSFULLY: {
      const updatedUsers = [...state.userData, payload];
      localStorage.setItem("userData", JSON.stringify(updatedUsers));
      return {
        ...state,
        userData: updatedUsers,
      };
    }
    case LOGIN_USER: {
      sessionStorage.setItem("login", true);
      return {
        ...state,
        login: payload,
      };
    }
    case LOGIN_ERROR: {
      sessionStorage.setItem("login", false);

      return {
        ...state,
        login: payload,
      };
    }
    default:
      return state;
  }
};
export default reducer;
