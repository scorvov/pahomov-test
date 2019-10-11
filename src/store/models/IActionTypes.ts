import { Action } from "redux";
import { IAuthState } from "./IAuthState";

export interface ISetAuthUserData extends Action {
  payload: IAuthState;
}
