import {
  HIDE_UPLOAD,
  SHOW_UPLOAD,
  RELOAD_HOME,
  DISPLAY_UPDATE,
  DISPLAY_DELETE,
  HIDE_ALL_MODALS,
} from "./types";

export const unDisplayUploadAction = () => ({ type: HIDE_UPLOAD });
export const displayUploadAction = () => ({ type: SHOW_UPLOAD });
export const realoadHomeAction = (value) => ({
  type: RELOAD_HOME,
  payload: value,
});
export const displayUpdateAction = (value) => ({
  type: DISPLAY_UPDATE,
  payload: value,
});
export const displayDeleteAction = (value) => ({
  type: DISPLAY_DELETE,
  payload: value,
});
export const hideAllModalsAction = () => ({
  type: HIDE_ALL_MODALS,
});
