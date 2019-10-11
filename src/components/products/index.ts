import { connect } from "react-redux";
import { IAuthState } from "../../store/models/IAuthState";
import { IMapState } from "../../store/models/IMapState";
import { Products } from "./products";

const mapStateToProps = ({ authState }: IMapState): IAuthState => {
  const { isAuth } = authState;
  return { isAuth };
};

export default connect(mapStateToProps)(Products);
