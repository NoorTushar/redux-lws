import { useState } from "react";

const Counter = () => {
   const [count, setCount] = useState(0);

   const handleCount = (operation) => {
      if (operation === "add") {
         setCount((value) => value + 1);
      } else if (operation === "subtract") {
         setCount((value) => value - 1);
      }
   };

   return (
      <div className="shadow-lg rounded-lg border max-w-lg mx-auto p-10 mb-4">
         <h3 className="text-4xl mb-4">{count}</h3>
         <div className="space-x-3">
            <button
               onClick={() => handleCount("add")}
               className="btn btn-success"
            >
               Increment
            </button>
            <button
               onClick={() => handleCount("subtract")}
               className="btn btn-error"
            >
               Decrement
            </button>
         </div>
      </div>
   );
};

export default Counter;
