import React, { useMemo } from "react";
import styled from "styled-components";

const Button = ({ text = "Button", ...propsStyle }) => {
  const {
    backgroundColor = "#7951f9",
    rounded = "12px",
    width = "242px",
    height = "70px",
    color = "white",
    border = "none",
    boxShadow = ''
  } = propsStyle;

  const style = useMemo(() => {
    return {
      borderRadius: rounded,
      width,
      height,
      backgroundColor,
      color,
      border,
      boxShadow
    };
  }, [propsStyle]);

  return <ButtonStyled style={style}>{text}</ButtonStyled>;
};

export default Button;

const ButtonStyled = styled.button`
  font-weight: 600;
  font-size: 20px;
  line-height: 170.19%;
  :hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;
