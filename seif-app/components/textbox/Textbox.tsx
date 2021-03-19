import {RefObject, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const Textbox = () => {
  const [focus, setFocus] = useState(false);
  const inputCom:RefObject<HTMLInputElement>= useRef(null);

  const inputFocus = () => {
    setFocus(!focus);
  }

  useEffect(() => {
      inputCom.current?.addEventListener('focus', inputFocus);
      inputCom.current?.addEventListener('blur', inputFocus);
      return () => {
        inputCom.current?.removeEventListener('focus', inputFocus);
        inputCom.current?.removeEventListener('blur', inputFocus);
      };
  }, [])

  type focusType = {
    isFocus? : boolean;
  }

  const InputStyle = styled.input<focusType>`
    transition: all 0.2s;
    outline: none;
    border: none;
    border-radius: 4px;
    padding: 10px;
    font-size: 20px;
    width: ${props => props.isFocus ? '240px' : '150px'};
    background-color: #dddddd;
  `;

  return (
    <>
      <InputStyle 
        isFocus={focus}
        ref={inputCom}
      />
    </>
  );
};

export default Textbox;