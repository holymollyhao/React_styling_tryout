import React from "react";
import styled, { css } from "styled-components";

const Circle = styled.div`
  width: 5rem;
  height: 5rem;
  background: ${(props) => props.color || "black"};
  border-radius: 50%;
  ${(props) => {
    if (props.size) {
      return css`
        width: 20rem;
        height: 20rem;
      `;
    } else {
      return css`
        width: 10rem;
        height: 10rem;
      `;
    }
  }};
`;

function styledCircle({ color, size }) {
  return <Circle color={color} size={size} />;
}

export default styledCircle;
