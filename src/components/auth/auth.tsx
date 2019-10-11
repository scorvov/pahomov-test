import * as React from "react";
import { IAuthState } from "../../store/models/IAuthState";
import { IAuthRequest } from "../../types/form";
import { AuthFormik } from "./with-formik-auth";
import { Redirect } from "react-router";

export const Auth: React.FC<IAuthState & IAuthRequest> = ({
  isAuth,
  ...props
}) => {
  return !isAuth ? <AuthFormik {...props} /> : <Redirect to={"/"} />;
};
