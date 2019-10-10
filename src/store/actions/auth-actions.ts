import {FormValues} from "../../types/form";



/*const setAuth = (isAuth: boolean):ISetAuthUserData =>
    ({type: SET_USER_DATA, payload: isAuth});*/

export const sendAuth = (values:FormValues) => {
    console.log(values);
};

