import styled from "styled-components";

export const StyledLinks = styled.div`
  /*  display: flex;
  justify-content: space-between;*/
  a:nth-child(odd) {
    float: left;
  }
  a:nth-child(even) {
    display: block;
    text-align: right;
    //float: right;
  }
`;
