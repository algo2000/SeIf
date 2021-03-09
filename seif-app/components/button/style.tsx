import styled from "styled-components";

const DefaultButton = styled.button`
  height: 25px;
  color: white;
  border-radius: 8px;
  border: none;
  cursor: pointer;
`

export const NegativeButton = styled(DefaultButton)`
  background: linear-gradient(145deg, #ff7575, #e66262);
`

export const PositiveButton = styled(DefaultButton)`
  background: linear-gradient(145deg, #5bc6ff, #4da7db);
`