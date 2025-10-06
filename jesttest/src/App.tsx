import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount((prev) => prev + 1);
  };
  const decrement = () => {
    setCount((prev) => prev - 1);
  };
  const reset = () => {
    setCount(0);
  };
  const switchSigns = () => {
    setCount((prev) => prev * -1);
  };

  return (
    <div className="maincontainer">
      <div className="output">{count}</div>
      <div className="buttons">
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
        <button onClick={reset}>reset</button>
        <button onClick={switchSigns}>switch signs</button>
      </div>
    </div>
  );
}

export default App;
