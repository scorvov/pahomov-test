import {AuthView} from "./auth-view";
import {withFormik} from "formik";
import * as Yup from 'yup';
import {FormProps, FormValues} from "../../types/form";


export const AuthFormik = withFormik<FormProps,FormValues>({
    validationSchema: Yup.object().shape({
        email: Yup.string()
            .min(2, "Логин должен быть не менее 2 символов")
            .max(30, "Слишком длинный логин")
            .required("Требуется ввести почту"),
        password: Yup.string()
            .min(8, "Пароль должен быть не менее 8 символов")
            .required("Требуется ввести пароль")
    }),

    mapPropsToValues: ({email = '', password = ''}:FormProps) => ({
        email: email || '',
        password: password || ''
    }),
    handleSubmit: (values, {props:{sendAuth},resetForm, setSubmitting}) => {
        sendAuth(values);
        resetForm();
        setSubmitting(false);
    },
})(AuthView);
