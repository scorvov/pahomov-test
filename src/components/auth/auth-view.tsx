import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { StylesProvider } from "@material-ui/styles";
import {
  Avatar,
  Button,
  Checkbox,
  Container,
  Form,
  Links,
  Paper
} from "../../styled-components";
import { Copyright, Input } from "../ui";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import { blue, red } from "@material-ui/core/colors";
import { FormikProps } from "formik";
import { FormValues } from "../../types/form";

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: red
  }
});

export const AuthView: React.FC<FormikProps<FormValues>> = props => {
  const { isSubmitting, handleSubmit } = props;
  return (
    <MuiThemeProvider theme={theme}>
      <StylesProvider injectFirst>
        <Container component="main" maxWidth="xs">
          <Paper>
            <Avatar>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Вход в аккаунт
            </Typography>
            <Form onSubmit={handleSubmit}>
              <Input
                id="email"
                label="Почта *"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <Input
                name="password"
                label="Пароль *"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox color="primary" />}
                label="Запомнить меня"
              />
              <Button
                variant="contained"
                color="primary"
                type="submit"
                disabled={isSubmitting}
              >
                Войти в аккаунт
              </Button>
              <Links>
                <Link href="#" variant="body2">
                  Забыли пароль
                </Link>
                <Link href="#" variant="body2">
                  {"Еще нет аккаунта? Регистрация"}
                </Link>
              </Links>
            </Form>
          </Paper>
          <Box mt={8}>
            <Copyright />
          </Box>
        </Container>
      </StylesProvider>
    </MuiThemeProvider>
  );
};
