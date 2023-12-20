import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let [counter, setCounter] = useState(15);
  // let counter = 5;
  const addValue = () => {
    console.log("clicked", counter);
    counter = counter + 1;
    setCounter(counter);
  };

  const removeValue = () => {
    setCounter(counter - 1);
  };
  return (
    <div>
      <h1> chai aur react</h1>
      <h2>counter value: {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removeValue}>Remove value</button>
    </div>
  );
}

export default App;
