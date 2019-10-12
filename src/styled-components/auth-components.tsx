import React from "react";
import styled from "styled-components";
import {
  Avatar,
  Button,
  Checkbox,
  Container,
  createMuiTheme
} from "@material-ui/core/";
import { TextField } from "formik-material-ui";
import Link from "@material-ui/core/Link";
import { blue, red } from "@material-ui/core/colors";

export const themeMaterialUI = createMuiTheme({
  palette: {
    primary: blue,
    secondary: red
  }
});

export const StyledContainer = styled(props => <Container {...props} />)`
  max-width: 400px;
  min-width: 340px;
  padding: 10px;
  font-family: Roboto, sans-serif;
`;

export const StyledPaper = styled.div`
  margin-top: 200px;
  margin-bottom: 66px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  @media (max-width: 360px) {
    margin-bottom: 163px;
  }
`;

export const StyledAvatar = styled(Avatar)`
  margin: 10px;
  background-color: #e10050;
`;

export const StyledForm = styled.form`
  width: 100%;
  margin-top: 28px;
`;

export const StyledTextField = styled(TextField)`
  height: 77px;
  margin: 6px 0 0;
`;
export const StyledCheckbox = styled(Checkbox)`
  margin: 0 13px;
  padding: 0;
  width: 16px;
  height: 16px;
`;

export const StyledButton = styled(Button)`
  margin: 35px 0 15px;
  color: #ffffff;
  width: 100%;
  font-weight: 500;
  font-size: 14px;
  text-transform: none;
`;

export const ContainerLinks = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledLink = styled(Link)`
  text-align: right;
  @media (max-width: 360px) {
    width: 50%;
  }
`;
