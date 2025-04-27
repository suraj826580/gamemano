import {
  REQUEST,
  GAMES_API_SUCCESS,
  FAILURE,
  GET_CATEGORIES,
} from "../../../redux/reducer/gamesReducer/actionTypes";

const initialState = {
  ISLOADING: false,
  gamesData: [],
  ISERROR: false,
  categoryList: [],

  showGamesDetailsPage: false,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case REQUEST:
      return {
        ...state,
        ISLOADING: true,
        ISERROR: false,
      };
    case GAMES_API_SUCCESS: {
      return {
        ...state,
        ISLOADING: false,
        gamesData: payload.data,
        showGamesDetailsPage: payload?.showGamesDetailsPage
          ? payload?.showGamesDetailsPage
          : false,
        searchQuery: payload.searchQuery,
      };
    }
    case GET_CATEGORIES:
      return {
        ...state,
        categoryList: payload,
        ISLOADING: false,
        ISERROR: false,
      };
    case FAILURE:
      return {
        ...state,
        ISLOADING: false,
        ISERROR: true,
      };
    default:
      return state;
  }
};
export default reducer;
