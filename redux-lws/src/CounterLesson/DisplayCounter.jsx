import PropTypes from "prop-types";
const DisplayCounter = ({ count = 0 }) => {
   return (
      <div className="shadow-lg rounded-lg border max-w-lg mx-auto p-10">
         <h3 className="text-4xl font-medium">Count: {count}</h3>
      </div>
   );
};

export default DisplayCounter;

DisplayCounter.propTypes = {
   count: PropTypes.number.isRequired,
};
