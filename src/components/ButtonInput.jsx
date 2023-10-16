import { PropTypes } from "prop-types";

const ButtonInput = ({
  type,
  className,
  value,
  setInitialValues,
  initialValues,
  calculation,
  barCharts,
}) => {
  return (
    <input
      type={type}
      value={value}
      className={className}
      onClick={() => {
        calculation(initialValues);
        setInitialValues(initialValues);
        barCharts(initialValues);
      }}
    />
  );
};
ButtonInput.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.string,
  initialValues: PropTypes.string,
};

export default ButtonInput;
