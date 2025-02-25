import React, { useState } from "react";
import "../style.css";
const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => {
    if (count <= 0) {
      return setCount(0);
    }
    return setCount(count - 1);
  };

  return (
    <div className="container">
      <div>
        <h1 className="number">{count}</h1>
      </div>
      <div className="btns-container">
        <button onClick={decrement} className="increment">
          -
        </button>
        <button onClick={increment} className="increment">
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
