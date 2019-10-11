import * as React from "react";
import { IAuthState } from "../../store/models/IAuthState";
import { Redirect } from "react-router";
import { ProductsView } from "./products-view";

export const Products: React.FC<IAuthState> = props => {
  return props.isAuth ? <ProductsView /> : <Redirect to={"/sign"} />;
};
