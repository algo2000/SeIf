import styled, { css } from "styled-components";

interface CounterButtonType {
  positive? : boolean;
  negative? : boolean;
}

export const DefaultButton = styled.button<CounterButtonType>`
  height: 25px;
  color: white;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  ${props => props.positive && 
    css`
      background: linear-gradient(145deg, #5bc6ff, #4da7db);
  `};

  ${props => props.negative && 
    css`
      background: linear-gradient(145deg, #ff7575, #e66262);
  `};

  &:hover {
    opacity: 80%;
  }
`