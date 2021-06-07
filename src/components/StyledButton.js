import React from "react";
import styled, { css } from "styled-components";
import { darken, lighten } from "polished";

const colorStyles = css`
  // color
  ${({ theme, color }) => {
    const selected = theme.palette[color];
    return css`
      background: ${selected};
      &:hover {
        background: ${lighten(0.05, selected)};
      }
      &:active {
        background: ${darken(0.1, selected)};
      }

      // outline
      ${(props) =>
        props.outline &&
        css`
          color: ${selected};
          background: none;
          border: 1px solid ${selected};
          &:hover {
            background: ${selected};
            color: white;
          }
        `}
    `;
  }}
`;

const sizes = {
  large: {
    height: "3rem",
    fontSize: "1.25rem",
  },
  medium: {
    height: "2.25rem",
    fontSize: "1rem",
  },
  small: {
    height: "1.75rem",
    fontSize: "0.875rem",
  },
};

const sizeStyles = css`
  ${({ size }) => css`
    height: ${sizes[size].height};
    font-size: ${sizes[size].fontSize};
  `}
`;

const fullWidthStyle = css`
  ${(props) =>
    props.fullWidthStyle &&
    css`
      width: 100%;
      &:not(:first-child) {
        margin-left: 0;
        margin-top: 0.75rem;
      }
    `}
`;

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

  // color
  ${colorStyles}

  // size
  ${sizeStyles}
  
  &:not(:first-child) {
    margin-left: 0.75rem;
  }

  // fullWidthStyle
  ${fullWidthStyle}
`;

const StyledButton = ({ children, color, size, outline, fullWidthStyle, ...rest }) => {
  return (
    <StyledBtn color={color} size={size} outline={outline} fullWidthStyle={fullWidthStyle} {...rest}>
      {children}
    </StyledBtn>
  );
};

StyledButton.defaultProps = {
  color: "pink",
  size: "medium",
};

export default StyledButton;
