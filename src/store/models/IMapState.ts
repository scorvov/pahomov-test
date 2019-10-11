import { IAuthState } from "./IAuthState";
import { IDataState } from "./IDataState";

export interface IMapState {
  authState: IAuthState;
  dataState: IDataState;
}
