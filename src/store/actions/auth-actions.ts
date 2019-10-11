import { FormValues } from "../../types/form";
import { ISetAuthUserData } from "../models/IActionTypes";
import { AUTH_FETCH_SUCCEEDED, AUTH_FETCH_REQUESTED } from "../constants";
import { IAuthState } from "../models/IAuthState";

export const authSuccess = (authData: IAuthState): ISetAuthUserData => ({
  type: AUTH_FETCH_SUCCEEDED,
  payload: authData
});

export const authRequest = (values: FormValues) => ({
  type: AUTH_FETCH_REQUESTED,
  payload: values
});
