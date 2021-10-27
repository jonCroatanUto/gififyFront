import { FETCH_USER_DATA, RESET_USER_DATA, LOG_OUT } from "./types";

export const fetchUserData = (value) => ({
  type: FETCH_USER_DATA,
  payload: value,
});

export const resetUserData = () => ({ type: RESET_USER_DATA });
export const logOutAction = () => ({ type: LOG_OUT });
