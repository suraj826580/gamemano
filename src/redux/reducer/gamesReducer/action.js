import axiosInstance from "../../../lib/api/axiosInstance";
import {
  REQUEST,
  GAMES_API_SUCCESS,
  FAILURE,
  GET_CATEGORIES,
} from "../../../redux/reducer/gamesReducer/actionTypes";
import {
  CATEGORIES_END_POINT,
  GAMES_API_END_POINT,
} from "../../../lib/api/apiEndpoints";
export const getGamesFunc = (searchQuery) => async (dispatch) => {
  try {
    dispatch({ type: REQUEST });

    let url = "";
    if (searchQuery) {
      url = `${GAMES_API_END_POINT}/search?q=${searchQuery}`;
    } else {
      url = `${GAMES_API_END_POINT}`;
    }
    const res = await axiosInstance.get(url);
    const payloadObj = { data: res?.data?.products, searchQuery };
    if (searchQuery) {
      payloadObj["showGamesDetailsPage"] = true;
    }
    return dispatch({ type: GAMES_API_SUCCESS, payload: payloadObj });
  } catch (error) {
    dispatch({ type: FAILURE });
    return Promise.reject(error);
  }
};

export const getCategories = async (dispatch, getState) => {
  try {
    dispatch({ type: REQUEST });
    const store = getState();
    const { categoryList } = store.games;
    if (categoryList.length > 0) return;
    const res = await axiosInstance.get(CATEGORIES_END_POINT);
    dispatch({ type: GET_CATEGORIES, payload: res.data });
  } catch (error) {
    dispatch({ type: FAILURE });
    return Promise.reject(error);
  }
};
