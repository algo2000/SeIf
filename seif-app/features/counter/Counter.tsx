import React from "react";
import { useDispatch } from "react-redux";
import { DefaultButton } from "../../components/button/style";
import { decrement, decrementByAmount, increment, incrementByAmount, useCounterState } from "./counterSlice";

export const Counter = () => {
  const dispatch = useDispatch();
  const state = useCounterState().counter;
  
  const onClickIncrement = () => {
    dispatch(increment());
  };

  const onClickDecrement = () => {
    dispatch(decrement());
  };

  const onClickIncrementByAmount = () => {
    dispatch(incrementByAmount({value: 10}));
  };

  const onClickDecrementByAmount = () => {
    dispatch(decrementByAmount({value : 10}));
  };

  return (
    <>
      <DefaultButton positive onClick={onClickIncrement}>Increment</DefaultButton>
      <DefaultButton negative onClick={onClickDecrement}>Decrement</DefaultButton>
      <br/>
      <DefaultButton positive onClick={onClickIncrementByAmount}>IncrementByAmount</DefaultButton>
      <DefaultButton negative onClick={onClickDecrementByAmount}>DecrementByAmount</DefaultButton>
      <p>값 : {state.value}</p>
    </>
  );
};