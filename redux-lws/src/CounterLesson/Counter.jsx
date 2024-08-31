import PropTypes from "prop-types";

import Button from "./Button";

const Counter = ({ id, count, handleCount }) => {
   const thisCount = count?.find((c) => c.id === id);

   return (
      <div className="shadow-lg rounded-lg border max-w-lg mx-auto p-10 mb-4">
         <h3 className="text-4xl mb-4">{thisCount?.count}</h3>
         <div className="space-x-3">
            <Button
               onClick={() => handleCount(id, "add")}
               className={"btn-primary"}
            >
               Increment
            </Button>

            <Button
               onClick={() => handleCount(id, "subtract")}
               className={"btn-secondary"}
            >
               Decrement
            </Button>
         </div>
      </div>
   );
};

export default Counter;

Counter.propTypes = {
   id: PropTypes.number.isRequired,
   count: PropTypes.array.isRequired,
   handleCount: PropTypes.func.isRequired,
};
