import { useDispatch } from "react-redux";
import { decrement, decrementByAmount, increment, incrementByAmount, useCounterState } from "./counterSlice";

export const Counter = () => {
  const dispatch = useDispatch();
  const state = useCounterState().counter;
  
  return (
    <>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <br/>
      <button onClick={() => dispatch(incrementByAmount({value : 10}))}>IncrementByAmount</button>
      <button onClick={() => dispatch(decrementByAmount({value : 10}))}>DecrementByAmount</button>
      <p>값 : {state.value}</p>
    </>
  );
};