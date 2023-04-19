import React, { useState } from "react";

export default function AppCounter({ total, addTotal, minusTotal }) {
  const [count, setCount] = useState(0);
  return (
    <>
      <div>
        <div>
          <h1>
            현재 카운터 수는 <span>{count}</span>
          </h1>
        </div>
        <button
          onClick={() => {
            setCount((prev) => prev + 1);
            addTotal();
          }}
        >
          숫자를 증가시킵니다.
        </button>
        <button
          onClick={() => {
            if (count > 0) {
              setCount((prev) => prev - 1);
              minusTotal();
            }
          }}
        >
          숫자를 감소시킵니다.
        </button>
      </div>
    </>
  );
}
