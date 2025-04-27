import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
} from "redux";

import { thunk } from "redux-thunk";
import authReducer from "./reducer/authReducer/reducer";
import gamesReducer from "./reducer/gamesReducer/reducer";

const rootReducer = combineReducers({ auth: authReducer, games: gamesReducer });

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
