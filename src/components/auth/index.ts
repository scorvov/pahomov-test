import {connect} from "react-redux";
import {AuthFormik} from "./with-formik-auth";
import {sendAuth} from "../../store/actions/auth-actions";
import {IAuthState} from "../../store/models/IAuthState";
import {IMapState} from "../../store/models/IMapState";


const mapStateToProps = ({authState}: IMapState): IAuthState => {
    const {isAuth} = authState;
    return {isAuth}
};

export const Auth = connect(mapStateToProps,
    {sendAuth})(AuthFormik);
