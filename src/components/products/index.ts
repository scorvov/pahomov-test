import { connect } from "react-redux";
import { IAuthState } from "../../store/models/IAuthState";
import { IMapState } from "../../store/models/IMapState";
import { Products } from "./products";
import { IDataState } from "../../store/models/IDataState";

const mapStateToProps = ({
  authState,
  dataState
}: IMapState): IAuthState & IDataState => {
  const { isAuth } = authState;
  const { products } = dataState;
  return { isAuth, products };
};

export default connect(mapStateToProps)(Products);
