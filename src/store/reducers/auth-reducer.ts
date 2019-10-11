import { AUTH_FETCH_SUCCEEDED } from "../constants";
import { IAuthState } from "../models/IAuthState";

const authInitialState: IAuthState = {
  isAuth: false
};

export const authReducer = (state = authInitialState, action: any) => {
  switch (action.type) {
    case AUTH_FETCH_SUCCEEDED:
      return {
        ...action.payload
      };

    default:
      return state;
  }
};
