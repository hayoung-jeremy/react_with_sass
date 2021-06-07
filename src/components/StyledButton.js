import { darken, lighten } from "polished";
import React from "react";
import styled from "styled-components";

const StyledBtn = styled.button`
  // common
  display: inline-flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: none;
  border-radius: 4px;
  color: white;
  font-family: "Montserrat";
  font-weight: bold;
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;

  // size
  height: 2.25rem;
  font-size: 1rem;

  // color
  background: #228be6;
  &:hover {
    background: ${lighten(0.1, "#228be6")};
  }
  &:active {
    background: ${darken(0.1, "#228be6")};
  }

  & + & {
    margin-left: 1rem;
  }
`;

const StyledButton = ({ children, ...rest }) => {
  return <StyledBtn {...rest}>{children}</StyledBtn>;
};

export default StyledButton;
