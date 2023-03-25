import React, { useState } from "react";
import AppChampion from "./AppChampion";

export default function AppChampionStore() {
  const [showProducts, setProducts] = useState(false);
  return (
    <div>
      <button onClick={() => setProducts((e) => !e)}>Toggle</button>
      {showProducts && <AppChampion />}
    </div>
  );
}
