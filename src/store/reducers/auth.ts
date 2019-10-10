import {SET_USER_DATA} from "../constants";

const authInitialState = {
    isAuth: false
};

export const authReducer = (state = authInitialState, action:any) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                isAuth: action.payload
            };

        default:
            return state;
    }
};
