import React, { useEffect, useState } from "react";
import { GrPowerReset } from "react-icons/gr";
import "../style.css";
const Counter = () => {
  const getInitial = () => {
    const stored = localStorage.getItem("number");
    return stored ? JSON.parse(stored) : 0;
  };

  const [count, setCount] = useState(getInitial);

  useEffect(() => {
    localStorage.setItem("number", JSON.stringify(count));
  }, [count]);

  const increment = () => {
    setCount((prevCount) => {
      const newCount = prevCount + 1;
      localStorage.setItem("number", JSON.stringify(newCount));
      return newCount;
    });
  };
  const decrement = () => {
    setCount((prevCount) => {
      const newCount = prevCount > 0 ? prevCount - 1 : 0;
      localStorage.setItem("number", JSON.stringify(newCount));
      return newCount;
    });
  };

  const reset = () =>
    setCount(() => {
      localStorage.setItem("number", JSON.stringify(0));
      return 0;
    });

  return (
    <div className="container">
      <div>
        <h1 className="number">{count}</h1>
      </div>
      <div className="btns-container">
        <button onClick={decrement} className="increment">
          -
        </button>
        <button onClick={reset} className="increment">
          <GrPowerReset />
        </button>
        <button onClick={increment} className="increment">
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
