import styled, { keyframes } from "styled-components";

const backChanging = keyframes`
  0%  {
    width: 515px;
    height: 388px;
    border-radius:0 0 0 0;
    background:coral;
    transform:rotate(0deg);
  }
  25%  {
    border-radius:50% 0 0 0;
    background:darksalmon;
    transform:rotate(45deg);
  }
  50%  {
    border-radius:50% 50% 0 0;
    background:indianred;
    transform:rotate(90deg);
  }
  75%  { 
    border-radius:50% 50% 50% 0;
    background:lightcoral;
    transform:rotate(135deg);
  }
  100% {  
    border-radius:50%;
    background:darksalmon;
    transform:rotate(180deg);
  }
`

const position = styled.div`
  margin:auto;
`;

const ChangingBack = styled(position)`
  width: 200px;
  height: 200px;
  background-color: coral;
  outline: 1px solid transparent;
  animation: ${backChanging} 2s 1s infinite cubic-bezier(1,.015,.295,1.225) alternate;
`;

// const ChangingSquare = () => {

//   return (
//     <>
    
//     </>
//   );
// }

export default ChangingBack