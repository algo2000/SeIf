import styled from "styled-components";

export const DefaultButton = styled.button`
  height: 25px;
  color: white;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  background: linear-gradient(145deg, 
                              ${(p: {ver: string}) => p.ver == "negative" ? '#ff7575' : '#5bc6ff'},
                              ${(p: {ver: string}) => p.ver == "negative" ? '#e66262' : '#4da7db'});
`

export const NegativeButton = styled(DefaultButton)`
  background: linear-gradient(145deg, #ff7575, #e66262);
`

export const PositiveButton = styled(DefaultButton)`
  background: linear-gradient(145deg, #5bc6ff, #4da7db);
`