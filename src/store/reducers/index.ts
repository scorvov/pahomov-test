import { combineReducers } from "redux";
import { authReducer } from "./auth-reducer";
import { dataReducer } from "./data-reducer";

export const rootReducer = combineReducers({
  authState: authReducer,
  dataState: dataReducer
});
