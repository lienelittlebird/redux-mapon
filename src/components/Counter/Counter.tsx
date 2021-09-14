import { useAppDispatch, useAppSelector } from "../../state/hooks/hooks";
import {
  increment,
  decrement,
  incrementByAmount,
  decrementByAmount,
  multiplyByTwo,
  reset,
} from "../../state/slices/counterSlice";

import "./Counter.scss";

interface Props {}

const Counter = (props: Props) => {
  const currentCount = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div className="Counter">
      <h2>Counter</h2>
      <h3>Count: {currentCount}</h3>
      <div className="Controls">
        <button
          onClick={() => {
            dispatch(increment());
          }}
        >
          Increment
        </button>
        <button
          onClick={() => {
            dispatch(decrement());
          }}
        >
          Decrement
        </button>
        <button
          onClick={() => {
            dispatch(incrementByAmount(10));
          }}
        >
          Increment by 10
        </button>
        <button
          onClick={() => {
            dispatch(decrementByAmount(10));
          }}
        >
          Decrement by 10
        </button>
        <button
          onClick={() => {
            dispatch(multiplyByTwo());
          }}
        >
          Multiply by 2
        </button>
        <button
          onClick={() => {
            dispatch(reset());
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
