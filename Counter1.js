import React, { useState } from 'react';
import './index.css';
function Counter() {
  // Initialize the counter state
  const [count, setCount] = useState(0);

  // Increase the counter
  const increment = () => {
    setCount(count + 1);
  };

  // Decrease the counter
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="counter-container">
      <h2>Counter: {count}</h2>
      <div className="button-group">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    </div>
  );
}

export default Counter;// JavaScript Document