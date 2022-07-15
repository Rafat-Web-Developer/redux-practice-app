import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementsByFive,
  incrementsByFive,
  resetByFive,
} from "../../Redux/Actions/CountByFiveAction";

const CountByFIve = () => {
  const countByFive = useSelector((state) => state.countByFiveReducer.count);

  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(incrementsByFive());
  };
  const handleDecrement = () => {
    dispatch(decrementsByFive());
  };
  const handleReset = () => {
    dispatch(resetByFive());
  };

  return (
    <div>
      <h2>Count By Five App</h2>
      <h3>Count : {countByFive}</h3>
      <button onClick={handleIncrement}>Increment By 5</button>
      <button onClick={handleDecrement}>Decrement By 5</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default CountByFIve;
