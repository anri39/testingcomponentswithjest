import { useState } from "react";
import "../App.css";

type CounterProps = {
  initialCount: number;
  trueorfalse?: boolean;
};

export default function Counter({
  initialCount,
  trueorfalse = false,
}: CounterProps) {
  const [count, setCount] = useState(initialCount);
  const [isTrue, setIsTrue] = useState(trueorfalse);
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
      <div className="output" data-testid="count">
        {count}
      </div>
      <div className="output" data-testid="trueorfalse">
        {isTrue ? "true" : "false"}
      </div>
      <div className="buttons">
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
        <button onClick={reset}>reset</button>
        <button onClick={switchSigns}>switchsigns</button>
        <button
          onClick={() => {
            setIsTrue((prev) => !prev);
          }}
        >
          printtrue
        </button>
        <button
          onClick={() => {
            setCount((prev) => prev * 10);
          }}
        >
          timesten
        </button>
      </div>
    </div>
  );
}
