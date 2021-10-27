import initialState from "./state";
import { HIDE_UPLOAD, SHOW_UPLOAD, RELOAD_HOME } from "./types";

const displaysReducer = (state = initialState, action) => {
  switch (action.type) {
    case HIDE_UPLOAD:
      return { ...state, uploadModalState: false };
    case SHOW_UPLOAD:
      return { ...state, uploadModalState: true };
    case RELOAD_HOME:
      return { ...state, realoadHome: action.payload };

    default:
      return state;
  }
};

export default displaysReducer;
