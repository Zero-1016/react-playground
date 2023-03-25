import React, { useState } from "react";
import "./pointer.css";

export default function MovePointer() {
  const [client, setClient] = useState({ x: 0, y: 0 });
  return (
    <div
      className="container"
      onPointerMove={(e) => {
        setClient((client) => ({ ...client, x: e.clientX }));
        setClient((client) => ({ ...client, y: e.clientY }));
      }}
    >
      <div
        className="mousePointer"
        style={{ transform: `translate(${client.x - 40}px, ${client.y}px)` }}
      ></div>
    </div>
  );
}
