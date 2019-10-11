import { connect } from "react-redux";
import { authRequest } from "../../store/actions/auth-actions";
import { IAuthState } from "../../store/models/IAuthState";
import { IMapState } from "../../store/models/IMapState";
import { Auth } from "./auth";

const mapStateToProps = ({ authState }: IMapState): IAuthState => {
  return authState;
};

export default connect(
  mapStateToProps,
  { authRequest }
)(Auth);
