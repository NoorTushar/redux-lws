import PropTypes from "prop-types";

const Button = ({ onClick, className, children }) => {
   return (
      <button onClick={onClick} className={`btn ${className}`}>
         {children}
      </button>
   );
};

export default Button;

Button.propTypes = {
   onClick: PropTypes.func.isRequired,
   className: PropTypes.string.isRequired,
   children: PropTypes.node.isRequired,
};
