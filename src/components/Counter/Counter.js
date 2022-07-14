import React from "react";
import { useSelector } from "react-redux";

const Counter = () => {
  const count = useSelector((state) => state.count);

  return (
    <div>
      <h1>Counter App</h1>
      <h3>Count : {count}</h3>
      <button type="button">Increment</button>
      <button type="button">Decrement</button>
      <button type="button">Reset</button>
    </div>
  );
};

export default Counter;
