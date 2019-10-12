import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Link from "@material-ui/core/Link";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { StylesProvider } from "@material-ui/styles";
import {
  Avatar,
  Button,
  Checkbox,
  ContainerAuth as Container,
  Form,
  ContainerLinks,
  StyledLink,
  Paper,
  themeMaterialUI
} from "../../styled-components";
import { Copyright, Input } from "../ui";
import { MuiThemeProvider, Tooltip } from "@material-ui/core";
import { FormikProps } from "formik";
import { FormValues } from "../../types/form";

export const AuthView: React.FC<FormikProps<FormValues>> = props => {
  const { isSubmitting, handleSubmit } = props;
  return (
    <MuiThemeProvider theme={themeMaterialUI}>
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
              <Tooltip title={"admin@gmail.com"} placement="right">
                <Input
                  id="email"
                  label="Почта *"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
              </Tooltip>
              <Tooltip title={"admin123"} placement="right">
                <Input
                  name="password"
                  label="Пароль *"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
              </Tooltip>
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
              <ContainerLinks>
                <Link href="#" variant="body2">
                  Забыли пароль
                </Link>
                <StyledLink href="#" variant="body2">
                  {"Еще нет аккаунта? Регистрация"}
                </StyledLink>
              </ContainerLinks>
            </Form>
          </Paper>
          <Copyright />
        </Container>
      </StylesProvider>
    </MuiThemeProvider>
  );
};
