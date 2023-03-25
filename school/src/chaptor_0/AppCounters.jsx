import React, { useState } from "react";
import AppCounter from "./AppCounter";

export default function AppCounters() {
  const [total, setTotal] = useState(0);
  const addTotal = () => {
    setTotal((prev) => prev + 1);
  };
  const minusTotal = () => {
    if (total > 0) setTotal((prev) => prev - 1);
  };

  return (
    <div>
      <fieldset>
        <legend>카운터</legend>
        <div>
          <h3>현재 총 카운터 수는{total}</h3>
        </div>
        <div className="num0">
          <AppCounter total={total} addTotal={addTotal} minusTotal={minusTotal}></AppCounter>
          <AppCounter total={total} addTotal={addTotal} minusTotal={minusTotal}></AppCounter>
        </div>
      </fieldset>
    </div>
  );
}
