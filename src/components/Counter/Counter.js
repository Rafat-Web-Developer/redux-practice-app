import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrementAction,
  incrementAction,
  resetAction,
} from "../../Redux/Actions/CounterAction";

const Counter = () => {
  const count = useSelector((state) => state.counterReducer.count);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(incrementAction());
  };

  const handleDecrement = () => {
    dispatch(decrementAction());
  };

  const handleReset = () => {
    dispatch(resetAction());
  };

  return (
    <div>
      <h1>Counter App</h1>
      <h3>Count : {count}</h3>
      <button type="button" onClick={handleIncrement}>
        Increment
      </button>
      <button type="button" onClick={handleDecrement}>
        Decrement
      </button>
      <button type="button" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
};

export default Counter;
