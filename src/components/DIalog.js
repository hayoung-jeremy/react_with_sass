import React, { useEffect, useState } from "react";
import styled, { css, keyframes } from "styled-components";
import StyledButton from "./StyledButton";

const fadeIn = keyframes`
    from{
        opacity: 0
    }
    to{
        opacity: 1
    }
`;

const fadeOut = keyframes`
    from{
        opacity: 1
    }
    to{
        opacity: 0
    }
`;

const slideUp = keyframes`
    from{
        transform: translateY(100px);
    }
    to{
        transform: translateY(0px);
    }
`;

const slideDown = keyframes`
    from{
        transform: translateY(0px);
    }
    to{
        transform: translateY(100px);
    }
`;

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

  // fade In :
  animation-duration: 0.25s;
  animation-timing-function: ease-out;
  animation-name: ${fadeIn};
  animation-fill-mode: forwards;

  // fade Out :
  ${(props) =>
    props.disappear &&
    css`
      animation-name: ${fadeOut};
    `}
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

  // slide Up
  animation-duration: 0.25s;
  animation-timing-function: ease-out;
  animation-name: ${slideUp};
  animation-fill-mode: forwards;

  // slide Down
  ${(props) =>
    props.disappear &&
    css`
      animation-name: ${slideDown};
    `}
`;

const ButtonGroup = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: flex-end;
`;

const ShortMarginButton = styled(StyledButton)`
  & + & {
    margin-left: 0.5rem;
  }
`;

const Dialog = ({ title, children, cancelText, confirmText, onConfirm, onCancel, visible }) => {
  const [animate, setAnimate] = useState(false);
  const [localVisible, setLocalVisible] = useState(visible);

  useEffect(() => {
    // visible ?????? true -> false ??? ?????? ?????? ?????? : dialog box ?????? ??????????????? ?????? ????????? ?????? ???
    if (localVisible && !visible) {
      setAnimate(true);
      setTimeout(() => setAnimate(false), 200);
    }
    setLocalVisible(visible);
  }, [localVisible, visible]);

  // animate ?????? ???????????? dialog box ??? ???????????? ????????? delay ??? ???
  if (!animate && !localVisible) return null;
  return (
    <DarkBackground disappear={!visible}>
      <DialogBlock disappear={!visible}>
        <h3>{title}</h3>
        <p>{children}</p>
        <ButtonGroup>
          <ShortMarginButton color="gray" onClick={onCancel}>
            {cancelText}
          </ShortMarginButton>
          <ShortMarginButton color="pink" onClick={onConfirm}>
            {confirmText}
          </ShortMarginButton>
        </ButtonGroup>
      </DialogBlock>
    </DarkBackground>
  );
};

Dialog.defaultProps = {
  cancelText: "??????",
  confirmText: "??????",
};

export default Dialog;
