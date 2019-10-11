import * as React from "react";
import { IAuthState } from "../../store/models/IAuthState";
import { Redirect } from "react-router";
import { ProductsView } from "./products-view";
import { IDataState } from "../../store/models/IDataState";

export const Products: React.FC<IAuthState & IDataState> = ({
  isAuth,
  ...props
}) => {
  return isAuth ? <ProductsView {...props} /> : <Redirect to={"/sign"} />;
};
