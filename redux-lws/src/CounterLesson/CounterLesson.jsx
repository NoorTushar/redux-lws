import { useState } from "react";
import Counter from "./Counter";
import DisplayCounter from "./DisplayCounter";

const countData = [
   { id: 1, count: 0 },
   { id: 2, count: 0 },
];

const CounterLesson = () => {
   const [count, setCount] = useState(countData.map((item) => ({ ...item })));

   const handleCount = (id, type) => {
      setCount((prevCount) =>
         prevCount.map((c) => {
            if (c.id === id) {
               return {
                  ...c,
                  count: type === "add" ? c.count + 1 : c.count - 1,
               };
            }
            return c;
         })
      );
   };

   const totalCount = count.reduce((total, c) => total + c.count, 0);

   return (
      <>
         {count.map((data) => (
            <Counter
               key={data.id}
               count={count}
               id={data.id}
               handleCount={handleCount}
            />
         ))}

         <DisplayCounter count={totalCount} />
      </>
   );
};

export default CounterLesson;
