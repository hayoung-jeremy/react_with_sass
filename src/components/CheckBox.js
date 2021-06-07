import React from "react";

const CheckBox = ({ children, checked, ...rest }) => {
  return (
    <div>
      <label>
        <input type="checkbox" checked={checked} {...rest} />
        <div>{checked ? `it's checked` : `it's not checked`}</div>
      </label>
      <span>{children}</span>
    </div>
  );
};

export default CheckBox;
