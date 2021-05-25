import "./App.css";
//counter 만들기 : react hook, state 05/04

import React, { useState } from "react";

function Counter() {
  const [count, setCounter] = React.useState(0);

  return (
    <div className="Counter">
      <div>count is : {count}</div>
      <button onClick={() => setCounter(count + 1)}>+1</button>
      <button onClick={() => setCounter(count - 1)}>-1</button>
     
    </div>
  );
}
export default Counter;