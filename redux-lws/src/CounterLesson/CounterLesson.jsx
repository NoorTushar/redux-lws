import { useState } from "react";
import Counter from "./Counter";
import DisplayCounter from "./DisplayCounter";

const countData = [
   { id: 1, count: 0 },
   { id: 2, count: 0 },
];
const CounterLesson = () => {
   const [count, setCount] = useState([...countData]);

   const handleCount = (id, type) => {
      const matchedCount = count.find((c) => c.id === id);

      if (type === "add") {
         matchedCount.count = matchedCount.count + 1;
      } else if (type === "subtract") {
         matchedCount.count = matchedCount.count - 1;
      }

      const allOtherCounts = count.filter((count) => count.id !== id);

      setCount([...allOtherCounts, matchedCount]);
   };

   const totalCount = count.reduce((total, c) => total + c.count, 0);
   return (
      <>
         <Counter count={count} id={1} handleCount={handleCount} />
         <Counter count={count} id={2} handleCount={handleCount} />
         <DisplayCounter count={totalCount} />
      </>
   );
};

export default CounterLesson;
