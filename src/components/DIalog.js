import React from "react";
import styled from "styled-components";
import Button from "./Button";

const DarkBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
`;

const DialogBlock = styled.div`
  width: 320px;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid white;
  drop-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  h3 {
    margin: 0;
    font-size: 1.5rem;
  }
  p {
    font-size: 1.125rem;
  }
`;

const ButtonGroup = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: flex-end;
`;

const Dialog = ({ title, children, cancelText, confirmText }) => {
  return (
    <DarkBackground>
      <DialogBlock>
        <h3>{title}</h3>
        <p>{children}</p>
        <ButtonGroup>
          <Button color="gray">{cancelText}</Button>
          <Button color="pink">{confirmText}</Button>
        </ButtonGroup>
      </DialogBlock>
    </DarkBackground>
  );
};

Dialog.defaultProps = {
  cancelText: "취소",
  confirmText: "확인",
};

export default Dialog;
