import { useState, useEffect } from "react";

function MyComp() {
  const [cnt, setCnt] = useState(0);

  useEffect(() => {
    document.title = `count: ${cnt}`;
  }, [cnt, setCnt]);

  function inc() {
    setCnt((c) => c + 1);
  }
  function dec() {
    setCnt((c) => c - 1);
  }
  return (
    <div>
      <h2>useEffect hook</h2>
      <p>{cnt}</p>
      <button onClick={inc}>increment</button>
      <br />
      <button onClick={dec}>decrement</button>
    </div>
  );
}
export default MyComp;
