import { FocusEventHandler, useState } from "react";
import styled from "styled-components";

type InputStyleType = {
  focused: Boolean,
}

const InputContainer = styled.div<InputStyleType>`
  display:flex;
  flex-direction: column;
  margin: 15px 0;
  position:relative;

  & > input {
    border: 1px solid #eee;
    border-radius: 0.25rem;
    background-color: transparent;
    outline: none;
    padding: 12px 3px 12px 15px;
    font-size: 16px;
    transition: all 0.2s ease;
    z-index: 500;
  }
  & > label {
    color: #757575;
    position: absolute;
    top: 15px;
    left: 15px;
    transition: all 0.2s ease;
    z-index: 500;

    ${props => props.focused && `
      font-size: 13px;
      transform: translateY(-23px) translateX(-5px);
      z-index: 501;
      background: white;
      padding: 0 8px;
    `}
  }
`;

type InputType = {
  value?: string | undefined,
  type?: string | undefined,
  label?: string | undefined,
  onChange?: any,
  onFocus?: FocusEventHandler<HTMLInputElement> | undefined,
  onBlur?: FocusEventHandler<HTMLInputElement> | undefined,
  setRef?: any,
}

const Input = ({
  value,
  type,
  label,
  onChange,
  onFocus,
  onBlur,
  setRef,
  ...props
}:InputType) => {

  const [focused, setFocused] = useState<Boolean>(false);

  const handleOnFocus = () => {
    setFocused(true)
  }  

  const handleOnBlur = () => {
    setFocused(false)
  }

  const renderLabel = () => label && <label>{ label }</label>

  const isFocused = focused || String(value).length || type === "date"

  return (
    <InputContainer focused={isFocused}>
      { renderLabel() }
      <input 
        value={value}
        type={type}
        onChange={e => onChange(e.target.value)}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        ref={ref => setRef(ref)}
        {...props}
      />
    </InputContainer>
  )
}

Input.defaultProps = {
  type: "text",
  label: "",
  onChange: (text: string) => { console.error(`Missing onChange prop: ${text}`) },
  onFocus: () => {},
  onBlur: () => {},
  setRef: () => {},
}

export default Input