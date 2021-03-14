import React from "react";
import { useDispatch } from "react-redux";
import { DefaultButton } from "../../components/button/style";
import { decrement, decrementByAmount, increment, incrementByAmount, useCounterState } from "./counterSlice";

export const Counter = () => {
  const dispatch = useDispatch();
  const state = useCounterState().counter;
  
  return (
    <>
      <DefaultButton positive onClick={() => dispatch(increment())}>Increment</DefaultButton>
      <DefaultButton negative onClick={() => dispatch(decrement())}>Decrement</DefaultButton>
      <br/>
      <DefaultButton positive onClick={() => dispatch(incrementByAmount({value : 10}))}>IncrementByAmount</DefaultButton>
      <DefaultButton negative onClick={() => dispatch(decrementByAmount({value : 10}))}>DecrementByAmount</DefaultButton>
      <p>값 : {state.value}</p>
    </>
  );
};