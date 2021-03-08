import { useDispatch } from "react-redux";
import { decrement, increment, useCounterState } from "./counterSlice";

export const Counter = () => {
  const dispatch = useDispatch();
  const state = useCounterState().counter;
  
  return (
    <>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <p>값 : {state.value}</p>
    </>
  );
};