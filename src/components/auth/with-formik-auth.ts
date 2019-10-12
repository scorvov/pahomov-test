import { AuthView } from "./auth-view";
import { withFormik } from "formik";
import * as Yup from "yup";
import { FormProps, FormValues } from "../../types/form";

export const AuthFormik = withFormik<FormProps, FormValues>({
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email("Здесь должна быть почта!")
      .max(30, "Слишком длинный адрес")
      .required("Требуется ввести почту!"),
    password: Yup.string()
      .min(8, "Пароль должен быть не менее 8 символов!")
      .required("Требуется ввести пароль!")
  }),

  mapPropsToValues: ({ email = "", password = "" }: FormProps) => ({
    email: email || "",
    password: password || ""
  }),
  handleSubmit: (
    values,
    { props: { authRequest }, resetForm, setSubmitting }
  ) => {
    authRequest(values);
    resetForm();
    setSubmitting(false);
  }
})(AuthView);
