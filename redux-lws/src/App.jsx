import { useState } from "react";
import "./App.css";
import DisplayCounter from "./CounterLesson/DisplayCounter";
import Counter from "./CounterLesson/Counter";

const countData = [
   { id: 1, count: 0 },
   { id: 2, count: 0 },
];
function App() {
   const [count, setCount] = useState([...countData]);
   console.log("countData: ", countData);
   console.log("count: ", count);
   return (
      <>
         <Counter />
         <Counter />
         <DisplayCounter />
      </>
   );
}

export default App;
