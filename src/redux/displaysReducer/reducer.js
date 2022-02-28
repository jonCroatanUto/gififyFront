import initialState from "./state";
import {
  HIDE_UPLOAD,
  SHOW_UPLOAD,
  RELOAD_HOME,
  DISPLAY_UPDATE,
  DISPLAY_DELETE,
  HIDE_ALL_MODALS,
} from "./types";

const displaysReducer = (state = initialState, action) => {
  switch (action.type) {
    case HIDE_UPLOAD:
      return { ...state, uploadModalState: false };
    case SHOW_UPLOAD:
      return { ...state, uploadModalState: true };
    case DISPLAY_UPDATE:
      return { ...state, isUpdateModalDisplayed: action.payload };
    case DISPLAY_DELETE:
      return { ...state, isDeleteConfirmModalDisplayed: action.payload };
    case RELOAD_HOME:
      return { ...state, realoadHome: action.payload };
    case HIDE_ALL_MODALS:
      return initialState;
    default:
      return state;
  }
};

export default displaysReducer;
