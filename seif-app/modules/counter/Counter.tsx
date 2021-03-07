import { increment } from "./counterSlice";
import { useAppDispatch } from "../../config/configureStore";
import { useSelector } from "react-redux";

export const Counter = () => {
  const {counter} = useSelector(state => state.counter);
  return (
    <button onClick={() => dispatch(increment())}/>
  );
};