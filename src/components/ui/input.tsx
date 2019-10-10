import React from "react";
import { Field } from "formik";
import { TextField } from "../../styled-components";

export const Input = ({ ...props }) => {
  return (
    <Field
      component={TextField}
      {...props}
      variant="outlined"
      margin="normal"
      // required
      fullWidth
    />
  );
};
