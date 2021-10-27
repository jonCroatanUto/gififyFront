import { combineReducers } from "redux";
import userReducer from "./userReducer/reducer";
import displaysReducer from "./displaysReducer/reducer";

const reducers = combineReducers({
  userReducer: userReducer,
  displaysReducer: displaysReducer,
});

export default reducers;
