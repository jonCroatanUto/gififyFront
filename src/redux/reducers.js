import { combineReducers } from "redux";
import userReducer from "./userReducer/reducer";

const reducers = combineReducers({
  userReducer: userReducer,
});

export default reducers;
