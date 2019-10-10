import styled from "styled-components";
import Container from "@material-ui/core/Container";
import React from "react";

export const StyledContainer = styled(props => <Container {...props} />)`
  max-width: 400px;
  min-width: 340px;
  padding: 10px;
`;
