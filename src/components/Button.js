import React from "react";
import classNames from "classnames";
import "./Button.scss";

const Button = ({ children, size, color, outline, fullWidth, ...rest }) => {
  return (
    <button className={classNames("Button", size, color, { outline, fullWidth })} {...rest}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  size: "medium",
  color: "pink",
};

export default Button;
