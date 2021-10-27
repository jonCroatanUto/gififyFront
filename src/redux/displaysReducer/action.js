import { HIDE_UPLOAD, SHOW_UPLOAD, RELOAD_HOME } from "./types";

export const unDisplayUploadAction = () => ({ type: HIDE_UPLOAD });
export const displayUploadAction = () => ({ type: SHOW_UPLOAD });
export const realoadHomeAction = (value) => ({
  type: RELOAD_HOME,
  payload: value,
});
