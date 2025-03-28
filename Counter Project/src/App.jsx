import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);
  const addValue = () => {
    if (counter >= 10) {
      alert("Counter value is already 10");
      return;
    }
    setCounter(counter + 1);
  };
  const subValue = () => {
    if (counter <= 0) {
      alert("Counter value will not be less than 0");
      return;
    }

    setCounter(counter - 1);
  };
  return (
    <>
      <h1>REACT Project</h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <br /> <br />
      <button onClick={subValue}>Subtract Value</button>
    </>
  );
}

export default App;
