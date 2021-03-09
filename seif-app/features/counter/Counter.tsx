import React from "react";
import { useDispatch } from "react-redux";
import { NegativeButton, PositiveButton } from "../../components/button/style";
import { decrement, decrementByAmount, increment, incrementByAmount, useCounterState } from "./counterSlice";

export const Counter = () => {
  const dispatch = useDispatch();
  const state = useCounterState().counter;
  
  return (
    <>
      <PositiveButton onClick={() => dispatch(increment())}>Increment</PositiveButton>
      <NegativeButton onClick={() => dispatch(decrement())}>Decrement</NegativeButton>
      <br/>
      <PositiveButton onClick={() => dispatch(incrementByAmount({value : 10}))}>IncrementByAmount</PositiveButton>
      <NegativeButton onClick={() => dispatch(decrementByAmount({value : 10}))}>DecrementByAmount</NegativeButton>
      <p>값 : {state.value}</p>
    </>
  );
};